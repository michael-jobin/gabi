import styles from './aboutProfile.module.scss'
import Image from 'next/image'
import { type AboutProfileProps } from '@/app/types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { client } from '@/sanity/client'

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source).url() : null

//images
import argentina from '/public/assets/images/common/icon_argentina.svg'
import japan from '/public/assets/images/common/icon_japan.svg'
import england from '/public/assets/images/common/icon_england.svg'
import illustrator from '/public/assets/images/common/icon_illustrator.svg'
import photoshop from '/public/assets/images/common/icon_photoshop.svg'
import aftereffect from '/public/assets/images/common/icon_aftereffect.svg'
import indesign from '/public/assets/images/common/icon_indesign.svg'
import xd from '/public/assets/images/common/icon_xd.svg'
import audition from '/public/assets/images/common/icon_audition.svg'
import blender from '/public/assets/images/common/icon_blender.svg'
import wacom from '/public/assets/images/common/icon_wacom.svg'
import pencil from '/public/assets/images/common/icon_pencil.svg'
import pen from '/public/assets/images/common/icon_pen.svg'
import brush from '/public/assets/images/common/icon_brush.svg'
import Age from '../Age'

const AboutProfile: React.FC<AboutProfileProps> = ({ exhibitions, career, hobbies, profilePic }) => {

  const profilePicUrl = urlFor(profilePic) || ''
  const { width, height } = getImageDimensions(profilePicUrl)

  return (
    <section className={styles.section} id="aboutProfile">
      <div className={styles.inner}>
        <div className={styles.col1}>
          <h2 className={styles.title}>Profile</h2>
          <Image
            src={profilePicUrl}
            alt="Gabi Brewer ガビ"
            sizes="(max-width: 768px) 100vw, 273px"
            className={styles.profilePic}
            width={width}
            height={height}
          />
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <td>Gabriela Brewer</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>
                  <Age /> years old
                </td>
              </tr>
              <tr>
                <th>Born in</th>
                <td>Cordoba,</td>
              </tr>
              <tr>
                <th>Living in</th>
                <td>Tokyo, Japan</td>
              </tr>
              <tr>
                <th>Majored in</th>
                <td>Graphic Design</td>
              </tr>
              <tr>
                <th>Hobbies</th>
                <td>{hobbies}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.col2}>
          <h2 className={styles.title}>Career</h2>
          <div className={styles.timeline}>
            {career.map((item, index) => (
              <div className={styles.step} key={index}>
                {item.flag ? (
                  <Image
                    src={`/assets/images/common/icon_${item.flag.toLowerCase()}.svg`}
                    alt={item.flag}
                    width={38}
                    height={25}
                    className={styles.flag}
                  />
                ) : null}
                <p className={styles.year}>{item.year}</p>
                <p className={styles.position}>{item.position}</p>
                <p className={styles.place}>{item.place}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.col3}>
          <div className={styles.block}>
            <h2 className={styles.title}>Languages</h2>
            <div className={styles.icontext}>
              <Image src={argentina} alt="argentina" />
              <p>
                Spanish
                <span>Native</span>
              </p>
            </div>
            <div className={styles.icontext}>
              <Image src={england} alt="england" />
              <p>
                English
                <span>Business Level</span>
              </p>
            </div>
            <div className={styles.icontext}>
              <Image src={japan} alt="japan" />
              <p>
                Japanese
                <span>N2 Level</span>
              </p>
            </div>
          </div>
          <h2 className={styles.title}>Exhibitions / Events</h2>
          {exhibitions.map((item, index) => (
            <div className={styles.exhibition} key={index}>
              <p className={styles.year}>{item.year}</p>
              <p className={styles.position}>{item.title}</p>
              <p className={styles.place}>{item.city}</p>
            </div>
          ))}
        </div>
        <div className={styles.col4}>
          <h2 className={styles.title}>Tools & Skills</h2>
          <div className={styles.blockWithLine}>
            <h3 className={styles.title2}>Adobe Software</h3>
            <div className={styles.icontext2}>
              <Image src={illustrator} alt="illustrator" />
              <p>Illustrator</p>
            </div>
            <div className={styles.icontext2}>
              <Image src={photoshop} alt="photoshop" />
              <p>Photoshop</p>
            </div>
            <div className={styles.icontext2}>
              <Image src={aftereffect} alt="aftereffect" />
              <p>After Effects</p>
            </div>
            <div className={styles.icontext2}>
              <Image src={indesign} alt="indesign" />
              <p>InDesign</p>
            </div>
            <div className={styles.icontext2}>
              <Image src={xd} alt="xd" />
              <p>XD</p>
            </div>
            <div className={styles.icontext2}>
              <Image src={audition} alt="audition" />
              <p>Audition</p>
            </div>
            <h3 className={styles.title2}>Other Software</h3>
            <div className={styles.icontext2}>
              <Image src={blender} alt="blender" />
              <p>
                Blender<span>Studying</span>
              </p>
            </div>
          </div>
          <h3 className={styles.title2}>Digital Illustration</h3>
          <div className={styles.icontext2}>
            <Image src={wacom} alt="wacom" />
            <p>Wacom Intuos</p>
          </div>
          <h3 className={styles.title2}>Analogue Illustration</h3>
          <div className={styles.icontext2}>
            <Image src={pencil} alt="pencil" />
            <p>Pencil</p>
          </div>
          <div className={styles.icontext2}>
            <Image src={pen} alt="pen" />
            <p>Pen</p>
          </div>
          <div className={styles.icontext2}>
            <Image src={brush} alt="brush" />
            <p>Watercolor Pencils</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProfile
