import styles from './workSeeAlso.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import { type Work } from '@/app/types'

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source).url() : null

interface WorksInfoProps {
  slug: string
  allWorks: Work[]
}

const WorkSeeAlso: React.FC<WorksInfoProps> = ({ slug, allWorks }) => {
  const randomWorks = allWorks
    .filter((e) => e.slug.current !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>See Also</h2>
        <div className={styles.itemGrid}>
          {randomWorks.map((item, index) => (
            <article key={index} className={styles.item}>
              <Link href={`/works/${item.slug.current}`}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.thumbnail ? urlFor(item.thumbnail) || '' : ''}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 236px"
                  />
                </div>
                <div className={styles.textContainer}>
                  <h2>{item.title}</h2>
                  <p>
                    <time>{item.date}</time>
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSeeAlso
