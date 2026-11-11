import Image from "next/image";
import styles from './About.module.css';

export default function About () {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <h2 className="section-title">About me</h2>
      <div className={styles.aboutSection}>
        <Image
          src="/images/ianadev-about.png" 
          alt="Iana Dev" 
          width={320}
          height={380}
          loading="eager"
          className={styles.aboutImage}
        />
        <p className={styles.aboutText}>I'm a full-stack developer working with TypeScript, React, Node.js and PostgreSQL, with two years of experience building and shipping web applications<br/>
          <br/>I studied media and communication in Prague, then started my career at a digital marketing company and that's where I first opened the code behind a website and didn't want to close it. I taught myself, then joined the École 42 piscine in Lyon to build solid foundations. <br/>
          <br/>Since 2024 I've worked as a freelance developer: a production website for an international company, full-stack web apps, and projects integrating AI. Before writing a line of code, I take time to understand the business behind the project because i believe that it's what makes a site actually useful.<br/>
          <br/>I work in English, French, Czech and Russian.
        </p>
      </div>
    </section>
  )
}