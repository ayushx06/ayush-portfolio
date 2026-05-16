import Shiva from '../assets/Shiva.jpg'
import project from '../assets/project.jpg'
import styles from '../styles/Projects.module.css'

const projects = [
  {
    image: Shiva,
    title: 'Shiva Trekking Guide Nepal',
    desc: 'Full professional website for a private trekking guide. Features trek packages, interactive price calculator, booking calendar, gallery, and WhatsApp integration. Built and deployed from scratch.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive', 'SEO'],
    badges: [
      { label: 'Live', className: styles.liveBadge },
      { label: 'Featured', className: styles.featuredBadge },
    ],
    link: 'https://www.shivatrekkingguidenepal.com',
    linkLabel: '🔗 Live Site',
    previewClass: styles.previewShiva,
  },
  {
    image: project,
    title: 'Next Project',
    desc: 'Always building something new. Follow my GitHub to stay updated on what\'s coming next.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    badges: [{ label: 'Coming Soon', className: styles.soonBadge }],
    link: 'https://github.com/ayushx06',
    linkLabel: ' GitHub',
    previewClass: styles.previewNext,
    dim: true,
  },
]

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className={styles.eyebrow}>What I've Built</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>Real projects built for real people. I learn by shipping, not just studying.</p>
        <div className={styles.grid}>
          {projects.map(proj => (
            <div key={proj.title} className={proj.dim ? `${styles.card} ${styles.dimCard}` : styles.card}>
              <div className={`${styles.preview} ${proj.previewClass}`}>
                <img src={proj.image} alt={proj.title} className={styles.projectImage} />
              </div>
              <div className={styles.body}>
                <div className={styles.badges}>
                  {proj.badges.map(b => (
                    <span key={b.label} className={`${styles.badge} ${b.className}`}>{b.label}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{proj.title}</h3>
                <p className={styles.desc}>{proj.desc}</p>
                <div className={styles.techRow}>
                  {proj.tech.map(t => <span key={t} className={styles.pill}>{t}</span>)}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className={styles.link}>{proj.linkLabel}</a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <p className={styles.footerTitle}>More projects in progress</p>
          <p className={styles.footerText}>
            Check my GitHub →{' '}
            <a href="https://github.com/ayushx06" target="_blank" rel="noreferrer" className={styles.footerLink}>github.com/ayushx06</a>
          </p>
        </div>
      </div>
    </div>
  )
}
