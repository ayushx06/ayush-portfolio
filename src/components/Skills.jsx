import styles from '../styles/Skills.module.css'

const proficiencies = [
  { skill: 'HTML/CSS', level: 85, desc: 'Responsive layouts, accessibility basics, polished visual systems' },
  { skill: 'JavaScript', level: 70, desc: 'DOM logic, APIs, interaction patterns, form handling' },
  { skill: 'React', level: 65, desc: 'Components, routing, hooks, Vite projects, stateful UI' },
  { skill: 'Python', level: 60, desc: 'Coursework practice, scripting, problem solving fundamentals' },
  { skill: 'SQL', level: 55, desc: 'Database basics, queries, schema thinking, data practice' },
  { skill: 'Git', level: 75, desc: 'Version control, GitHub workflow, deployment habits' },
]

const traits = ['Fast Learner', 'Attention to Detail', 'Resilient', 'Self-driven', 'Adaptable', 'Curious']
const learningItems = ['Networking Fundamentals', 'Linux CLI', 'Systems Analysis', 'Cybersecurity Basics', 'Database Design']

export default function Skills() {
  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className="section-eyebrow">What I Know</p>
        <h1 className={styles.title}>Skills & Technologies</h1>
        <p className={styles.subtitle}>
          A practical IT toolkit shaped by BIT coursework, real projects, and
          hands-on troubleshooting.
        </p>

        <div className={styles.grid}>
          {proficiencies.map(item => (
            <section key={item.skill} className={styles.card} data-reveal style={{ '--level': `${item.level}%` }}>
              <div className={styles.cardHead}>
                <div className={styles.ring} aria-label={`${item.skill} proficiency ${item.level}%`}>
                  <span>{item.level}%</span>
                </div>
                <div>
                  <h2 className={styles.catTitle}>{item.skill}</h2>
                  <p className={styles.catDesc}>{item.desc}</p>
                </div>
              </div>
              <div className={styles.progressTrack} aria-hidden="true">
                <span />
              </div>
            </section>
          ))}
        </div>

     <div className={styles.learningTicker} data-reveal>
          <span className={styles.learningDot} />
          <div className={styles.tickerMask}>
            <div className={styles.tickerTrack}>
              {[...learningItems, ...learningItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.driveSection} data-reveal>
          <h2 className={styles.driveTitle}>What Drives Me</h2>
          <div className={styles.traitRow}>
            {traits.map((trait, index) => (
              <span
                key={trait}
                className={styles.trait}
                style={{ '--trait-opacity': `${0.045 + index * 0.008}` }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
