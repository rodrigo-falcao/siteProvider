import styles from './Header.module.css';
import Image from 'next/image'
import Logo from '../../../../public/images/imgLogoFull.png'
import emailLogo from '../../../../public/images/logoemail.png'
import phone1 from '../../../../public/images/phone1.png'
import line1 from '../../../../public/images/Line1.png'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.margin}>
                <div className={styles.headerLogo}>
                    <Image 
                        src={Logo}
                        alt="logo da empresa"
                    />
                </div>
                <div className={styles.headerInfo}>
                    <div className={styles.infos}>
                        <Image 
                            src={emailLogo}
                            alt='logoEmail'
                        />
                        <p>info@empcomputing.com</p>
                    </div>
                    <Image
                        className={styles.lineMobile}
                        src={line1}
                        alt='lineWhite'
                    />
                    <div className={styles.infos}>
                        <Image 
                            src={phone1}
                            alt='logoEmail'
                        />
                        <p>+ 1 111 222 444 666</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;