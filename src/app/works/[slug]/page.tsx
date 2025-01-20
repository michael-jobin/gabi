import type { Metadata, ResolvingMetadata } from 'next'
import WorksInfo from '@/components/worksInfo/worksInfo'
import WorksGallery from '@/components/worksGallery/worksGallery'
import styles from './page.module.scss'
import WorkSeeAlso from '@/components/worksSeeAlso/workSeeAlso'
import Image from 'next/image'
import { client } from '@/sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const WORK_QUERY = `*[_type == "works" && slug.current == $slug][0]`
const ALL_WORKS_QUERY = `*[_type == "works"]{
  _id,
  slug { current },
  title,
  date,
  thumbnail
}`

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug: id } = await params
  const search = await searchParams // Await searchParams if required
  return {
    title: `Gabi Brewer｜${id}`,
    description: `${id}`,
  }
}

const Page: React.FC<Props> = async ({ params, searchParams }) => {
  const { slug } = await params
  const search = await searchParams // Await searchParams if used
  const work = await client.fetch(WORK_QUERY, { slug })
  const allWorks = await client.fetch(ALL_WORKS_QUERY)

  if (!work) {
    return <div>Work not found</div>
  }

  const { title, backgroundColor, backgroundImage } = work
  const backgroundImageUrl = backgroundImage ? urlFor(backgroundImage)?.url() : null

  return (
    <>
      <main className={styles.main} id={work.slug.current}>
        <WorksInfo work={work} />
        <WorksGallery work={work} />
        <WorkSeeAlso slug={work.slug.current} allWorks={allWorks} />
      </main>
      <div className={styles.backgroundImage} style={{ background: backgroundColor.hex }}>
        {backgroundImageUrl && <Image src={backgroundImageUrl} alt={title} fill sizes="100vw" />}
      </div>
    </>
  )
}

export default Page
