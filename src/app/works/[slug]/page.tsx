import type { Metadata, ResolvingMetadata } from 'next'
import { works } from '@/data/worksList'
import WorksInfo from '@/components/worksInfo/worksInfo'
import WorksGallery from '@/components/worksGallery/worksGallery'
import styles from './page.module.scss'
import WorkSeeAlso from '@/components/worksSeeAlso/workSeeAlso'
import Image from 'next/image'

// get the page slug
type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.slug
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

const Page: React.FC<Props> = ({ params }) => {
  const { slug } = params
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
