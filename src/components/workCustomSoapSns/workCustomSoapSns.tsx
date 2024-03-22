import styles from './workCustomSoapSns.module.scss'
import Image from 'next/image'
import img01 from '/public/assets/images/works/botanical-illustration-series/customSns_img_01.png'
import img02 from '/public/assets/images/works/botanical-illustration-series/customSns_img_02.png'

const WorkCustomSoapSns = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <Image src={img01} alt="mobile with instagram" sizes="(max-width: 768px) 100vw, 315px" />
        </div>
        <div className={styles.col2}>
          <p className={styles.link}>
            <a href="https://www.instagram.com/thecoldprocess.tokyo/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.62 28.62">
                <path d="M14.32,7.97c-3.5,0-6.34,2.84-6.34,6.34s2.84,6.34,6.34,6.34,6.34-2.84,6.34-6.34-2.84-6.34-6.34-6.34Z" />
                <path d="M28.61,7.32v-.28c-.02-.45-.07-.89-.16-1.33-.26-1.19-.81-2.3-1.6-3.22-.53-.59-1.15-1.11-1.83-1.52-.19-.12-.38-.22-.59-.31-.95-.43-1.98-.65-3.03-.66H7.21c-1.03,0-2.06.23-3,.66-.19.09-.37.2-.55.31-.68.41-1.3.92-1.83,1.52-.81.92-1.38,2.03-1.66,3.22C.07,6.15.02,6.6,0,7.05v14.23c-.02,1.63.51,3.23,1.49,4.53.05.07.11.13.16.19.31.36.64.7,1.01,1.01.88.7,1.92,1.2,3.02,1.45.54.12,1.09.17,1.65.17h13.97c2.19.03,4.27-.93,5.67-2.62l.17-.19c.99-1.3,1.51-2.9,1.49-4.53v-3.56c0-3.46,0-6.93,0-10.4ZM19.99,19.99c-3.14,3.13-8.22,3.12-11.35-.02-3.13-3.14-3.12-8.22.02-11.35s8.22-3.12,11.35.02c1.5,1.51,2.34,3.55,2.34,5.68,0,2.13-.85,4.17-2.36,5.68ZM22.95,7.69c-.85,0-1.55-.69-1.55-1.55s.69-1.55,1.55-1.55c.85,0,1.55.69,1.55,1.55s-.69,1.55-1.55,1.55h0Z" />
              </svg>
              @thecoldprocess.tokyo
            </a>
          </p>
          <Image src={img02} alt="soap illustration" sizes="(max-width: 768px) 100vw, 430px" />
        </div>
      </div>
    </div>
  )
}

export default WorkCustomSoapSns
