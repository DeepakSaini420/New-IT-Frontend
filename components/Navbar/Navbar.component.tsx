"use client"
import React,{useState} from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';

function Navbar() {
    const [isOpen,setIsOpen] = useState<boolean>(false);

    return (
        <nav className={styles.Navbar}>
            <div className={styles.list}>
                <div>
                    <Link href={"/"}>
                        <p>Home</p>
                    </Link>
                </div>
                <div>
                    <Link href={"/services"}>
                        <p>Services</p>
                    </Link>
                </div>
                <div>
                    <Link href={"/contact-us"}>
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
            <div className={styles.toggle} onClick={()=>setIsOpen(true)}>
                <div className={styles.item1}></div>
                <div className={styles.item2}></div>
                <div className={styles.item3}></div>
            </div>
            {
                isOpen && (
                    <>
                        <div className={styles.sideBar}>
                            <div className={styles.closeTag} onClick={()=>setIsOpen(false)}>
                                <div>
                                    <div className={styles.item1_active}></div>
                                    <div className={styles.item2_active}></div>
                                   
                                </div>
                            </div>
                            <div>
                                <Link href={"/"} onClick={()=>setIsOpen(false)}>
                                    <p>Home</p>
                                </Link>
                            </div>
                            <div>
                                <Link href={"/services"} onClick={()=>setIsOpen(false)}>
                                    <p>Services</p>
                                </Link>
                            </div>
                            <div>
                                <Link href={"/contact-us"} onClick={()=>setIsOpen(false)}>
                                    <p>Contact</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.back}/>
                    </>
                )
            }
        </nav>
  )
}

export default Navbar