import styles from './scrollButton.module.scss'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const ScrollButton = () => {
  gsap.registerPlugin(ScrollToPlugin)
  const container = useRef(null)
  const { contextSafe } = useGSAP({ scope: container })
  const handleClick = contextSafe(() => {
    gsap.to(window, { scrollTo: '#homeWorks', ease: 'power2.inOut', duration: 1 })
  })

  return (
    <div className={styles.button} ref={container}>
      <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
          <title>scroll</title>
          <circle className={styles.cls3} cx="27" cy="27" r="27" />
          <path className={styles.cls1} d="M33.38,32.69l-6.33,7.28-6.56-7.28" />
          <path
            className={styles.cls2}
            d="M12.08,21.97c-.17-.18-.36-.33-.57-.45-.22-.13-.46-.24-.7-.33-.33-.12-.62-.22-.85-.33-.2-.08-.38-.19-.54-.33-.12-.11-.19-.26-.19-.43,0-.15.07-.3.19-.39.16-.11.36-.17.56-.16.18,0,.35.04.51.11.16.07.31.17.44.29.14.13.25.28.35.44l1.31-.73c-.14-.27-.32-.51-.53-.72-.25-.25-.54-.45-.87-.59-.39-.16-.81-.24-1.23-.23-.43,0-.86.08-1.25.24-.36.15-.67.39-.89.7-.22.32-.34.7-.33,1.09,0,.31.06.62.19.9.12.24.29.45.49.63.19.17.4.31.62.42.19.1.38.18.58.25.35.13.62.24.83.35.17.07.33.18.46.32.1.13.15.28.14.44,0,.2-.08.39-.24.51-.18.13-.4.2-.62.19-.23,0-.46-.05-.68-.15-.22-.11-.42-.26-.59-.44-.19-.2-.35-.43-.48-.68l-1.2.86c.17.35.4.67.68.93.3.29.65.52,1.03.67.41.17.84.25,1.29.25.33,0,.66-.05.97-.15.3-.09.59-.24.84-.43.25-.19.45-.43.59-.71.15-.3.22-.63.22-.96,0-.27-.04-.54-.14-.79-.09-.23-.22-.43-.39-.61Z"
          />
          <path
            className={styles.cls2}
            d="M17.56,18.12c-.54,0-1.07.08-1.57.26-.46.16-.88.42-1.24.76-.35.33-.62.73-.8,1.18-.19.48-.29.99-.28,1.51,0,.52.09,1.03.28,1.51.18.44.45.84.8,1.18.35.34.78.6,1.24.76.5.18,1.04.27,1.57.26.44.01.88-.05,1.29-.19.34-.13.65-.31.93-.53v-1.85c-.16.17-.34.32-.54.46-.21.15-.45.26-.69.35-.29.09-.59.14-.89.13-.37,0-.73-.08-1.06-.24-.32-.16-.59-.41-.78-.72-.2-.34-.3-.73-.29-1.12h0c-.01-.4.09-.79.29-1.13.19-.3.46-.55.78-.71.33-.16.69-.25,1.06-.24.3,0,.6.04.89.13.25.08.48.2.69.34.19.14.37.29.54.46v-1.85c-.28-.22-.6-.4-.93-.53-.42-.14-.85-.21-1.29-.19Z"
          />
          <path
            className={styles.cls2}
            d="M34.52,19.16c-.35-.33-.76-.6-1.21-.77-.48-.18-1-.27-1.52-.27-.52,0-1.03.09-1.51.27-.45.17-.87.43-1.22.77-.35.33-.62.73-.81,1.18-.2.48-.3.99-.29,1.5h0c0,.52.09,1.03.28,1.51.18.45.45.86.79,1.2.35.34.76.61,1.21.79.49.19,1.02.29,1.54.28.52,0,1.04-.09,1.53-.28.45-.18.87-.45,1.21-.79.34-.34.61-.75.79-1.2.19-.48.28-1,.28-1.51,0-.51-.09-1.02-.28-1.5-.18-.44-.45-.84-.8-1.18ZM33.54,22.95c-.16.31-.4.58-.7.76-.32.19-.68.28-1.05.27-.37,0-.74-.09-1.06-.27-.3-.18-.54-.44-.7-.76-.17-.34-.26-.73-.25-1.11h0c0-.39.08-.77.25-1.11.16-.31.4-.58.7-.76.32-.19.69-.28,1.06-.27.37-.01.74.08,1.07.27.3.18.54.44.69.76.17.35.25.73.24,1.11,0,.39-.08.77-.25,1.11Z"
          />
          <polygon
            className={styles.cls2}
            points="44.38 23.92 44.39 18.29 42.67 18.29 42.67 25.39 47.23 25.39 47.24 23.92 44.38 23.92"
          />
          <polygon
            className={styles.cls2}
            points="38.72 18.29 37.01 18.29 37.01 25.39 41.57 25.39 41.57 23.92 38.71 23.92 38.72 18.29"
          />
          <path
            className={styles.cls2}
            d="M25.6,22.63c.38-.17.7-.46.92-.82.21-.36.32-.78.31-1.2,0-.43-.1-.85-.31-1.21-.22-.36-.54-.64-.92-.82-.48-.21-1-.31-1.52-.29h-.87s-1.72,0-1.72,0v7.11h1.72v-2.47h.52l1.53,2.47h2.01l-1.87-2.7c.07-.02.14-.03.2-.06ZM23.21,19.74h.75c.2,0,.41.03.59.11.16.07.29.18.38.32.09.15.14.32.13.5,0,.18-.04.35-.13.5-.09.14-.22.25-.38.32-.19.08-.39.11-.59.11h-.75v-1.85Z"
          />
        </svg>
      </button>
    </div>
  )
}

export default ScrollButton
