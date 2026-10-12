"use client"

import Image from "next/image";
import styles from './Hero.module.css';
import motion from 'framer-motion';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        src="/images/ianadev.jpg" 
        alt="Iana Averianova"
        width={150}
        height={150}
        loading="eager"
        className={styles.heroImage}
        />
      <h1 className={styles.heroTitle}>Hi, I'm Iana 
        <button className={styles.heroButton}>
          <a href="#about"></a>
        </button>
        <br/>full-stack
        <span>developer</span>
      </h1>
      <p className="">
        Open to the full-stack developer fulltime role and freelance projects
      </p>
    </div>
  )
}