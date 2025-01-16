'use client'
import styles from './homeHero.module.scss'
import ScrollButton from '@/components/scrollButton/scrollButton'
import dynamic from 'next/dynamic'
import { type MvElement } from '@/app/types'

interface HomeHeroProps {
  mv: MvElement[]
}

const HomeHeroSlider = dynamic(() => import('@/components/homeHeroSlider/homeHeroSlider'), {
  ssr: false,
})

const HomeHero: React.FC<HomeHeroProps> = ({ mv }) => {
  return (
    <section className={styles.section} id="topHero">
      <HomeHeroSlider mv={mv} />
      <ScrollButton />
    </section>
  )
}

export default HomeHero
