import { useNavigate } from 'react-router-dom'
import profile from '../assets/profile.jpg'
import mountain from '../assets/mountain.jpg'

export default function Home() {
  const navigate = useNavigate()
  return (
    <section style={{ ...s.hero, backgroundImage: `url(${mountain})` }}>
      <div style={s.overlay} />
      <div style={s.content} className="fade-in">
        <div style={s.badge}>
          <span style={s.dot} />
          Open to Junior Web Developer Roles · Auckland NZ
        </div>
        <h1 style={s.name}>
          Ayush<br />
          <span style={{ color: 'var(--accent)' }}>Subedi</span>
        </h1>
        <p style={s.role}>Junior Web Developer</p>
        <p style={s.desc}>
          From Pokhara, Nepal — now building in Auckland, NZ. I craft clean,
          purposeful web experiences using HTML, CSS, JavaScript and Python.
          Currently studying BIT at Otago Polytechnic AIC.
        </p>
        <div style={s.btns}>
          <button style={s.btnPrimary} onClick={() => navigate('/projects')}>View My Work</button>
          <button style={s.btnOutline} onClick={() => navigate('/contact')}>Get In Touch</button>
        </div>
        <div style={s.links}>
          <a href="https://github.com/ayushx06" target="_blank" rel="noreferrer" style={s.socialLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/ayush-subedi2006/" target="_blank" rel="noreferrer" style={s.socialLink}>LinkedIn</a>
          <a href="mailto:ayushdbs77@gmail.com" style={s.socialLink}>Email</a>
        </div>
      </div>
      <div style={s.photoCol} className="fade-in">
        <div style={s.photoWrap}>
          <img src={profile} alt="Ayush Subedi" style={s.photo} />
        </div>
        <div style={s.statsRow}>
          {[['1+','Live Site'],['5+','Skills'],['BIT','Degree']].map(([num, label]) => (
            <div key={label} style={s.statCard}>
              <div style={s.statNum}>{num}</div>
              <div style={s.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  hero: { minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 380px', alignItems: 'center', padding: '100px 3rem 3rem', gap: '4rem', position: 'relative', backgroundSize: 'cover', backgroundPosition: 'center' },
  overlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,7,0.97) 40%, rgba(5,5,7,0.7))', zIndex: 0 },
  content: { position: 'relative', zIndex: 1 },
  badge: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, fontSize: '0.7rem', color: 'var(--accent2)', letterSpacing: '0.1em', fontWeight: 500, marginBottom: '2rem' },
  dot: { width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulse 2s ease infinite' },
  name: { fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem,7vw,6rem)', fontWeight: 800, lineHeight: 0.95, color: 'var(--white)', marginBottom: '0.5rem' },
  role: { fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', color: 'var(--muted)', marginBottom: '1.5rem' },
  desc: { fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: 480, marginBottom: '2.5rem' },
  btns: { display: 'flex', gap: '1rem', marginBottom: '2rem' },
  btnPrimary: { padding: '0.8rem 2rem', background: 'var(--accent)', color: 'var(--white)', fontSize: '0.85rem', fontWeight: 500, borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' },
  btnOutline: { padding: '0.8rem 2rem', background: 'transparent', color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500, borderRadius: 10, border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'Inter, sans-serif' },
  links: { display: 'flex', gap: '0.75rem' },
  socialLink: { padding: '0.5rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '0.75rem', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace' },
  photoCol: { position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' },
  photoWrap: { width: 280, height: 360, borderRadius: 24, padding: 2, background: 'linear-gradient(135deg, #6c63ff, #a78bfa)' },
  photo: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: 22, display: 'block' },
  statsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', width: '100%' },
  statCard: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.9rem 0.5rem', textAlign: 'center' },
  statNum: { fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent2)' },
  statLabel: { fontSize: '0.58rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 },
}
