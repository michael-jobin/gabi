'use client'
import Link from 'next/link'
import styles from './menu.module.scss'
import SnsList from '@/components/snsList/snsList'
import { useState } from 'react'
const Menu = () => {
  const [open, setOpen] = useState(false)
  const handleMenu = () => setOpen(!open)
  return (
    <>
      <button
        className={`${styles.hamburger} ${open ? styles.isActive : ''}`}
        onClick={handleMenu}
        id="hamburger"
        aria-name="open/close the menu"
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
      <aside className={`${styles.menu} ${open ? styles.isActive : ''}`} id="menu">
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link onClick={handleMenu} href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link onClick={handleMenu} href="/about">
                About Myself
              </Link>
            </li>
            <li>
              <a href="mailto:gabibrewer9@gmail.com">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.sns}>
          <SnsList />
        </div>
      </aside>
    </>
  )
}
export default Menu
