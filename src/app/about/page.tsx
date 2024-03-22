import type { Metadata } from 'next'
import AboutIntro from '@/components/aboutIntro/aboutIntro'
import AboutProfile from '@/components/aboutProfile/aboutProfile'
import styles from './page.module.scss'
export const metadata: Metadata = {
  title: 'about | Gabi Brewer',
  description:
    'My name is Gabriela Brewer, but please call me Gabi :) I am an Argentinian Graphic Designer & Illustrator based in Tokyo, currently working as a freelancer. ブルーワー・ガブリエラと申しますが、ガビで呼んでね！東京でフリーランサーとして活躍しているアルゼンチン出身のグラフィックデザイナー＆イラストレーターです。',
}
const Page = () => {
  return (
    <main className={styles.main}>
      <AboutIntro />
      <AboutProfile />
    </main>
  )
}

export default Page
