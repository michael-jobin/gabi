import style from './aboutIntro.module.scss'
import Image from 'next/image'
import img01 from '/public/assets/images/about/aboutIntro_img01.png'
import AboutIntroButton from '../aboutIntroButton/aboutIntroButton'
import { PortableText } from '@portabletext/react'

interface AboutIntroProps {
  introduction: any[]
  introductionJp: any[]
}

const AboutIntro: React.FC<AboutIntroProps> = ({ introduction, introductionJp }) => {
  return (
    <section className={style.section}>
      <div className={style.imageArea}>
        <Image
          src={img01}
          alt="Gabi Brewer illustration ガビ"
          sizes="(max-width: 768px) 100vw, 58vw"
          priority
          fill
          placeholder="blur"
        />
      </div>
      <div className={style.textArea}>
        <div className={style.sticky}>
          <h1 className={style.title}>Welcome to my online portfolio!</h1>
          <div className={style.english}>
            <PortableText value={introduction} />
          </div>
          <div className={style.japanese}>
            <PortableText value={introductionJp} />
          </div>
          <AboutIntroButton />
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
