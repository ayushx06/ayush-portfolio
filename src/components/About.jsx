import profile from '../assets/profile.jpg'
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

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className="section-eyebrow">Who I Am</p>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>
          A focused IT professional in training, building a New Zealand tech
          career with discipline, curiosity, and practical range.
        </p>

        <div className={styles.storyCard}>
          <div className={styles.photoWrap}>
            <img
              src={profile}
              alt="Ayush Subedi"
              className={styles.photo}
              width="210"
              height="230"
              loading="lazy"
              decoding="async"
            />
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
          <div className={styles.card}>
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

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>My Journey</h3>
            <div className={styles.timeline}>
              {[
                ['2006', 'Born in Pokhara, Nepal. Grew up curious and detail-oriented.'],
                ['School', 'Science background with strong curiosity for how systems work.'],
                ['The Shift', 'Moved from a health-science path into IT and practical problem solving.'],
                ['Apr 2025', 'Moved to Auckland, NZ. Started BIT at Otago Polytechnic AIC.'],
                ['Now', 'Studying development, networks, systems, databases, and support skills while applying for IT roles.'],
              ].map(([year, text]) => (
                <div key={year} className={styles.tmItem}>
                  <div className={styles.tmDot} />
                  <div>
                    <div className={styles.tmYear}>{year}</div>
                    <div className={styles.tmText}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className={styles.bringSection}>
          <p className="section-eyebrow">What I Bring</p>
          <div className={styles.bringGrid}>
            {bringItems.map(item => (
              <div key={item.title} className={styles.bringCard}>
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
