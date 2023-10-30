import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const ContactUs = ()=>{
    return (
        <div className={styles.ContactUs}>
            <div className={styles.headContent}>
                <div>
                    <h1>CONTACT US</h1>
                    <div className={styles.link}>
                        <Link href={"/"}>Home</Link> {">"} contact-us 
                    </div>
                </div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <div className={styles.firstDiv}>
                        <div className={styles.formHead}>
                            <p>{"Let's Talks"}</p>
                        </div>
                        <div className={styles.inputContainer}>
                            <div>
                                <input type='text' placeholder='Your Name'/>
                            </div>
                            <div>
                                <input type='email' placeholder='Email*' required />
                            </div>
                            <div>
                                <input type='phone' placeholder='phone'/>
                            </div>
                        </div>
                        <div className={styles.formHead}>
                            <p>{"Additional Info"}</p>
                        </div>
                        <div className={styles.inputContainer}>
                            <div>
                                <input type='text' placeholder='Your Message'/>
                            </div>
                        </div>
                        <div className={styles.btnContainer}>
                            <button>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactUs;