import styles from './CustomerInsights.module.css'
import Image from 'next/image'
import world from '../../../../public/images/world.png'
import user from '../../../../public/images/userDepoiment.svg'
import support from '../../../../public/images/support.png'
import socialCare from '../../../../public/images/socialcare.png'

const CustomerInsights = () => {
    return (
        <div className={styles.background} id='Insights'>
            <div className={styles.margin}>
                <div className={styles.contentTop}>
                    <div className={styles.contentLeft}>
                        <h4>CUSTOMER <span className={styles.textEffect}>INSIGHTS</span></h4>
                        <p>
                            customers from around the 
                            world giving us feedback on our 
                            work and our commitment.
                        </p>
                        <Image
                        src={world}
                        alt='image world'
                        />
                    </div>
                    <div className={styles.contentRight}>
                        <p>
                            “Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Nullam pharetra vestibulum 
                            justo eget interdum”.
                        </p>
                        <div className={styles.contentDep}>
                            <div className={styles.textDep}>
                                <p>Buster Moon</p>
                                <p>CEO , Teatro Moon</p>
                            </div>
                            <Image
                                src={user}
                                alt='image User'
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.contentBotton}>
                    <div>
                        <h3>WHAT <span className={styles.textEffect}>MAKES US</span> DIFFERENT</h3>
                        <div className={styles.bottonCards}>
                            <div className={styles.cards}>
                                <Image
                                src={socialCare}
                                alt='Image Social Care'
                                />
                                <h4>DEDICATED <span className={styles.textEffect}>DEVELOPMENT TEAMS</span></h4>
                                <p>
                                    Fusce ac elit et purus tristique tinci dunt 
                                    id at nulla. Pelle ntesque nec vive rra ante. 
                                    Fusce  ac elit et purus trtique.
                                </p>
                            </div>
                            <div className={styles.cards}>
                            <Image
                                src={support}
                                alt='Image Support'
                                />
                                <h4>CONTINUOUS <span className={styles.textEffect}>FEEDBACK</span></h4>
                                <p>
                                    Fusce ac elit et purus tristique tinci dunt 
                                    id at nulla. Pelle ntesque nec vive rra ante. 
                                    Fusce  ac elit et purus trtique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInsights