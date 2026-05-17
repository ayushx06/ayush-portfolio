import styles from '../styles/Skills.module.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '◈',
    desc: 'Building interfaces people enjoy using',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Vite'],
  },
  {
    category: 'Backend & Data',
    icon: '◇',
    desc: 'Logic, data, and making things work',
    skills: ['Python', 'SQL', 'SQLite', 'REST APIs'],
  },
  {
    category: 'Tools & Workflow',
    icon: '○',
    desc: 'How I build and ship',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Chrome DevTools', 'Figma'],
  },
  {
    category: 'Currently Learning',
    icon: '◉',
    desc: 'What I am actively studying in BIT',
    skills: ['Networking Fundamentals', 'Linux CLI', 'Systems Analysis', 'Cybersecurity Basics', 'Database Design'],
  },
]

const traits = ['Fast Learner', 'Attention to Detail', 'Resilient', 'Self-driven', 'Adaptable', 'Curious']

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
          {skillGroups.map(group => {
            const isLearning = group.category === 'Currently Learning'

            return (
              <section
                key={group.category}
                className={isLearning ? `${styles.card} ${styles.learningCard}` : styles.card}
              >
                <div className={styles.cardHead}>
                  <div className={styles.icon}>{group.icon}</div>
                  <div>
                    <h2 className={styles.catTitle}>
                      {isLearning && <span className={styles.learningDot} />}
                      {group.category}
                    </h2>
                    <p className={styles.catDesc}>{group.desc}</p>
                  </div>
                </div>

                <div className={styles.pillRow}>
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className={isLearning ? `${styles.pill} ${styles.learningPill}` : styles.pill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <div className={styles.driveSection}>
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
