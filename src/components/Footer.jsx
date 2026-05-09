import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/App.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerCopy}>© 2025 Ayush Subedi</p>
      <div className={styles.footerLinks}>
        <a href="https://github.com/ayushx06" target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.footerIcon}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ayush-subedi2006/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.footerIcon}>
          <FaLinkedin />
        </a>
        <a href="mailto:ayushdbs77@gmail.com" aria-label="Email" className={styles.footerIcon}>
          <FaEnvelope />
        </a>
      </div>
    </footer>
  )
}
