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
                    <div className={styles.link}>  
                    </div>
                </div>
            </div>
            <div className={styles.mid_content}>
                <div className={styles.heading}>
                    <h1>SERVICES</h1>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.AboutServiceCard}>
                        <ServicePageCard title="Mobile App Development" description="We offer creation of mobile applications for various platforms, including iOS (iPhone and iPad) and Android. This includes both native and cross-platform app development.
                        " img={TestImg}/>
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
        </div>

    </div>
    )
}

export default services;