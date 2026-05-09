import profile from '../assets/profile.jpg'

export default function About() {
  return (
    <div style={s.page}>
      <div style={s.inner} className="fade-in">
        <p style={s.eyebrow}>Who I Am</p>
        <h1 style={s.title}>About Me</h1>
        <p style={s.subtitle}>A driven developer from Nepal, building a future in technology one line of code at a time.</p>

        <div style={s.topCard}>
          <div style={s.photoWrap}>
            <img src={profile} alt="Ayush Subedi" style={s.photo} />
            <p style={s.photoCaption}>Auckland, New Zealand</p>
          </div>
          <div style={s.storyText}>
            <h3 style={s.cardTitle}>👋 My Story</h3>
            <p style={s.p}>I was born on <strong style={s.strong}>16 November 2006</strong> in Pokhara, Nepal — a city surrounded by mountains and full of heart. Growing up, I was always the curious one: observing how things worked, asking questions, and diving deep into details others overlooked.</p>
            <p style={s.p}>My original dream was to become a nurse, so I pursued higher secondary in the science stream with biology. But technology kept pulling me in. The more I explored code, systems, and digital experiences — the more I knew IT was where I truly belonged. My dream didn't break. It evolved.</p>
            <p style={s.p}>On <strong style={s.strong}>18 April 2025</strong>, I landed in Auckland, New Zealand to pursue a <strong style={s.strong}>Bachelor of IT at Otago Polytechnic Auckland International Campus</strong>. Alone, with weak English, no close friends nearby — but with one thing that never wavered: the belief that this was worth it.</p>
          </div>
        </div>

        <div style={s.grid}>
          <div style={s.card}>
            <h3 style={s.cardTitle}>📋 Quick Info</h3>
            <div style={s.infoGrid}>
              {[
                ['Name','Ayush Subedi'],['Born','16 Nov 2006'],
                ['Location','Auckland, NZ'],['Origin','Pokhara, Nepal'],
                ['Study','BIT @ Otago Poly AIC'],['Role','Junior Web Dev'],
                ['Email','ayushdbs77@gmail.com'],['Status','Open to Work ✓'],
              ].map(([label, val]) => (
                <div key={label} style={s.infoItem}>
                  <div style={s.infoLabel}>{label}</div>
                  <div style={{ ...s.infoVal, ...(label === 'Status' ? { color: 'var(--green)' } : {}) }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={s.card}>
            <h3 style={s.cardTitle}>🗺 My Journey</h3>
            <div style={s.timeline}>
              {[
                ['2006','Born in Pokhara, Nepal. Grew up curious and detail-oriented.'],
                ['School','Strong academic record through Grade 10. Science stream with biology.'],
                ['The Shift','Discovered web development. Dream evolved from nursing to IT.'],
                ['Apr 2025','Moved to Auckland, NZ. Started BIT at Otago Polytechnic AIC.'],
                ['Now','Studying, building real projects, open to Junior Web Dev roles.'],
              ].map(([year, text]) => (
                <div key={year} style={s.tmItem}>
                  <div style={s.tmDot} />
                  <div style={s.tmYear}>{year}</div>
                  <div style={s.tmText}>{text}</div>
                </div>
              ))}
            </div>
          </div>
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
  topCard: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem', alignItems: 'start', marginBottom: '1.5rem' },
  photoWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  photo: { width: 200, height: 220, objectFit: 'cover', objectPosition: 'center top', borderRadius: 12, display: 'block', border: '2px solid var(--accent)' },
  photoCaption: { fontSize: '0.65rem', color: 'var(--muted)', marginTop: '0.75rem', letterSpacing: '0.05em' },
  storyText: {},
  cardTitle: { fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1rem' },
  p: { fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.75rem' },
  strong: { color: 'var(--text)', fontWeight: 500 },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' },
  card: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem' },
  infoGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' },
  infoItem: { background: 'var(--bg3)', borderRadius: 8, padding: '0.75rem 1rem' },
  infoLabel: { fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: '0.25rem' },
  infoVal: { fontSize: '0.82rem', color: 'var(--text)' },
  timeline: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  tmItem: { display: 'flex', gap: '1rem', alignItems: 'flex-start' },
  tmDot: { width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', marginTop: 5, flexShrink: 0 },
  tmYear: { fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--accent2)', minWidth: 80, flexShrink: 0 },
  tmText: { fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 },
}
