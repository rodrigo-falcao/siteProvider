"use client";

import styles from './Menu.module.css';
import Image from 'next/image';
import logo from '../../../../public/images/imgLogoFull.png';
import arrow from '../../../../public/images/arrowUp.png';
import imgForm from '../../../../public/images/form.svg';
import Link from 'next/link';

const Menu = () => {
    return (
        <header>
            <div className={styles.presentation} id='Menu'>
                <div className={styles.root}>
                    <div className={styles.Margin}>
                        <div className={styles.content}>
                            <nav className={styles.contentLeft}>
                                <ul>
                                    <li> 
                                        <Link href="/#Presentation">
                                                SERVICES
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#Tecnologies">
                                            WORK
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#Insights">
                                        INSIGHTS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#Infos">
                                        COMPANY
                                        </Link>
                                    </li>
                                </ul>
                                <div className={styles.buttonContent}>
                                    <button>
                                        <Link href="/#Inputs">
                                        <Image
                                        src={imgForm}
                                        alt='image Form'
                                        />
                                        REQUEST A QUOTE
                                        </Link>
                                    </button>
                                </div>
                            </nav>
                            <div className={styles.contentRight}>
                                <Image 
                                src={logo}
                                alt='logo'
                                />
                                <h2>Provider for Software Development</h2>
                                <h4>We&apos;re your trusted partner in building 
                                    apps and products unique to your business.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backEclipse}>
                        <Link href="/#Presentation">
                        <button>
                            <Image 
                                className={styles.arrow}
                                src={arrow}
                                alt='fundo imagem seta para cima'
                            />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;
