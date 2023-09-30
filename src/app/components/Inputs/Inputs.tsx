import styles from './Inputs.module.css'

const Inputs = () => {
    return (
        <div className={styles.background} id='Inputs'>
            <div className={styles.root}>
                <div className={styles.margin}>
                    <div className={styles.content}>
                        <div className={styles.contentLeft}>
                            <h3>Want to discuss <span className={styles.textEffects}>your</span> idea?</h3>
                            <p>
                                Fusce ac elit et purus tristique tinci 
                                dunt id at nulla. Pelle ntesque nec vive 
                                rra ante. Fusce  ac elit et purus trtique.
                            </p>
                            <h4>
                                Drop us a line and we will 
                                connect you to our experts.
                            </h4>
                        </div>
                        <div className={styles.contentRight}>
                            <h3>Let&apos;s Get <span className={styles.textEffects2}>Started</span></h3>
                            <p>Fusce ac elit et purus tristique tinci dunt .</p>
                            <form action="" className={styles.form}>
                                <input 
                                className={styles.inputTp1}
                                type="text"
                                name="username" 
                                id="username"
                                placeholder="Name*"
                                required
                                />
                                <input 
                                className={styles.inputTp1}
                                type="email"
                                name="useremail" 
                                id="useremail"
                                placeholder="Email*"
                                required
                                />
                                <input 
                                className={styles.inputTp1}
                                type="tel"
                                name="userphone" 
                                id="userphone"
                                placeholder="Phone*"
                                required
                                />
                                <input 
                                className={styles.inputTp2}
                                type="text"
                                name="description" 
                                id="description"
                                placeholder="Describe the project*"
                                required
                                />
                                <button type='submit' className={styles.button}>
                                    Send Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inputs