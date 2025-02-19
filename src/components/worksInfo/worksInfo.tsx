'use client'
import styles from './worksInfo.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'
import { type Work, type InfoItem } from '@/app/types'

interface WorksInfoProps {
  work: Work
}

const WorksInfo: React.FC<WorksInfoProps> = ({ work }) => {
  useEffect(() => {
    if (work.darkBackground) document.body.classList.add('dark')
    return () => document.body.classList.remove('dark')
  }, [work.darkBackground])

  // Render items for col1 with link distinction
  const renderCol1Item = (info: InfoItem, index: number) => {
    if (!info.col1Link) {
      return (
        <div key={`col1-${index}`}>
          <h2>{info.col1Title}: </h2>
          <p>{info.col1Paragraph}</p>
        </div>
      )
    } else {
      return (
        <div key={`col1-${index}`}>
          <h2>{info.col1Title}: </h2>
          <a href={info.col1LinkUrl} target="_blank" rel="noopener noreferrer">
            {info.col1LinkText}
          </a>
        </div>
      )
    }
  }

  // Render items for col2 with link distinction (same as above)
  const renderCol2Item = (info: InfoItem, index: number) => {
    if (!info.col2Link) {
      return (
        <div key={`col2-${index}`}>
          <h2>{info.col2Title}: </h2>
          <p>{info.col2Paragraph}</p>
        </div>
      )
    } else {
      return (
        <div key={`col2-${index}`}>
          <h2>{info.col2Title}: </h2>
          <a href={info.col2LinkUrl} target="_blank" rel="noopener noreferrer">
            {info.col2LinkText}
          </a>
        </div>
      )
    }
  }

  return (
    <section className={`${styles.section} ${work.darkBackground ? styles.dark : ''}`}>
      <h1 className={styles.title}>{work.title}</h1>
      <div className={styles.container}>
        <div className={styles.col1}>
          {work.col1 ? work.col1.map(renderCol1Item) : 'No info yet'}
        </div>
        <div className={styles.col2}>
          {work.col2 ? work.col2.map(renderCol2Item) : 'No info yet'}
        </div>
        <div className={styles.col3}>
          <h2>Tools: </h2>
          <ul className={styles.toolsList}>
            {work.tools
              ? work.tools.map((tool, index) => (
                  <li key={index}>
                    <Image
                      src={`/assets/images/common/icon_${tool}.svg`}
                      alt={tool}
                      width={43.48}
                      height={39.97}
                    />
                  </li>
                ))
              : 'no tools yet'}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WorksInfo
