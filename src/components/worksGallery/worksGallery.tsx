import styles from './worksGallery.module.scss'
import Image from 'next/image'
import WorksVideo from '../worksVideo/worksVideo'
import WorksSlider from '../worksSlider/worksSlider'
import WorkCustomSoap from '../workCustomSoap/workCustomSoap'
import WorkCustomSoapSns from '../workCustomSoapSns/workCustomSoapSns'
import WorkCustomRaichoSns from '../workCustomRaichoSns/workCustomRaichoSns'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { client } from '@/sanity/client'
import { type Work } from '@/app/types'

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source).url() : null

interface WorksInfoProps {
  work: Work
}

const WorksGallery: React.FC<WorksInfoProps> = ({ work }) => {
  return (
    <div className={styles.gallery}>
      {work.gallery?.map((item, index) => {
        if (item.galleryType === 'image' && item.galleryImage) {
          const style: React.CSSProperties = {
            mixBlendMode: item.galleryMultiply ? 'multiply' : 'normal',
            margin: item.galleryMargin || 'auto',
            width: item.galleryWidth || '100%',
            border: item.galleryFrame ? '1.8rem solid #fff' : 'none',
            boxShadow: item.galleryBoxShadow ? '0px 3px 6px rgba(0, 0, 0, 0.2)' : 'none',
          }

          const imageUrl = urlFor(item.galleryImage) || ''
          const { width, height } = getImageDimensions(imageUrl)
          const isGif = imageUrl.endsWith('.gif')

          return (
            <div key={index} className={styles.item}>
              <Image
                alt={work.title}
                src={imageUrl}
                width={width}
                height={height}
                style={style}
                sizes="(max-width: 768px) 100vw, 1000px"
                priority={index === 0}
                unoptimized={isGif}
                className={ item.galleryMargin ? styles.customMargin : ''}
              />
            </div>
          )
        }

        if (item.galleryType === 'video' && item.galleryId) {
          const imageUrl = item.galleryThumbnail ? urlFor(item.galleryThumbnail) : ''
          return (
            <div key={index} className={styles.item}>
              <WorksVideo
                id={item.galleryId}
                thumbnail={imageUrl}
                title={item.galleryVideoTitle}
                subtitle={item.galleryVideoSubtitle}
                caption={item.galleryCaption}
              />
            </div>
          )
        }

        if (item.galleryType === 'slider' && item.slider) {

            const firstSlide = item.slider.slides[0]
            const firstSlideUrl = urlFor(firstSlide) || ''
            const { width, height } = getImageDimensions(firstSlideUrl)

          return (
            <div key={index} className={styles.item}>
              <WorksSlider
                slides={item.slider.slides.map((slide) => urlFor(slide) || '')}
                caption1={item.slider.slideCaption1}
                caption2={item.slider.slideCaption2}
                //slug={work.slug.current}
                width={width}
                height={height}
              />
            </div>
          )
        }

        if (item.galleryType === 'custom' && item.galleryCustom === 'custom-soap') {
          return (
            <div key={index} className={styles.item}>
              <WorkCustomSoap />
            </div>
          )
        }

        if (item.galleryType === 'custom' && item.galleryCustom === 'custom-soap-sns') {
          return (
            <div key={index} className={styles.item}>
              <WorkCustomSoapSns />
            </div>
          )
        }

        if (item.galleryType === 'custom' && item.galleryCustom === 'custom-raicho-sns') {
          return (
            <div key={index} className={styles.item}>
              <WorkCustomRaichoSns />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

export default WorksGallery
