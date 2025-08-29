'use client'
import styles from './worksSlider.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface WorksSliderProps {
  slides: Array<String>
  caption1: Array<String> | undefined
  caption2: Array<String> | undefined
  //slug: string
  width: number
  height: number
}

const WorksSlider: React.FC<WorksSliderProps> = ({ slides, caption1, caption2, width, height }) => {
  const [sliderIndex, setSliderIndex] = useState(0)

  return (
    <div className={styles.section}>
      <div className={`${styles.container} worksSlider_container`}>
        <Image
          alt="thumbnail"
          src={slides[0].toString()}
          sizes="(max-width: 768px) 100vw, 758px"
          width={width}
          height={height}
           className={styles.imageSizer}
        />
        <Image
          alt="thumbnail"
          src={slides[sliderIndex].toString()}
          sizes="(max-width: 768px) 100vw, 758px"
          fill
          className={styles.image}
        />
        <button
          className={styles.prev}
          onClick={() => setSliderIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          aria-label="previous"
        >
          <svg viewBox="0 0 15.82 17.67">
            <path d="M1,10.57c-.96-.55-1.28-1.78-.73-2.73.18-.3.43-.55.73-.73L12.82.27c.96-.55,2.18-.22,2.73.73.18.3.27.65.27,1v13.68c0,1.1-.9,2-2,2-.35,0-.7-.09-1-.27L1,10.57Z" />
          </svg>
        </button>
        <button
          className={styles.next}
          onClick={() => setSliderIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          aria-label="next"
        >
          <svg viewBox="0 0 15.82 17.67">
            <path d="M14.82,7.1c.96.55,1.28,1.78,.73,2.73-.18,.3-.43,.55-.73,.73L3,17.4c-.96,.55-2.18,.22-2.73-.73-.18-.3-.27-.65-.27-1V1.99c0-1.1,.9-2,2-2,.35,0,.7,.09,1,.27L14.82,7.1Z" />
          </svg>
        </button>
      </div>

      {caption1 && <p className={styles.caption1}>{caption1[sliderIndex]}</p>}
      {caption2 && <p className={styles.caption2}>{caption2[sliderIndex]}</p>}
    </div>
  )
}

export default WorksSlider
