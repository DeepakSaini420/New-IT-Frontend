import React from "react";
import styles  from './page.module.css';
import Link from "next/link";
import TestImg from '../../../imgs/florian.jpg';
import img2 from '../../../imgs/computer.jpg';
import cyberSecurity from '../../../imgs/cybersecurity-1280x720.jpg';
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
                        <AboutServiceCard title="Mobile App Development" description="The core services we offer involves the creation of mobile applications for various platforms, including iOS (iPhone and iPad) and Android. This includes both native and cross-platform app development.
                        " img={TestImg}/>
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <AboutServiceCard title="Custom App Development" description="Tailored solutions to meet the specific needs of clients, from concept to design and development. Custom apps are designed to align with the client's unique business requirements." img={img2}/>
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <AboutServiceCard title="UI/UX Design" description="Creating user-friendly and visually appealing interfaces that enhance the user experience. This includes wireframing, prototyping, and designing the app's look and feel." img={TestImg}/>
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <AboutServiceCard title="Cross-Platform Development" description="Developing apps that work on multiple platforms using technologies like React Native, Flutter, or Xamarin. This approach saves time and resources by sharing code between platforms." img={TestImg}/>
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <AboutServiceCard title="Native App Development" description="Building apps specifically for iOS or Android platforms to provide the best performance and user experience. This often requires separate codebases for each platform." img={TestImg}/>
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <AboutServiceCard title="API Integration" description="Connecting the app to various APIs and third-party services to enhance functionality, such as payment gateways, social media integration, and cloud services."
                        img={TestImg} />
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <AboutServiceCard title="Security and Compliance" description="Ensuring the app's security and compliance with data protection regulations, including encryption, secure authentication, and adherence to industry-specific standards." img={cyberSecurity}/>
                    </div>
                    <div className={styles.AboutServiceCard}>
                        <AboutServiceCard title="Scalability" description="Designing apps with scalability in mind, allowing them to grow as your business or user base expands." img={TestImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services;