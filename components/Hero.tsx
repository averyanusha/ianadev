"use client"

import Image from "next/image";
import styles from './Hero.module.css';
import motion from 'framer-motion';
import { MoveRight, MoveDown } from 'lucide-react'
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations('hero')
  return (
    <div id="hero" className={`section ${styles.hero}`}>
      <Image
        src="/images/ianadev.jpg" 
        alt="Iana Averianova"
        width={150}
        height={150}
        loading="eager"
        className={styles.heroImage}
        />
      <h1 className={styles.heroTitle}>{t('greeting')} 
        <a href="#about" className={styles.heroButton}>
          <MoveRight className={styles.heroArrow} />
        </a>
        <br/>{t('roleBefore')}
        <span>{t('roleHighlight')}</span>
      </h1>
      <p className="">
        {t('tagline')}
      </p>
      <p className="">
        {t('availability')}
      </p>
      <div className="">
        <a href="#portfolio" className="ctaButton">
          {t('ctaWork')}
          <MoveDown className={styles.ctaArrow} />
        </a>
        <a href="#contact" className="ctaButton">{t('ctaContact')}</a>
      </div>
    </div>
  )
}