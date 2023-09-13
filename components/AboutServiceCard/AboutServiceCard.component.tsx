import Image from 'next/image';
import mobileApp from '../../imgs/mobile_app.jpg';
import styles from './AboutServiceCard.module.css';

const AboutServiceCard = ({title,description,}:{title:string,description:string,})=>{
    return (
        <div className={styles.aboutServiceCard}>
            <div className={styles.imgContanier}>
                <Image src={mobileApp} alt='img.png' fill={true} />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>{title}</p>
                </div>
                <div className={styles.contentContainer}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutServiceCard;