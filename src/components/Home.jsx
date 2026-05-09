import { useNavigate } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`${styles.content} fade-in`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Open to Junior Web Developer Roles · Auckland NZ
        </div>
        <h1 className={styles.name}>
          Ayush<br />
          <span className={styles.nameAccent}>Subedi</span>
        </h1>
        <p className={styles.role}>Junior Web Developer</p>
        <p className={styles.desc}>
          From Pokhara, Nepal — now building in Auckland, NZ. I craft clean,
          purposeful web experiences using HTML, CSS, JavaScript and Python.
          Currently studying BIT at Otago Polytechnic AIC.
        </p>
        <div className={styles.btns}>
          <button type="button" className={styles.btnPrimary} onClick={() => navigate('/projects')}>
            View My Work
          </button>
          <button type="button" className={styles.btnOutline} onClick={() => navigate('/contact')}>
            Get In Touch
          </button>
          <a className={styles.btnOutline} href="/ayush-subedi-resume.pdf" download>
            Download CV
          </a>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/ayushx06" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-subedi2006/" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="mailto:ayushdbs77@gmail.com" className={styles.socialLink}>Email</a>
        </div>
      </div>
      <div className={`${styles.photoCol} fade-in`}>
        <div className={styles.photoWrap}>
          <img src={profile} alt="Ayush Subedi" className={styles.photo} />
        </div>
        <div className={styles.statsRow}>
          {[
            ['1+', 'Live Site'],
            ['7+', 'Technologies'],
            ['2025', 'Cohort'],
          ].map(([num, label]) => (
            <div key={label} className={styles.statCard}>
              <div className={styles.statNum}>{num}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
