'use client'
import { useEffect, useRef } from 'react'
import styles from './homeHeroSlider.module.scss'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const HomeHeroSlider = () => {
  const swiperElRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const mobileSuffix = isMobile ? '_sp' : ''

  const handleRealIndexChange = (swiper: any) => {
    const video = videoRef.current
    const realIndex = swiper.realIndex

    if (realIndex === 2 && video) {
      if (video.readyState !== 4) video.load()
    }
    if (realIndex === 3 && video) {
      if (video.readyState !== 4) video.load()
      video.currentTime = 0
      video.play()
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (isMobile && video) video.load()
  }, [isMobile])

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      className={styles.slider}
      ref={swiperElRef}
      pagination={{ clickable: true }}
      speed={500}
      loop={true}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      onRealIndexChange={handleRealIndexChange}
    >
      <SwiperSlide key="1" className={styles.slide}>
        <Image
          alt="EDITORIAL AND PRINT"
          src={`/assets/images/home/hero01${mobileSuffix}.png`}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </SwiperSlide>
      <SwiperSlide key="2" className={styles.slide}>
        <Image
          alt="MASCOTS AND CHARACTERS DESIGN"
          src={`/assets/images/home/hero02${mobileSuffix}.png`}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </SwiperSlide>
      <SwiperSlide key="3" className={styles.slide}>
        <Image
          alt="ANALOGUE ILLUSTRATION"
          src={`/assets/images/home/hero03${mobileSuffix}.png`}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </SwiperSlide>
      <SwiperSlide key="4" className={styles.slide}>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          loop
          poster={`/assets/images/home/hero04${mobileSuffix}.png`}
        >
          <source src={`/assets/video/tofesta${mobileSuffix}.mp4`} type="video/mp4" />
        </video>
      </SwiperSlide>
    </Swiper>
  )
}

export default HomeHeroSlider
