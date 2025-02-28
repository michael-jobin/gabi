import HomeHero from '@/components/homeHero/homeHero'
import HomeWorks from '@/components/homeWorks/homeWorks'
import styles from './page.module.scss'
import { client } from '@/sanity/client'
import { type Work, type HomePageData } from '@/app/types'

const POSTS_QUERY = `*[
  _type == "works"
  && defined(slug.current)
]|order(orderRank){_id, title, slug, date, tags, thumbnail}`

const options = { next: { revalidate: 30 } }

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
    client.fetch<Work[]>(POSTS_QUERY, {}, options),
    client.fetch<HomePageData>(`*[_type == "home"]{ tags, mv }[0]`, {}, options),
  ])
  return (
    <main className={styles.main}>
      <HomeHero mv={homeData.mv} />
      <HomeWorks works={works} tags={homeData.tags} />
    </main>
  )
}

export default Page
