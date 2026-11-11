"use client"

import styles from './Skills.module.css';
import Image from 'next/image';

export default function Skills() {
  return (
    <div className="section">
      <h2 className="section-title">My skills</h2>
      <ul className={styles.skillsList}>
        <li className={styles.skillsLink}>
          <button className={styles.skillsBtn}>
            React
            <Image 
              src="react-icon.svg"
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
              src="next-js-icon.svg"
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
              src="figma.svg"
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
              src="responsiveness.svg"
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
              src="typescript.svg"
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
              src="node-js-icon.svg"
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
              src="postgresql-icon.svg"
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
              src="cib_redis.svg"
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