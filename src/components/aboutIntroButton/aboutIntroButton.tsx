'use client'
import styles from './aboutIntroButton.module.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRef } from 'react'

const AboutIntroButton = () => {
  gsap.registerPlugin(ScrollToPlugin)
  const container = useRef(null)
  const { contextSafe } = useGSAP({ scope: container })
  const handleClick = contextSafe(() => {
    gsap.to(window, { scrollTo: '#aboutProfile', ease: 'power2.inOut', duration: 1 })
  })
  return (
    <div ref={container} className={styles.container}>
      <button onClick={handleClick}>More info below!</button>
    </div>
  )
}

export default AboutIntroButton
