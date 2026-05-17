import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>Ayush Subedi</p>
      <p className={styles.tagline}>BIT Student & Aspiring IT Professional · Auckland NZ</p>

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

      <p className={styles.meta}>Open to IT Support · Web Development · Helpdesk · Networking · Internships</p>
    </footer>
  )
}
