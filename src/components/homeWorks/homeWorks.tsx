'use client'
import Link from 'next/link'
import styles from './homeWorks.module.scss'
import { useState } from 'react'
import { tagList } from '@/data/tagList'
import { works } from '@/data/worksList'
import Image from 'next/image'
const HomeWorks = () => {
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
          {tagList.map((item, index) => (
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
            .filter((work) => work.tags.includes(tag))
            .map((work, index) => (
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

export default HomeWorks
