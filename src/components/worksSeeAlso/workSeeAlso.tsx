import { works } from '@/data/worksList'
import styles from './workSeeAlso.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface Work {
  slug: string
}

interface WorksInfoProps {
  work: Work
}
const WorkSeeAlso: React.FC<WorksInfoProps> = ({ work }) => {
  const otherworks = works.filter((e) => e.slug !== work.slug)
  const randomWorks = otherworks.sort(() => Math.random() - 0.5).slice(0, 4)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>See Also</h2>
        <div className={styles.itemGrid}>
          {randomWorks.map((work, index) => (
            <article key={index} className={styles.item}>
              <Link href={`/works/${work.slug}`}>
                <div className={styles.imageContainer}>
                  <Image
                    src={`/assets/images/home/${work.thumbnail}`}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 236px"
                  />
                </div>
                <div className={styles.textContainer}>
                  <h2>{work.title}</h2>
                  <p>
                    <time>{work.date}</time>
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
