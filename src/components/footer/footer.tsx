import Styles from './footer.module.scss'
import SnsList from '@/components/snsList/snsList'
const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.sns}>
        <SnsList />
      </div>
      <p className={Styles.small1}>
        <small>
          当サイトに掲載されている画像や映像等は、自分の実績紹介の為です。
          <br />
          著作権の都合上、問題がございましたら、変更・削除いたしますのでご連絡ください。
        </small>
      </p>
      <p className={Styles.small2}>
        <small>© All rights reserved.</small>
      </p>
    </footer>
  )
}

export default Footer
