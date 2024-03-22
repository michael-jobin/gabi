'use client'
import styles from './homeHero.module.scss'
import ScrollButton from '@/components/scrollButton/scrollButton'
import dynamic from 'next/dynamic'
const HomeHeroSlider = dynamic(() => import('@/components/homeHeroSlider/homeHeroSlider'), {
  ssr: false,
})
const HomeHero = () => {
  return (
    <section className={styles.section} id="topHero">
      <HomeHeroSlider />
      <ScrollButton />
    </section>
  )
}

export default HomeHero
