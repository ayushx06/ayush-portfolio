import profile from '../assets/profile.jpg'
import styles from '../styles/About.module.css'

const bringItems = [
  {
    icon: '🎓',
    title: 'Broad IT Foundation',
    text: 'BIT covers networking, systems, databases, cybersecurity, and software dev — not just web.',
  },
  {
    icon: '📍',
    title: 'Based in Auckland',
    text: 'Living in Auckland. Available immediately.',
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
            <img src={profile} alt="Ayush Subedi" className={styles.photo} />
            <p className={styles.photoCaption}>Auckland, New Zealand</p>
          </div>

          <div>
            <h3 className={styles.cardTitle}>My Story</h3>
            <p className={styles.p}>I was born in <strong className={styles.strong}>2006</strong> in Pokhara, Nepal — a city surrounded by mountains and full of heart. Growing up, I was always the curious one: observing how things worked, asking questions, and diving deep into details others overlooked.</p>
            <p className={styles.p}>My original dream was to become a nurse, so I pursued higher secondary in the science stream with biology. But technology kept pulling me in. The more I explored code, systems, and digital experiences, the more I knew IT was where I truly belonged. My dream did not break. It evolved.</p>
            <p className={styles.p}>On <strong className={styles.strong}>18 April 2025</strong>, I landed in Auckland, New Zealand to pursue a <strong className={styles.strong}>Bachelor of IT at Otago Polytechnic Auckland International Campus</strong>. The BIT gives me a wider IT base than web alone: programming, networking, operating systems, databases, cybersecurity, systems analysis, and professional practice.</p>
            <p className={styles.p}>I am open to the entry point that lets me prove myself: web development, IT support, helpdesk, networking, junior systems work, or internships. I care about learning quickly, showing up reliably, and becoming useful to a team.</p>
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
                ['Status', 'Open to Work'],
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
                ['School', 'Strong academic record through Grade 10. Science stream with biology.'],
                ['The Shift', 'Discovered technology. Dream evolved from nursing to IT.'],
                ['Apr 2025', 'Moved to Auckland, NZ. Started BIT at Otago Polytechnic AIC.'],
                ['Now', 'Studying development, networks, systems, databases, and support skills while applying for IT roles and internships.'],
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
