import styles from './Presentation.module.css'
import Image from 'next/image'
import SVG1 from '../../../../public/images/svg1.svg'
import SVG2 from '../../../../public/images/svg2.svg'

const Presentation = () => {
  return (
    <div className={styles.background} id='Presentation'>
      <div className={styles.margin}>
          <h3>Ready to make <span className={styles.colorP}>your business</span> accelerate</h3>
          <div className={styles.content}>

            <div className={styles.contentLeft}>
              <div className={styles.contentInfo}>
                <Image
                  src={SVG1}
                  alt='Imagem de site com </>'
                />
                <div className={styles.contentText}>
                  <h6>WEB DEVELOPMENT </h6>
                  <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Nullam pharetra vestibulum 
                    justo eget interdum. 
                  </p>
                </div>
              </div>

              <div className={styles.contentInfo}>
                <Image
                  src={SVG1}
                  alt='Imagem de site com </>'
                />
                <div className={styles.contentText}>
                  <h6>SEO</h6>
                  <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Nullam pharetra vestibulum 
                    justo eget interdum. 
                  </p>
                </div>
              </div>
              
            </div>

            <div className={styles.borderHalf}></div>

            <div className={styles.contentRight}>
              <div className={styles.contentInfo}>
                <Image
                  src={SVG2}
                  alt='Imagem de site com </>'
                />
                <div className={styles.contentText}>
                  <h6>MOBILE DEVELOPMENT</h6>
                  <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Nullam pharetra vestibulum 
                    justo eget interdum. 
                  </p>
                </div>
              </div>
              <div className={styles.contentInfo}>
                <Image
                  src={SVG2}
                  alt='Imagem de site com </>'
                />
                <div className={styles.contentText}>
                  <h6>AI</h6>
                  <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Nullam pharetra vestibulum 
                    justo eget interdum. 
                  </p>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Presentation