import styles from './technologies.module.css'
import Image from 'next/image'
import java from '../../../../public/images/java.png'
import react from '../../../../public/images/react.png'

const Technologies = () => {
    return (
        <div className={styles.background} id='Tecnologies'>
            <div className={styles.root}>
                <div className={styles.margin}>
                    <div className={styles.content}>
                        <h3>OUR CORE <span className={styles.textEffect}>TECHNOLOGIES</span></h3>
                        <div className={styles.contentPrinc}>
                            <div className={styles.contentLeft}>
                                
                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={java}
                                            alt='Image Java'
                                            />
                                            <h4>Java & scala</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={java}
                                            alt='Image Java'
                                            />
                                            <h4>Java & scala</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={java}
                                            alt='Image Java'
                                            />
                                            <h4>Java & scala</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.borderMobile}></div>
                            <div className={styles.contentCenter}>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={react}
                                            alt='Image React'
                                            />
                                            <h4>React js</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={react}
                                            alt='Image React'
                                            />
                                            <h4>React js</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={react}
                                            alt='Image React'
                                            />
                                            <h4>React js</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.borderMobile}></div>
                            <div className={styles.contentRight}>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={java}
                                            alt='Image Java'
                                            />
                                            <h4>Java & scala</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={java}
                                            alt='Image Java'
                                            />
                                            <h4>Java & scala</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>

                                <div className={styles.contentCard}>
                                    <div className={styles.cardText}>
                                        <div className={styles.cardTitle}>
                                            <Image
                                            src={java}
                                            alt='Image Java'
                                            />
                                            <h4>Java & scala</h4>
                                        </div>
                                        <p>Lorem ipsum dolor sit </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies