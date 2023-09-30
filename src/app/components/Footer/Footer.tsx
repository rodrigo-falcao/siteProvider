import styles from './Footer.module.css'
import Image from 'next/image'
import logo from '../../../../public/images/imgLogoFull.png'
import linkedin from '../../../../public/images/linkedinlogo.png'
import instagram from '../../../../public/images/instagramlogo.png'
import facebook from '../../../../public/images/facebooklogo.png'

const Footer = () => {
    return (
        <div className={styles.background}>
            <div className={styles.margin}>
                <div className={styles.content}>
                    <div className={styles.contentLeft}>
                        <Image
                        src={logo}
                        alt=''
                        />
                        <p>
                            Copyright 2023©  
                            Flash Computing.Ltd. | 
                            All Rights Reserved
                        </p>
                    </div>
                    <div className={styles.contentRight}>
                        <p>Let's connect</p>
                        <div>
                            <Image
                            src={linkedin}
                            alt=''
                            />
                            <Image
                            src={instagram}
                            alt=''
                            />
                            <Image
                            src={facebook}
                            alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer