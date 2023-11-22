"use client"
import React, { useState } from 'react';
import styles from './page.module.css';

const ContactUs = ()=>{

    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [phone,setPhone] = useState<string>('');
    const [additionalMessage,setAdditionalMessage] = useState<string>('');

    const sendEmail = async ()=>{
        if(name.length===0 || email.length===0) return;
        const data = await fetch('/api/mail',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                additionalMessage
            })
        })
        alert("Thanks For Choosing Us!");
        console.log(await data.json());
    }

    return (
        <div className={styles.ContactUs}>
            <div className={styles.headContent}>
                <div>
                    <h1>CONTACT US</h1>
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
                                <input type='text' placeholder='Your Name' onChange={(e:any)=> setName(e.target.value) }/>
                            </div>
                            <div>
                                <input type='email' placeholder='Email*' required onChange={(e:any)=> setEmail(e.target.value) } />
                            </div>
                            <div>
                                <input type='phone' placeholder='phone' onChange={(e:any)=> setPhone(e.target.value) }/>
                            </div>
                        </div>
                        <div className={styles.formHead}>
                            <p>{"Additional Info"}</p>
                        </div>
                        <div className={styles.inputContainer}>
                            <div>
                                <input type='text' placeholder='Your Message' onChange={(e:any)=> setAdditionalMessage(e.target.value) }/>
                            </div>
                        </div>
                        <div className={styles.btnContainer}>
                            <button onClick={sendEmail}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactUs;