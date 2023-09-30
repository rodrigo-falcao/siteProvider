import styles from './Infos.module.css'
import Image from 'next/image'
import airbnb from '../../../../public/images/airbnb.png'
import uber from '../../../../public/images/uber.png'
import amazon from '../../../../public/images/amazon.png'
import spotify from '../../../../public/images/spotify.png'
import google from '../../../../public/images/google.png'
import figma from '../../../../public/images/figma.png'


const Infos = () => {
    return (
        <div className={styles.background}>
            <div className={styles.margin}>
                <div className={styles.content}>
                    <div className={styles.contentTitle} id='Infos'>
                        <h3>they trusth <span className={styles.textEffects}>us</span></h3>
                    </div>
                    <div className={styles.logosComp}>
                        <div className={styles.logosLine}>
                            <Image
                            src={airbnb}
                            alt='image logo Airbnb'
                            />
                            <p>AirBnb</p>
                            <Image
                            src={uber}
                            alt='image logo Uber'
                            />
                            <p>Uber</p>
                        </div>

                        <div className={styles.logosLine}>
                            <Image
                            src={amazon}
                            alt='image logo amazon'
                            />
                            <p>Amazon</p>
                            <Image
                            src={spotify}
                            alt='image logo spotify'
                            />
                            <p>Spotify</p>
                        </div>

                        <div className={styles.logosLine}>
                            <Image
                            src={google}
                            alt='image logo google'
                            />
                            <p>Google</p>
                            <Image
                            src={figma}
                            alt='image logo figma'
                            />
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infos