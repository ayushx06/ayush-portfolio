import profile from '../assets/profile.jpg'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className={styles.eyebrow}>Who I Am</p>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>A driven developer from Nepal, building a future in technology one line of code at a time.</p>

        <div className={styles.topCard}>
          <div className={styles.photoWrap}>
            <img src={profile} alt="Ayush Subedi" className={styles.photo} />
            <p className={styles.photoCaption}>Auckland, New Zealand</p>
          </div>
          <div>
            <h3 className={styles.cardTitle}>👋 My Story</h3>
            <p className={styles.p}>I was born in <strong className={styles.strong}>2006</strong> in Pokhara, Nepal — a city surrounded by mountains and full of heart. Growing up, I was always the curious one: observing how things worked, asking questions, and diving deep into details others overlooked.</p>
            <p className={styles.p}>My original dream was to become a nurse, so I pursued higher secondary in the science stream with biology. But technology kept pulling me in. The more I explored code, systems, and digital experiences — the more I knew IT was where I truly belonged. My dream didn't break. It evolved.</p>
            <p className={styles.p}>On <strong className={styles.strong}>18 April 2025</strong>, I landed in Auckland, New Zealand to pursue a <strong className={styles.strong}>Bachelor of IT at Otago Polytechnic Auckland International Campus</strong>. Alone, with weak English, no close friends nearby — but with one thing that never wavered: the belief that this was worth it.</p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>📋 Quick Info</h3>
            <div className={styles.infoGrid}>
              {[
                ['Name', 'Ayush Subedi'],
                ['Born', '2006'],
                ['Location', 'Auckland, NZ'],
                ['Origin', 'Pokhara, Nepal'],
                ['Study', 'BIT @ Otago Poly AIC'],
                ['Role', 'IT roles'],
                ['Email', 'ayushdbs77@gmail.com'],
                ['Status', 'Open to Work '],
              ].map(([label, val]) => (
                <div key={label} className={styles.infoItem}>
                  <div className={styles.infoLabel}>{label}</div>
                  <div className={label === 'Status' ? `${styles.infoVal} ${styles.statusVal}` : styles.infoVal}>{val}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>🗺 My Journey</h3>
            <div className={styles.timeline}>
              {[
                ['2006', 'Born in Pokhara, Nepal. Grew up curious and detail-oriented.'],
                ['School', 'Strong academic record through Grade 10. Science stream with biology.'],
                ['The Shift', 'Discovered web development. Dream evolved from nursing to IT.'],
                ['Apr 2025', 'Moved to Auckland, NZ. Started BIT at Otago Polytechnic AIC.'],
                ['Now', 'Studying, building real projects, open to IT roles and Internships.'],
              ].map(([year, text]) => (
                <div key={year} className={styles.tmItem}>
                  <div className={styles.tmDot} />
                  <div className={styles.tmYear}>{year}</div>
                  <div className={styles.tmText}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
