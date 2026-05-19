import { useState } from 'react'
import profile from '../assets/profile.jpg'
import profileMobile from '../assets/profile-mobile.jpg'
import styles from '../styles/About.module.css'

const bringItems = [
  {
    icon: 'IT',
    title: 'Broad IT Foundation',
    text: 'BIT coursework across networking, systems, databases, cybersecurity, professional practice, and software development.',
  },
  {
    icon: 'NZ',
    title: 'Based in Auckland',
    text: 'Available for internships, IT support, helpdesk, networking, junior systems, and web development opportunities.',
  },
]

const timelineItems = [
  ['2006', 'Born in Pokhara, Nepal. Grew up curious and detail-oriented.'],
  ['School', 'Science background with strong curiosity for how systems work.'],
  ['The Shift', 'Moved from a health-science path into IT and practical problem solving.'],
  ['Apr 2025', 'Moved to Auckland, NZ. Started BIT at Otago Polytechnic AIC.'],
  ['Now', 'Studying development, networks, systems, databases, and support skills while applying for IT roles.'],
]

const funFacts = [
  { front: 'From Nepal', back: 'Pokhara shaped my discipline, curiosity, and calm approach to learning.' },
  { front: 'Auckland Based', back: 'Building a New Zealand tech career through study, projects, and entry-level IT work.' },
  { front: 'Born 2006', back: 'Early in the journey, serious about growing into a reliable IT professional.' },
]

export default function About() {
  const [activeStep, setActiveStep] = useState(timelineItems.length - 1)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handlePhotoMove = event => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -12
    setTilt({ x, y })
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className="section-eyebrow">Who I Am</p>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>
          A focused IT professional in training, building a New Zealand tech
          career with discipline, curiosity, and practical range.
        </p>

        <div className={styles.storyCard} data-reveal>
          <div
            className={styles.photoWrap}
            onMouseMove={handlePhotoMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <picture className={styles.photoPicture}>
              <source srcSet={profileMobile} media="(max-width: 768px)" />
              <img
                src={profile}
                alt="Ayush Subedi"
                className={styles.photo}
                style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(0)` }}
                width="210"
                height="230"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <p className={styles.photoCaption}>Auckland, New Zealand</p>
          </div>

          <div>
            <h3 className={styles.cardTitle}>My Story</h3>
            <p className={styles.p}>I grew up in <strong className={styles.strong}>Pokhara, Nepal</strong>, where curiosity and discipline shaped how I learn. I started in the science stream with biology, but technology kept pulling me toward systems, problem solving, and digital experiences.</p>
            <p className={styles.p}>On <strong className={styles.strong}>18 April 2025</strong>, I moved to Auckland to study a <strong className={styles.strong}>Bachelor of IT at Otago Polytechnic Auckland International Campus</strong>. The BIT gives me a practical base across programming, networking, operating systems, databases, cybersecurity, systems analysis, and professional practice.</p>
            <p className={styles.p}>I am open to the entry point where I can be useful and keep growing: IT support, helpdesk, web development, networking, junior systems, internships, or entry-level IT roles. I value reliability, clear communication, and learning quickly on the job.</p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>Quick Info</h3>
            <div className={styles.infoGrid}>
              {[
                ['Name', 'Ayush Subedi'],
                ['Born', '2006'],
                ['Location', 'Auckland, NZ'],
                ['Origin', 'Pokhara, Nepal'],
                ['Study', 'BIT @ Otago Poly AIC'],
                ['Email', 'ayushdbs77@gmail.com'],
                ['Status', 'Open to IT Roles'],
              ].map(([label, val]) => (
                <div key={label} className={label === 'Status' ? `${styles.infoItem} ${styles.statusItem}` : styles.infoItem}>
                  <div className={styles.infoLabel}>{label}</div>
                  <div className={styles.infoVal}>
                    {label === 'Status' && <span className={styles.statusDot} />}
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card} data-reveal>
            <h3 className={styles.cardTitle}>My Journey</h3>
            <div className={styles.timeline}>
              {timelineItems.map(([year, text], index) => (
                <button
                  key={year}
                  type="button"
                  className={index === activeStep ? `${styles.tmItem} ${styles.tmItemActive}` : styles.tmItem}
                  onClick={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                >
                  <div className={styles.tmDot} />
                  <div>
                    <div className={styles.tmYear}>{year}</div>
                    <div className={styles.tmText}>{text}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className={styles.factsSection} data-reveal>
          <p className="section-eyebrow">Fun Facts</p>
          <div className={styles.factGrid}>
            {funFacts.map(fact => (
              <div key={fact.front} className={styles.flipCard} tabIndex="0">
                <div className={styles.flipInner}>
                  <div className={styles.flipFace}>
                    <span>{fact.front}</span>
                  </div>
                  <div className={`${styles.flipFace} ${styles.flipBack}`}>
                    <p>{fact.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.bringSection}>
          <p className="section-eyebrow">What I Bring</p>
          <div className={styles.bringGrid}>
            {bringItems.map(item => (
              <div key={item.title} className={styles.bringCard} data-reveal>
                <div className={styles.bringIcon}>{item.icon}</div>
                <h3 className={styles.bringTitle}>{item.title}</h3>
                <p className={styles.bringText}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
