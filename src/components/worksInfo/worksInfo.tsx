'use client'
import styles from './worksInfo.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'

interface InfoItem {
  type: string
  title: string
  paragraph: string
  linkUrl?: string
}

interface Work {
  title: string
  tools?: Array<string>
  infoCol1?: Array<InfoItem>
  infoCol2?: Array<InfoItem>
  backgroundContrast?: string
}

interface WorksInfoProps {
  work: Work
}

const WorksInfo: React.FC<WorksInfoProps> = ({ work }) => {
  useEffect(() => {
    if (work.backgroundContrast === 'dark') document.body.classList.add('dark')
    return () => document.body.classList.remove('dark')
  }, [])

  // infos in column 1 and 2
  const renderItem = (info: InfoItem, index: number) => {
    if (info.type === 'text') {
      return (
        <div key={index}>
          <h2>{info.title}:</h2>
          <p> {info.paragraph}</p>
        </div>
      )
    } else if (info.type === 'link') {
      return (
        <div key={index}>
          <h2>{info.title}:</h2>{' '}
          <a href={info.linkUrl} target="blank">
            {info.paragraph}
          </a>
        </div>
      )
    }
  }
  return (
    <section
      className={`${styles.section} ${work.backgroundContrast === 'dark' ? styles.dark : ''}`}
    >
      <h1 className={styles.title}>{work.title}</h1>
      <div className={styles.container}>
        <div className={styles.col1}>
          {work.infoCol1 ? work.infoCol1.map(renderItem) : 'no info yet'}
        </div>
        <div className={styles.col2}>
          {work.infoCol2 ? work.infoCol2.map(renderItem) : 'no info yet'}
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
                      width={25}
                      height={25}
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
