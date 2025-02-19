'use client'
import Link from 'next/link'
import styles from './homeWorks.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import { type Work } from '@/app/types'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null

type HomeWorksProps = {
  works: Work[]
  tags: string[]
}

const HomeWorks: React.FC<HomeWorksProps> = ({ works, tags }) => {
  const [tag, setTag] = useState('ALL')

  const handleClick = (selectedTag: string) => {
    tag === selectedTag ? setTag('ALL') : setTag(selectedTag)
  }

  return (
    <section className={styles.section} id="homeWorks">
      <div className={styles.inner}>
        <h1 className={styles.title1}>WORKS & PROJECTS</h1>
        <p className={styles.choose}>
          Looking for something in particular? <br className="sp" />
          Choose a tag!
        </p>
        <ul className={styles.tagList}>
          {tags.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(item)}
                className={`${item === tag ? styles.active : ''}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.itemGrid}>
          {works
            .filter((work) => tag === 'ALL' || work.tags?.includes(tag))
            .map((work) => {
              const thumbnailUrl = work.thumbnail ? urlFor(work.thumbnail)?.url() : null

              return (
                <article key={work._id} className={styles.item}>
                  <Link href={`/works/${work.slug.current}`}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={thumbnailUrl || '/path/to/default-image.jpg'}
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
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default HomeWorks
