import Image from 'next/image';
import WhyUs from '../../imgs/whyUsBack.svg';
import ComputerIcon from '../../imgs/computer.svg';
import styles from './WhyUsCard.module.css';

const WhyUsCard = ({img,text,title}:{img:any,text:string,title:string})=>{
    return (
        <div className={styles.whyUs}>
            <div className={styles.imageContainer}>
                <Image src={WhyUs} alt='' className={styles.backgroundImage}/>
                <Image src={img} alt='' className={styles.innerIcon}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>{title}</p>
                </div>
                <div className={styles.description}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUsCard;