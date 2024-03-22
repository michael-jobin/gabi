import HomeHero from '@/components/homeHero/homeHero'
import HomeWorks from '@/components/homeWorks/homeWorks'
import styles from './page.module.scss'
const Page = () => {
  return (
    <main className={styles.main}>
      <HomeHero />
      <HomeWorks />
    </main>
  )
}

export default Page
