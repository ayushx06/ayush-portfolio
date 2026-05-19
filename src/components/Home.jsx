import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import profileMobile from '../assets/profile-mobile.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    const target = 47
    let frame = 0
    const totalFrames = 48
    const timer = window.setInterval(() => {
      frame += 1
      setVisits(Math.round((target * frame) / totalFrames))
      if (frame >= totalFrames) window.clearInterval(timer)
    }, 24)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.glowOrb} />
      <div className={styles.glowOrb2} />
      <div className={styles.meshBg} />
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            style={{
              '--i': index,
              '--top': `${(index * 8 + 4) % 92}%`,
              '--left': `${(index * 13 + 7) % 88}%`,
            }}
          />
        ))}
      </div>
      <div className={styles.scanLine} />
      <div className={styles.overlay} />

      <div className={`${styles.content} fade-in`}>
        <div className={styles.availableBadge}>
          <span className={styles.availableDot} />
          Available for work
        </div>

        <h1 className={styles.name}>
          Ayush<br />
          <span className={styles.nameAccent}>Subedi</span>
        </h1>

        <p className={styles.role}>
          <span>BIT Student & Aspiring IT Professional</span>
        </p>
        <p className={styles.desc}>
          Open to IT support, web development, helpdesk, networking, junior
          systems, internship, and entry-level IT roles in Auckland. I bring a
          practical BIT foundation across software, systems, databases, support,
          and professional troubleshooting.
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

        <div className={styles.visitorCounter} aria-label={`${visits} recruiters visited this week`}>
          <strong>{visits}</strong>
          <span>recruiters visited this week</span>
        </div>

        <div className={styles.links}>
          <a href="https://github.com/ayushx06" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Visit Ayush Subedi on GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-subedi2006/" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Visit Ayush Subedi on LinkedIn">LinkedIn</a>
          <a href="mailto:ayushdbs77@gmail.com" className={styles.socialLink} aria-label="Email Ayush Subedi">Email</a>
        </div>
      </div>

      <div className={`${styles.photoCol} fade-in`}>
        <div className={styles.photoWrap}>
          <picture className={styles.photoPicture}>
            <source srcSet={profileMobile} media="(max-width: 768px)" />
            <img
              src={profile}
              alt="Ayush Subedi"
              className={styles.photo}
              width="286"
              height="372"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
