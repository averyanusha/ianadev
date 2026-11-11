"use client";
import Link from "next/link";
import { useState } from "react";
import styles from './Navbar.module.css'

export default function Navbar() {
  const [ open, setOpen ] = useState<boolean>(false);
  return (
    <nav>
      <button onClick={() => setOpen(true)}></button>
      <ul className={styles.navbar}>
        <li className={styles.logo}>
          <Link href='/'>IANADEV</Link>
        </li>
        <li className={styles.navlink}>
          <a href="#about">about me</a>
        </li>
        <li className={styles.navlink}>
          <a href="#portfolio">portfolio</a>
        </li>
        <li className={styles.navlink}>
          <a href="#services">services</a>
        </li>
        <li className={styles.navlink}>
          <a href="#contact">contact me</a>
        </li>
        <li className={styles.navlink}>
          <a href="/cv/CV_Iana_Averianova_EN.pdf" target="_blank" rel="noopener noreferrer">cv</a>
        </li>
      </ul>
    </nav>
  )
}