import Link from 'next/link'
import Image from 'next/image'
import image404 from '/public/assets/images/common/e404.png'
import styles from './not-found.module.scss'
const NotFound = () => {
  return (
    <section className={styles.e404}>
      <Image src={image404} alt="oopsie error 404" className="e404__img" sizes="100vw" priority />
      <div className={styles.e404__text}>
        <h2>Page not found!</h2>
        <p>
          The project was either
          <br />
          removed or the link was
          <br />
          modified. Sorry !!
          <br />
          <Link href="/">Back to the top</Link>
        </p>
      </div>
    </section>
  )
}

export default NotFound
