"use client"

import styles from './Skills.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Skills() {
  const t = useTranslations('skills')
  return (
    <div className="section">
      <h2 className="section-title">{t('title')}</h2>
      <ul className={styles.skillsList}>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            React
            <Image 
              src="icons/react-icon.svg"
              alt="reactJs"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            Next.js
            <Image 
              src="icons/next-js-icon.svg"
              alt="nextJs"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            Figma
            <Image 
              src="icons/figma.svg"
              alt="figma"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            Responsive web sites
            <Image 
              src="icons/responsiveness.svg"
              alt="responsive"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            Typescript
            <Image 
              src="icons/typescript.svg"
              alt="typescript"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            NodeJs
            <Image 
              src="icons/node-js-icon.svg"
              alt="NodeJs"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            PostgreSQL
            <Image 
              src="icons/postgresql-icon.svg"
              alt="postgresql"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            Redis
            <Image 
              src="icons/cib_redis.svg"
              alt="redis"
              width={20}
              height={20}
            />
          </button>
        </li>
      </ul>
    </div>
  )
}