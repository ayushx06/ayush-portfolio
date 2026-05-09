import Shiva from '../assets/Shiva.jpg'
import project from '../assets/project.jpg'
const projects = [
  {
    image: Shiva,
    title: 'Shiva Trekking Guide Nepal',
    desc: 'Full professional website for a private trekking guide. Features trek packages, interactive price calculator, booking calendar, gallery, and WhatsApp integration. Built and deployed from scratch.',
    tech: ['HTML5','CSS3','JavaScript','Responsive','SEO'],
    badges: [{ label: 'Live', color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.2)' }, { label: 'Featured', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.2)' }],
    link: 'https://www.shivatrekkingguidenepal.com',
    linkLabel: '🔗 Live Site',
    bg: 'linear-gradient(135deg,#0a1628,#0d2040)',
    dim: false,
  },
  {
    image: project,
    title: 'Next Project',
    desc: 'Always building something new. Follow my GitHub to stay updated on what\'s coming next.',
    tech: ['HTML5','CSS3','JavaScript'],
    badges: [{ label: 'Coming Soon', color: 'var(--accent2)', bg: 'var(--accent-glow)', border: 'rgba(108,99,255,0.2)' }],
    link: 'https://github.com/ayushx06',
    linkLabel: '🐙 GitHub',
    bg: 'linear-gradient(135deg,#0f0a1a,#1a0f2e)',
    dim: true,
  },
]

export default function Projects() {
  return (
    <div style={s.page}>
      <div style={s.inner} className="fade-in">
        <p style={s.eyebrow}>What I've Built</p>
        <h1 style={s.title}>Projects</h1>
        <p style={s.subtitle}>Real projects built for real people. I learn by shipping, not just studying.</p>
        <div style={s.grid}>
          {projects.map(proj => (
            <div key={proj.title} style={{ ...s.card, opacity: proj.dim ? 0.6 : 1 }}>
              <div style={{ ...s.preview, background: proj.bg }}>
                <img src={proj.image} alt={proj.title} style={s.projectImage} />
              </div>
              <div style={s.body}>
                <div style={s.badges}>
                  {proj.badges.map(b => (
                    <span key={b.label} style={{ ...s.badge, color: b.color, background: b.bg, border: `1px solid ${b.border}` }}>{b.label}</span>
                  ))}
                </div>
                <h3 style={s.cardTitle}>{proj.title}</h3>
                <p style={s.desc}>{proj.desc}</p>
                <div style={s.techRow}>
                  {proj.tech.map(t => <span key={t} style={s.pill}>{t}</span>)}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" style={s.link}>{proj.linkLabel}</a>
              </div>
            </div>
          ))}
        </div>
        <div style={s.footer}>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>More projects in progress</p>
          <p style={{ fontSize: '0.78rem', color: 'var(--muted2)' }}>
            Check my GitHub →{' '}
            <a href="https://github.com/ayushx06" target="_blank" rel="noreferrer" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>github.com/ayushx06</a>
          </p>
        </div>
      </div>
    </div>
  )
}

const s = {
  page: { paddingTop: 70, minHeight: '100vh' },
  inner: { maxWidth: 1000, margin: '0 auto', padding: '4rem 3rem' },
  eyebrow: { fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' },
  title: { fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em' },
  subtitle: { fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: '0.75rem', marginBottom: '2.5rem' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' },
  card: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' },
  preview: { height: 220, overflow: 'hidden', borderBottom: '1px solid var(--border)' },
  projectImage: { width: '100%', height: '100%', objectFit: 'cover' },
  body: { padding: '1.5rem' },
  badges: { display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' },
  badge: { padding: '0.25rem 0.6rem', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, borderRadius: 5 },
  cardTitle: { fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' },
  desc: { fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.2rem' },
  techRow: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' },
  pill: { padding: '0.25rem 0.6rem', background: 'var(--bg3)', border: '1px solid var(--muted2)', borderRadius: 5, fontSize: '0.68rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' },
  link: { fontSize: '0.78rem', color: 'var(--accent2)', textDecoration: 'none', fontWeight: 500 },
  footer: { background: 'var(--surface)', border: '1px dashed var(--border)', borderRadius: 16, padding: '2rem', textAlign: 'center' },
}
