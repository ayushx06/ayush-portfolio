import { useEffect, useState } from 'react'

const skillBars = [
  { name: 'HTML5',            pct: 80, cat: 'Frontend' },
  { name: 'CSS3',             pct: 75, cat: 'Frontend' },
  { name: 'JavaScript',       pct: 55, cat: 'Frontend' },
  { name: 'Responsive Design',pct: 75, cat: 'Frontend' },
  { name: 'Python',           pct: 60, cat: 'Backend'  },
  { name: 'SQLite',           pct: 55, cat: 'Backend'  },
  { name: 'SQL',              pct: 55, cat: 'Backend'  },
]

const tools = ['VS Code','Git','GitHub','Vercel','Chrome DevTools','Figma (basic)']
const soft  = ['Adaptability','Resilience','Attention to Detail','Self-motivated','Communication','Fast Learner']

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  useEffect(() => { setTimeout(() => setAnimated(true), 200) }, [])

  const cats = [...new Set(skillBars.map(s => s.cat))]
  return (
    <div style={styles.page}>
      <div style={styles.inner} className="fade-in">
        <p style={styles.eyebrow}>What I Know</p>
        <h1 style={styles.title}>Skills & Technologies</h1>
        <p style={styles.subtitle}>I learn by building real things — not just reading docs.</p>
        {cats.map(cat => (
          <div key={cat} style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>{cat} Development</span>
              <span style={styles.tag}>{cat === 'Frontend' ? 'Core Skill' : 'Learning'}</span>
            </div>
            {skillBars.filter(s => s.cat === cat).map(s => (
              <div key={s.name} style={styles.barItem}>
                <div style={styles.barTop}>
                  <span style={styles.barName}>{s.name}</span>
                  <span style={styles.barPct}>{s.pct}%</span>
                </div>
                <div style={styles.barTrack}>
                  <div style={{ ...styles.barFill, width: animated ? `${s.pct}%` : '0%' }} />
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={styles.card}>
          <div style={styles.cardTitle}>Tools</div>
          <div style={styles.tagRow}>{tools.map(t => <span key={t} style={styles.stag}>{t}</span>)}</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Soft Skills</div>
          <div style={styles.tagRow}>{soft.map(t => <span key={t} style={styles.stag}>{t}</span>)}</div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: { paddingTop: 70, minHeight: '100vh' },
  inner: { maxWidth: 900, margin: '0 auto', padding: '4rem 3rem' },
  eyebrow: { fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' },
  title: { fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em' },
  subtitle: { fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: '0.75rem', marginBottom: '2.5rem' },
  card: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.75rem', marginBottom: '1.5rem' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
  cardTitle: { fontFamily: 'Syne, sans-serif', fontSize: '0.95rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1rem' },
  tag: { fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', background: 'var(--accent-glow)', color: 'var(--accent2)', borderRadius: 6, border: '1px solid rgba(108,99,255,0.2)' },
  barItem: { marginBottom: '1rem' },
  barTop: { display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' },
  barName: { fontSize: '0.82rem', color: 'var(--text)', fontFamily: 'JetBrains Mono, monospace' },
  barPct: { fontSize: '0.72rem', color: 'var(--muted)' },
  barTrack: { height: 4, background: 'var(--muted2)', borderRadius: 2, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 2, background: 'linear-gradient(to right, var(--accent), var(--accent2))', transition: 'width 1s ease' },
  tagRow: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' },
  stag: { padding: '0.35rem 0.85rem', background: 'var(--bg3)', border: '1px solid var(--muted2)', borderRadius: 6, fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' },
}