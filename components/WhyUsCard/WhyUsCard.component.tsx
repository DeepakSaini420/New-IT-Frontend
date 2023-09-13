import Image from 'next/image';
import WhyUs from '../../imgs/whyUsBack.svg';
import ComputerIcon from '../../imgs/computer.svg';
import styles from './WhyUsCard.module.css';

const WhyUsCard = ()=>{
    return (
        <div className={styles.whyUs}>
            <div className={styles.imageContainer}>
                <Image src={WhyUs} alt='' className={styles.backgroundImage}/>
                <Image src={ComputerIcon} alt='' className={styles.innerIcon}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>Expertise and Technology Stack</p>
                </div>
                <div className={styles.description}>
                    <p>our company boasts a diverse and skilled team proficient in a wide range of technologies</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUsCard;