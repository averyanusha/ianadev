import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image src="/ianadev-logo-on-purple-alt.png" alt="ianadev" width={250} height={50}/>
      </div>
      <div className={styles.footerColumn}>
        <h5 className={styles.footerSubtitle}>About</h5>
        <ul className={styles.footerList}>
          <li className={styles.footerLink}>
            <a href="/portfolio" className="">Portfolio projects</a>
          </li>
          <li className={styles.footerLink}>
            <a href="/portfolio" className="">About me</a>
          </li>
          <li className={styles.footerLink}>
            <a href="/portfolio" className="">Confidentiality</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h5 className={styles.footerSubtitle}>Services</h5>
        <ul className={styles.footerList}>
          <li className={styles.footerLink}>
            <a href="" className="">Business websites</a>
          </li>
          <li className={styles.footerLink}>
            <a href="" className="">Web applications</a>
          </li>
          <li className={styles.footerLink}>
            <a href="" className="">AI integration</a>
          </li>
          <li className={styles.footerLink}>
            <a href="" className="">Maintenance and takeovers</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h5 className={styles.footerSubtitle}>Contact</h5>
        <ul className={styles.footerList}>
          <li className={styles.footerLink}>
            <a href="https://www.linkedin.com/in/iana-averianova/" className="">
            <img src="/icons/linkedin.svg" alt="Linkedin" className={styles.footerIcon}/>
            Linkedin
            </a>
          </li>
          <li className={styles.footerLink}>
            <a href="https://wa.me/+33672812564" className="">
            <img src="/icons/whatsapp.svg" alt="Whatsapp" className={styles.footerIcon} />
            Whatsapp
            </a>
          </li>
          <li className={styles.footerLink}>
            <a href="https://github.com/averyanusha" className="">
            <img src="/icons/github.svg" alt="Github" className={styles.footerIcon} />
            GitHub
            </a>
          </li>
          <li className={styles.footerLink}>
            <a href="mailto:averyanusha@gmail.com" className="">
            <img src="/icons/email-icon.svg" alt="Email" className={styles.footerIcon} />
            Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}