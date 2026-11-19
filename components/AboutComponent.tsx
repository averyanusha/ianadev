import Image from "next/image";
import styles from './About.module.css';
import { useTranslations } from "next-intl";

export default function About () {
  const t = useTranslations('about')
  return (
    <section id="about" className={`section ${styles.about}`}>
      <h2 className="section-title">{t('title')}</h2>
      <div className={styles.aboutSection}>
        <Image
          src="/images/ianadev-about.png" 
          alt="Iana Dev" 
          width={320}
          height={380}
          loading="eager"
          className={styles.aboutImage}
        />
        <div className={styles.aboutText}>
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
          <p>{t('languages')}</p>
        </div>
      </div>
    </section>
  )
}