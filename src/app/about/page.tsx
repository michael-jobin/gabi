import type { Metadata } from 'next'
import AboutIntro from '@/components/aboutIntro/aboutIntro'
import AboutProfile from '@/components/aboutProfile/aboutProfile'
import styles from './page.module.scss'
import { client } from '@/sanity/client'
import { type AboutInfo } from '@/app/types'

export const generateMetadata = async (): Promise<Metadata> => {
  const aboutData = await client.fetch<{ title: string; description: string }>(
    `*[_type == "about"]{ title, description }[0]`
  )
  return {
    title: aboutData?.title || 'About | Gabi Brewer',
    description: aboutData?.description || '',
  }
}

const options = { next: { revalidate: 30 } }

const Page = async () => {
  const { introduction, introductionJp, hobbies, career, exhibitions, profilePic } =
    await client.fetch<AboutInfo>(
      `*[_type == "about"]{ introduction,introductionJp, hobbies, career, exhibitions, profilePic }[0]`, {}, options
    )

  return (
    <main className={styles.main}>
      <AboutIntro introduction={introduction} introductionJp={introductionJp} />
      <AboutProfile hobbies={hobbies} career={career} exhibitions={exhibitions} profilePic={profilePic} />
    </main>
  )
}

export default Page
