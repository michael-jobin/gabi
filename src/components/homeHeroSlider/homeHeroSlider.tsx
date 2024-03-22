'use client'
import { useEffect, useRef } from 'react'
import styles from './homeHeroSlider.module.scss'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { register, SwiperContainer } from 'swiper/element/bundle'
import type { Swiper } from 'swiper'
register()

const HomeHeroSlider = () => {
  const swiperElRef = useRef<SwiperContainer>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const mobileSuffix = isMobile ? '_sp' : ''

  // slider logic
  useEffect(() => {
    const video = videoRef.current
    function onSwiperSlideChange(event: CustomEvent<[e: Swiper]>) {
      const realIndex = event.detail[0].realIndex
      if (realIndex === 2 && video) {
        if (video.readyState !== 4) video.load()
      }
      if (realIndex === 3 && video) {
        if (video.readyState !== 4) video.load()
        video.currentTime = 0
        video.play()
      }
    }

    const swiper = swiperElRef.current
    // @ts-ignore
    swiper?.addEventListener('swiperrealindexchange', onSwiperSlideChange)
    return () => {
      // @ts-ignore
      swiper?.removeEventListener('swiperrealindexchange', onSwiperSlideChange)
    }
  }, [])

  return (
    <swiper-container
      class={styles.slider}
      ref={swiperElRef}
      pagination="true"
      pagination-clickable="true"
      speed="500"
      loop="true"
      autoplay-delay="7000"
      autoplay-disable-on-interaction="false"
    >
      <swiper-slide key="1" class={styles.slide}>
        <Image
          alt="aboutImage"
          src={`/assets/images/home/hero01${mobileSuffix}.png`}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </swiper-slide>
      <swiper-slide key="2" class={styles.slide}>
        <Image
          alt="aboutImage"
          src={`/assets/images/home/hero02${mobileSuffix}.png`}
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </swiper-slide>
      <swiper-slide key="3" class={styles.slide}>
        <Image
          alt="aboutImage"
          src={`/assets/images/home/hero03${mobileSuffix}.png`}
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </swiper-slide>
      <swiper-slide key="4" class={styles.slide}>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          loop
          poster={`/assets/images/home/hero04${mobileSuffix}.png`}
        >
          <source src={`/assets/video/tofesta${mobileSuffix}.mp4`} type="video/mp4" />
        </video>
      </swiper-slide>
    </swiper-container>
  )
}

export default HomeHeroSlider
