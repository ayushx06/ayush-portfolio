import { useEffect, useState } from 'react'
import styles from '../styles/Skills.module.css'

const skillBars = [
  { name: 'HTML5', pct: 80, cat: 'Frontend', level: styles.level80 },
  { name: 'CSS3', pct: 75, cat: 'Frontend', level: styles.level75 },
  { name: 'JavaScript', pct: 55, cat: 'Frontend', level: styles.level55 },
  { name: 'Responsive Design', pct: 75, cat: 'Frontend', level: styles.level75 },
  { name: 'Python', pct: 60, cat: 'Backend', level: styles.level60 },
  { name: 'SQLite', pct: 55, cat: 'Backend', level: styles.level55 },
  { name: 'SQL', pct: 55, cat: 'Backend', level: styles.level55 },
]

const tools = ['VS Code', 'Git', 'GitHub', 'Vercel', 'Chrome DevTools', 'Figma (basic)']
const soft = ['Adaptability', 'Resilience', 'Attention to Detail', 'Self-motivated', 'Communication', 'Fast Learner']

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const cats = [...new Set(skillBars.map(s => s.cat))]

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className={styles.eyebrow}>What I Know</p>
        <h1 className={styles.title}>Skills & Technologies</h1>
        <p className={styles.subtitle}>I learn by building real things — not just reading docs.</p>
        {cats.map(cat => (
          <div key={cat} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>{cat} Development</span>
              <span className={styles.tag}>{cat === 'Frontend' ? 'Core Skill' : 'Learning'}</span>
            </div>
            {skillBars.filter(s => s.cat === cat).map(skill => (
              <div key={skill.name} className={styles.barItem}>
                <div className={styles.barTop}>
                  <span className={styles.barName}>{skill.name}</span>
                  <span className={styles.barPct}>{skill.pct}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div className={`${styles.barFill} ${animated ? skill.level : ''}`} />
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Tools</div>
          <div className={styles.tagRow}>{tools.map(t => <span key={t} className={styles.stag}>{t}</span>)}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Soft Skills</div>
          <div className={styles.tagRow}>{soft.map(t => <span key={t} className={styles.stag}>{t}</span>)}</div>
        </div>
      </div>
    </div>
  )
}
