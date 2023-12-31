'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutServiceCard.module.css';

const AboutServiceCard = ({title,description,img}:{title:string,description:string,img:any})=>{
    return (
        <div className={styles.aboutServiceCard}>
            <div className={styles.imgContanier}>
                <Image src={img} alt='img.png' fill={true} />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p>{title}</p>
                </div>
                <div className={styles.contentContainer}>
                    <p>{description}</p>
                </div>
                <div className={styles.btnContainer}>
                    <Link href={'/services'}>
                        <button >Read more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutServiceCard;