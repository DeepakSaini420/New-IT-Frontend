import Image from 'next/image'
import Button from '../../components/Button/Button.component'
import Navbar from '../../components/Navbar/Navbar.component'
import backImg from '../../imgs/back.svg';
import starImg from '../../imgs/star4.png';
import headImg from '../../imgs/head.jpg';
import cloudImg from '../../imgs/cloud-computing.jpg';
import webImg from '../../imgs/florian.jpg';
import mobileImg from '../../imgs/app.jpg';
import cyberImg from '../../imgs/cybersecurity-1280x720.jpg';
import cyberImg001 from '../../imgs/cyber001.jpeg';
import cyberImg003 from '../../imgs/cyber003.jpeg';
import chatImg from '../../imgs/chat.svg';
import webSvg from '../../imgs/websvg.svg';
import computerImg from '../../imgs/computer.svg';
import styles from './page.module.css'
import AboutServiceCard from '../../components/AboutServiceCard/AboutServiceCard.component'
import WhyUsCard from '../../components/WhyUsCard/WhyUsCard.component'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Navbar/> */}
      <header className={styles.header}>
        <div className={styles.headContent}>
          <div className={styles.content}>
            <div className={styles.headTitle}>
              <p>VTIRO</p>
            </div>
            <div className={styles.headDescription}>
              <div>
                <p>IT Solutions</p>
                <p>that transform</p>
                <p>your business</p>
              </div>
              <div className={styles.headButton}>
                <Button text={"REQUEST A CONSULTATION"} />
              </div>
            </div>
          </div>
          <div className={styles.headImageContianer}>
            <div>
              <Image src={backImg} alt='background.img' width={500} height={500} className={styles.backImg}/>
              <Image src={starImg} alt='star.img' width={150} height={150} className={styles.starImg}/>
              <Image src={headImg} alt='head.img' width={500} height={500} className={styles.headImg}/>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.midDiv}>
        <div className={styles.midDivContent}>
          <div className={styles.img}/>
          <div className={styles.midContentContainer}>
            <div className={styles.softSol}>
              <p>Software Solutions?</p>
              <p>Count on us.</p>
            </div>
            <div className={styles.midContentContainerDesc}>
              <p>
              Introducing Vtiro, where innovation meets IT excellence! We are a dynamic IT startup driven by a passion for solving complex tech challenges. With a team of forward-thinking experts, {"we're"} committed to delivering cutting-edge solutions that empower businesses to thrive in the digital age. Whether {"it's"} streamlining operations through custom software, enhancing cybersecurity,dev-ops or harnessing the power of data analytics, {"we've"} got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsTitle}>
          <p>What We Can Do For You</p>
        </div>
        <div className={styles.aboutServices}>
          <div className={styles.aboutServiceContainer}>
            <AboutServiceCard title='Mobile App Development' img={mobileImg}  description='We build user-friendly iOS and Android apps, handling design, security, and scalability, with ongoing support.'/>
          </div>
          <div className={styles.aboutServiceContainer}>
            <AboutServiceCard title='Web App Development' img={webImg} description='DevOps and Architecture (Docker, Kubernetes, Ansible, RabbitMQ ...), Fullstack development - frontend (React, NodeJS, NextJS, Flutter) & backend (Java/Kotlin, Python, C++, .NET), '/>
          </div>
          <div className={styles.aboutServiceContainer}>
            <AboutServiceCard title='Cloud Solutions' img={cloudImg} description='AWS Services: Scalable, secure cloud solutions, including architecture, deployment, migration, and strategic consulting.'/>
          </div>
          <div className={styles.aboutServiceContainer}>
            <AboutServiceCard title='Cyber security' img={cyberImg}  description='Data and systems protection. Cybersecurity solutions tailored to specific needs. Cutting-edge technology, security audits, advanced threat detection and incident response. '/>
          </div>
        </div>
      </div>
      <div className={styles.whyUs}>
        <div className={styles.whyUsTitle}>
          <p>Why Us</p>
        </div>
        <div className={styles.services}>
          <div>
            <WhyUsCard img={webSvg} title={'We are global'} text={"No matter where you are, we've got you covered."} />
          </div>
          <div>
            <WhyUsCard img={chatImg} title={'We value our clients'} text={"Talk to us about any concerns, 24/7 or drop us an email: support@vtiro.com."}/>
          </div>
          <div>
            <WhyUsCard img={computerImg} title={'Expertise and Technology Stack'} text={"our company boasts a diverse and skilled team proficient in a wide range of technologies."}/>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsTitle}>
          <p>What We Can Do For You</p>
        </div>
        <div className={styles.aboutServices}>
          <div className={styles.aboutServiceContainer}>
            <AboutServiceCard title='Cloud Solutions' img={cyberImg001} description='AWS Services: Scalable, secure cloud solutions, including architecture, deployment, migration, and strategic consulting.'/>
          </div>
          <div className={styles.aboutServiceContainer}>
            <AboutServiceCard title='Cyber security' img={cyberImg003}  description='Data and systems protection. Cybersecurity solutions tailored to specific needs. Cutting-edge technology, security audits, advanced threat detection and incident response. '/>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.contactUs}>
          <div className={styles.outterDiv}>
            <div className={styles.contactUsContentContainer}>
              <div className={styles.contactUsContent}>
                <p>Let us help you</p>
                <p>Reach out for an exploratory conversation.</p>
              </div>
              <div className={styles.contactUsButton}>
                <Button text='Contact Us'/>
              </div>
              <div className={styles.emailUsContainer}>
                <p>support@vtiro.com</p>
              </div>
            </div>
            <div className={styles.headImageContianer}>
              <div>
                <Image src={backImg} alt='background.img' width={500} height={500} className={styles.backImg}/>
                <Image src={starImg} alt='star4.img' width={150} height={150} className={styles.starImg}/>
                <Image src={headImg} alt='head.img' width={500} height={500} className={styles.headImg}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
