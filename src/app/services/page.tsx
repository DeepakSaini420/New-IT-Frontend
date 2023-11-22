import React from "react";
import styles  from './page.module.css';
import Link from "next/link";
import TestImg from '../../../imgs/florian.jpg';
import img2 from '../../../imgs/computer.jpg';
import cyberSecurity from '../../../imgs/cybersecurity-1280x720.jpg';
import ServicePageCard from "../../../components/ServicePageCard/ServicePageCard.component";
import AboutServiceCard from "../../../components/AboutServiceCard/AboutServiceCard.component";

const services = ()=>{
    return (
        <div className={styles.services}>
            <div className={styles.headContent}>
            <div>
                    <h1>SERVICES</h1>
                </div>
            </div>
            <div className={styles.mid_content}>
                <div className={styles.heading}>
                    <h1>SERVICES</h1>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.AboutServiceCard}>
                        <ServicePageCard title="Mobile App Development" description="We build user-friendly iOS and Android apps, handling design, security, and scalability, with ongoing support." img={TestImg}/>
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <ServicePageCard title="Cybersecurity" description="Tailored solutions to meet the specific needs of clients, from concept to design and development." img={img2}/>
                    </div>
                </div>
            </div>
            {/*
            <div className={styles.lower_content}>
                <div className={styles.heading}>
                    <h1>SERVICES</h1>
                </div>
               
            </div>
    */}
{/*
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsTitle}>
                <p>Cybersecurity</p>
            </div>
            <div className={styles.cyberServices}>
                <div>Strong Authentication</div>
                <div>Email Security</div>
                <div>Access Control</div>
                <div>Security Training</div>
                <div>Software Updates</div>
                <div>Endpoint Security</div>
            </div>
        </div>*/}
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsTitle}>
                <p>Cybersecurity</p>
            </div>
            <div className={styles.cyberServices}>
                <div>Strong Authentication</div>
                <div>Email Security</div>
                <div>Access Control</div>
                <div>Security Training</div>
                <div>Software Updates</div>
                <div>Endpoint Security</div>
            </div>
            <div className={styles.lowerSecDescription}>
                <div>
                    <p>At, Vtiro we prioritize your digital security in an ever-evolving cyber landscape. Our commitment to cybersecurity is at the core of our mission, 
                       as we understand the critical importance of protecting your sensitive information. In Vtiro, we employ cutting-edge technologies and industry best practices to 
                       ensure the confidentiality, integrity, and availability of your data. From robust firewalls to advanced encryption protocols, 
                       we have implemented a comprehensive suite of security measures to safeguard against cyber threats. 
                       Our team of dedicated cybersecurity experts continually monitors and adapts to emerging risks, providing you with a secure environment for your online activities. 
                       We believe in fostering a culture of awareness and education, empowering you to make informed decisions about your digital safety. 
                       Trust Vtiro to be your partner in cybersecurity, delivering peace of mind in an interconnected world.</p>
                </div>
            </div>
        <div className={styles.webDevServicesSec}>
            <div className={styles.webDevServicesTitle}>
                <p>Web Development</p>
            </div>
            <div className={styles.webDevServices}>
                <div>Fullstack</div>
                <div>Frontend</div>
                <div>Backend</div>
                <div>Devops</div>
            </div>
            <div className={styles.bottomSecDescription}>
                <div>
                    <p>At our company, we offer comprehensive web development and DevOps services that drive your online success. Our web development team crafts engaging websites and 
                        web applications, while our DevOps experts streamline development and deployment, ensuring seamless, efficient project delivery. 
                        Partner with us to enhance your digital presence and accelerate your software development lifecycle.</p>
                </div>
            </div>
        </div>

        </div>
    </div>
    )
}

export default services;