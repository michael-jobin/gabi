import type { Metadata } from 'next'
import AboutIntro from '@/components/aboutIntro/aboutIntro'
import AboutProfile from '@/components/aboutProfile/aboutProfile'
import styles from './page.module.scss'
import { client } from '@/sanity/client'

export const generateMetadata = async (): Promise<Metadata> => {
  const aboutData = await client.fetch<{ title: string; description: string }>(
    `*[_type == "about"]{ title, description }[0]`
  )
  return {
    title: aboutData?.title || 'About | Gabi Brewer',
    description: aboutData?.description || '',
  }
}

const Page = async () => {
  const { introduction, introductionJp } = await client.fetch<{
    introduction: any[]
    introductionJp: any[]
  }>(`*[_type == "about"]{ introduction,introductionJp }[0]`)

  return (
    <main className={styles.main}>
      <AboutIntro introduction={introduction} introductionJp={introductionJp} />
      <AboutProfile />
    </main>
  )
}

export default Page
