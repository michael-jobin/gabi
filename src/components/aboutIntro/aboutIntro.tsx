import style from './aboutIntro.module.scss'
import Image from 'next/image'
import img01 from '/public/assets/images/about/aboutIntro_img01.png'
import AboutIntroButton from '../aboutIntroButton/aboutIntroButton'

const AboutIntro = () => {
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
          <p className={style.english}>
            My name is Gabriela Brewer, but please call me Gabi :)
            <br />
            I am an Argentinian Graphic Designer & Illustrator based in Tokyo, currently working as
            a freelancer.
            <br />
            <br />
            I mainly illustrate for print & web media, but also do branding, mascot/character design
            & animation.
            <br />
            I love critters, mythology & fantasy, which you can probably tell by the stuff I have
            here. <br />
            <br />
            This portfolio collects a wide variety of work, hope you like it!
            <br />
            Feel free to <a href="mailto:gabibrewer9@gmail.com">contact me</a> if you want to work
            together!
          </p>
          <p className={style.japanese}>
            グラフィックデザイナー＆イラストレーターのブルーワー・ガビと申します。アルゼンチン出身で、日本の広告代理店で６年間の経験を経て、現在は東京でフリーランサーとして活動しています。
            <br />
            <br />
            主に企業向けのウェブや印刷物のイラスト作成の他、ロゴデザインやマスコットキャラクター、アニメーション制作の経験があります。
            <br />
            こちらのポートフォリオサイトにはクライアントワークと個人のプロジェクトを掲載しています。
            <br />
            <br />
            お仕事の依頼やお見積りのご相談がありましたら、
            <br />
            お気軽に<a href="mailto:gabibrewer9@gmail.com">ご連絡ください。</a>
          </p>
          <AboutIntroButton />
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
