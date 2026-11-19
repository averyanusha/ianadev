"use client";
import Link from "next/link";
import { useState } from "react";
import styles from './Navbar.module.css'
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  const t = useTranslations('nav');
  const language = useLocale();
  const [ open, setOpen ] = useState<boolean>(false);
  return (
    <nav id="nav" className={`container ${styles.nav}`}>
      <button onClick={() => setOpen(true)}></button>
      <ul className={styles.navbar}>
        <li className={styles.navLogo}>
          <Link href='/'>
            <img src="/ianadev-logo.png" alt="IANADEV" className={styles.logo}/>
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href={`/${language}/#about`}>{t('about')}</Link>
        </li>
        <li className={styles.navlink}>
          <Link href={`/${language}/#portfolio`}>{t('portfolio')}</Link>
        </li>
        <li className={styles.navlink}>
          <Link href={`/${language}/#services`}>{t('services')}</Link>
        </li>
        <li className={styles.navlink}>
          <Link href={`/${language}/#contact`}>{t('contact')}</Link>
        </li>
        <li className={styles.navlink}>
          <a href={t('cvFile')} target="_blank" rel="noopener noreferrer">cv</a>
        </li>
        <li className={styles.navlink}>
          <LanguageSwitch />
        </li>
      </ul>
    </nav>
  )
}