import Image from 'next/image'
import Button from '../../components/Button/Button.component'
import Navbar from '../../components/Navbar/Navbar.component'
import backImg from '../../imgs/back.svg';
import starImg from '../../imgs/star.svg';
import headImg from '../../imgs/head.jpg';
import cloudImg from '../../imgs/cloud_solutions.jpg';
import webImg from '../../imgs/web_appjpg.jpg';
import mobileImg from '../../imgs/mobile_app.jpg';
import chatImg from '../../imgs/chat.svg';
import webSvg from '../../imgs/websvg.svg';
import computerImg from '../../imgs/computer.svg';
import styles from './page.module.css'
import AboutServiceCard from '../../components/AboutServiceCard/AboutServiceCard.component'
import WhyUsCard from '../../components/WhyUsCard/WhyUsCard.component'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
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
                Vitro is passionate about creating exceptional mobile experiences. Our team specializes in designing and developing custom mobile applications for iOS and Android platforms. From cross-plattform, intuitive user interfaces to robust backend functionality, we strive to deliver seamless and engaging apps that cater to your unique business needs. Whether you &apos re looking to enhance customer engagement, streamline business processes, or tap into new market opportunities, our mobile app solutions are tailored to drive results. With a focus on user experience, performance, and security, we ensure that your app stands out in the crowded app stores and leaves a lasting impression on your target audience.
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
            <AboutServiceCard title='Web App Development' img={webImg} description='Web Development: C++, Java, React. AWS Integration. Responsive Design. Maintenance, Support, Consulting.'/>
          </div>
          <div className={styles.aboutServiceContainer}>
            <AboutServiceCard title='Cloud Solutions' img={cloudImg} description='AWS Services: Scalable, secure cloud solutions, including architecture, deployment, migration, and strategic consulting.'/>
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
            <WhyUsCard img={chatImg} title={'We value our clients'} text={"Virtual assistance. Talk to us about any concerns, 24/7."}/>
          </div>
          <div>
            <WhyUsCard img={computerImg} title={'Expertise and Technology Stack'} text={"our company boasts a diverse and skilled team proficient in a wide range of technologies"}/>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerDescription}>
          <div>
            <p>Unlock innovation and elevate your</p>
            <p>digital presence with our tech-</p>
            <p>savvy team, specializing in web </p> 
            <p>development, cloud solutions,</p>
            <p>and mobile applications.</p>
          </div>
        </div>
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
                <p>EMAIL</p>
                <p>support@vtiro.com</p>
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
        </div>
      </div>
    </main>
  )
}
