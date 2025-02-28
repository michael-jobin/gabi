// import { useRef, useEffect } from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './workCustomSoap.module.scss'
import Image from 'next/image'
import img01 from '/public/assets/images/works/botanical-illustration-series/custom_img_01.gif'
import img02 from '/public/assets/images/works/botanical-illustration-series/custom_img_02.gif'
import img03 from '/public/assets/images/works/botanical-illustration-series/custom_img_03.gif'

const WorkCustomSoap = () => {
  // const container = useRef<HTMLDivElement>(null)
  // gsap.registerPlugin(useGSAP, ScrollTrigger)
  // useGSAP(
  //   () => {
  //     const pictures = gsap.utils.toArray('.picture')
  //     const imgages = gsap.utils.toArray('.picture img')
  //     pictures.forEach((picture, index) => {
  //       gsap.to(imgages[index] as HTMLElement, {
  //         y: '-3rem',
  //         ease: 'none',
  //         scrollTrigger: {
  //           trigger: picture as HTMLElement,
  //           start: 'top bottom',
  //           end: 'bottom top',
  //           scrub: 1,
  //         },
  //       })
  //     })
  //   },
  //   { scope: container }
  // )

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={`${styles.picture} picture`}>
            <Image alt="soap" src={img01} sizes="(max-width: 768px) 100vw, 430px" fill unoptimized />
          </div>
          <div className={`${styles.picture} picture`}>
            <Image alt="soap" src={img02} sizes="(max-width: 768px) 100vw, 430px" fill unoptimized />
          </div>
        </div>
        <div className={styles.col}>
          <p className={styles.text}>
            Body, Face & Hair Soap Short <br />
            GIF animations made for social media.
          </p>
          <div className={`${styles.picture} picture`}>
            <Image alt="soap" src={img03} sizes="(max-width: 768px) 100vw, 430px" fill unoptimized />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCustomSoap
