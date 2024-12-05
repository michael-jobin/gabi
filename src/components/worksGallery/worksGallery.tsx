import styles from './worksGallery.module.scss'
import Image from 'next/image'
import WorksVideo from '../worksVideo/worksVideo'
import WorksSlider from '../worksSlider/worksSlider'
import WorkCustomSoap from '../workCustomSoap/workCustomSoap'
import WorkCustomSoapSns from '../workCustomSoapSns/workCustomSoapSns'
import WorkCustomRaichoSns from '../workCustomRaichoSns/workCustomRaichoSns'

interface InfoItem {
  type: string
  src?: string
  caption?: string
  width?: number
  height?: number
  mixBlendMode?: string
  id?: string
  thumbnail?: string
  slides?: Array<String>
  slideCaption1?: Array<String>
  slideCaption2?: Array<String>
  margin?: string
  frame?: boolean
  boxShadow?: boolean
}

interface Work {
  gallery?: Array<InfoItem>
  title: string
  slug: string
}

interface WorksInfoProps {
  work: Work
}

const WorksGallery: React.FC<WorksInfoProps> = ({ work }) => {
  return (
    <div className={styles.gallery}>
      {work.gallery?.map((item, index) => {
        const style: React.CSSProperties = {
          mixBlendMode: item.mixBlendMode as React.CSSProperties['mixBlendMode'],
          margin: item.margin as React.CSSProperties['margin'],
          border: item.frame ? '1.8rem solid #fff' : 'none',
          boxShadow: item.boxShadow ? '0px 3px 6px rgba(0, 0, 0, 0.2)' : 'none',
        }

        const isGif = item.src?.endsWith('.gif')

        return (
          <div key={index} className={styles.item}>
            {item.type === 'image' && (
              <Image
                alt={work.title}
                src={`/assets/images/works/${work.slug}/${item.src}`}
                width={item.width}
                height={item.height}
                style={style}
                className={item.margin ? styles.customMargin : ''}
                sizes="(max-width: 768px) 100vw, 1000px"
                {...(isGif && { unoptimized: true })}
                {...(index === 0 && { priority: true })}
              />
            )}
            {item.type === 'video' && item.id && (
              <WorksVideo
                id={item.id}
                thumbnail={item.thumbnail}
                caption={item.caption}
                slug={work.slug}
              />
            )}
            {item.type === 'slider' && item.slides && (
              <WorksSlider
                slides={item.slides}
                caption1={item.slideCaption1}
                caption2={item.slideCaption2}
                slug={work.slug}
              />
            )}
            {item.type === 'custom-soap' && <WorkCustomSoap />}
            {item.type === 'custom-soap-sns' && <WorkCustomSoapSns />}
            {item.type === 'custom-raicho-sns' && <WorkCustomRaichoSns />}
          </div>
        )
      })}
    </div>
  )
}

export default WorksGallery
