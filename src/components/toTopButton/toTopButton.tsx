'use client'
import styles from './toTopButton.module.scss'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const ToTopButton = () => {
  // click animation
  gsap.registerPlugin(useGSAP, ScrollToPlugin)
  const container = useRef<HTMLDivElement>(null)
  const { contextSafe } = useGSAP({ scope: container })
  const handleClick = contextSafe(() => {
    gsap.to(window, { scrollTo: 0, ease: 'power2.inOut', duration: 1 })
  })
  // show/hide button
  const [show, setShow] = useState(false)
  const [stop, setStop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('#topHero') as HTMLElement
      const footer = document.querySelector('footer') as HTMLElement
      const body = document.querySelector('body') as HTMLElement
      const distance = hero ? hero.offsetHeight : 800
      window.scrollY > distance ? body.classList.add('scrolled') : body.classList.remove('scrolled')
      const enteringFooter =
        window.innerHeight + window.scrollY >= body.offsetHeight - footer.offsetHeight
      enteringFooter ? setStop(true) : setStop(false)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${styles.button} ${show ? styles.show : ''} ${stop ? styles.stop : ''}`}
      id="toTopButton"
      ref={container}
    >
      <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
          <circle className={styles.cls2} cx="17" cy="17" r="17" />
          <path
            className={styles.cls1}
            d="M8,19.14h1.75v4.99h1.54v-4.99h1.76v-1.37h-5.04v1.37ZM15.28,20.95c0-.35.07-.69.22-1,.14-.28.36-.51.63-.68.29-.17.62-.25.95-.24.33,0,.67.08.96.24.27.16.48.4.62.68.15.31.23.65.22,1,0,.35-.07.69-.22,1-.14.28-.36.51-.63.68-.28.17-.61.25-.94.24-.33,0-.66-.08-.95-.24-.27-.16-.49-.4-.63-.68-.15-.31-.23-.65-.22-1ZM13.65,20.95c0,.46.08.92.25,1.35.16.4.4.77.71,1.07.31.3.68.54,1.09.7.44.17.91.26,1.38.25.47,0,.94-.08,1.38-.25.41-.16.78-.4,1.09-.7.31-.31.55-.67.71-1.07.17-.43.26-.89.25-1.35,0-.46-.08-.92-.26-1.35-.16-.4-.41-.76-.72-1.06-.31-.3-.68-.53-1.09-.69-.43-.16-.89-.25-1.36-.24-.46,0-.92.08-1.35.24-.41.15-.78.39-1.09.69-.31.3-.56.66-.72,1.06-.18.43-.26.88-.26,1.34h0ZM21.66,17.77v6.36h1.54v-6.36h-1.54ZM22.62,19.03h1.25c.26-.02.52.06.73.21.18.15.28.38.26.61.01.23-.08.45-.26.6-.21.15-.47.22-.73.21h-1.25v1.26h1.25c.47.01.93-.07,1.36-.25.34-.15.64-.4.83-.72.19-.33.29-.71.28-1.1.01-.39-.09-.78-.28-1.12-.2-.32-.49-.57-.83-.71-.43-.18-.89-.26-1.36-.25h-1.25v1.26Z"
          />
          <path className={styles.cls3} d="M13.12,12.58l3.98-4.58,4.12,4.58" />
        </svg>
      </button>
    </div>
  )
}

export default ToTopButton
