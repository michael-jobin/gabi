import HomeHero from '@/components/homeHero/homeHero'
import HomeWorks from '@/components/homeWorks/homeWorks'
import styles from './page.module.scss'
import { client } from '@/sanity/client'
import { type Work, type HomePageData } from '@/app/types'

const POSTS_QUERY = `*[
  _type == "works"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, slug, date, tags, thumbnail}`

export async function generateMetadata() {
  const homeData = await client.fetch<{ title: string; description: string }>(
    `*[_type == "home"]{ title, description }[0]`
  )
  return {
    title: homeData.title,
    description: homeData.description,
  }
}

const Page = async () => {
  const [works, homeData] = await Promise.all([
    client.fetch<Work[]>(POSTS_QUERY),
    client.fetch<HomePageData>(`*[_type == "home"]{ tags, mv }[0]`),
  ])
  return (
    <main className={styles.main}>
      <HomeHero mv={homeData.mv} />
      <HomeWorks works={works} tags={homeData.tags} />
    </main>
  )
}

export default Page
