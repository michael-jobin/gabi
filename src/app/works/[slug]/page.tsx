import type { Metadata, ResolvingMetadata } from 'next'
import { works } from '@/data/worksList'
import WorksInfo from '@/components/worksInfo/worksInfo'
import WorksGallery from '@/components/worksGallery/worksGallery'
import styles from './page.module.scss'
import WorkSeeAlso from '@/components/worksSeeAlso/workSeeAlso'
import Image from 'next/image'

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

interface Work {
  slug: string
  title: string
  background: string
  backgroundImage?: string
}

const Page: React.FC<Props> = async ({ params, searchParams }) => {
  const { slug } = await params // Await params
  const search = await searchParams // Await searchParams if used

  const thisPageWork = works.find((e) => e.slug === slug)

  if (!thisPageWork) {
    return <div>Work not found</div>
  }

  const { background, backgroundImage } = thisPageWork

  return (
    <>
      <main className={styles.main} id={thisPageWork.slug}>
        <WorksInfo work={thisPageWork} />
        <WorksGallery work={thisPageWork} />
        <WorkSeeAlso work={thisPageWork} />
      </main>
      <div className={styles.backgroundImage} style={{ background }}>
        {backgroundImage && (
          <Image
            src={`/assets/images/works/${thisPageWork.slug}/${backgroundImage}`}
            alt={thisPageWork.title}
            fill
            sizes="100vw"
          />
        )}
      </div>
    </>
  )
}

export default Page
