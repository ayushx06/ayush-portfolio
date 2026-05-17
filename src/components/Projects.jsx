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
    linkLabel: 'Live Site',
    accent: 'purple',
  },
  {
    image: project,
    title: 'BIT Coursework & Learning Projects',
    desc: 'Actively studying networking, systems analysis, and software engineering at Otago Poly AIC. Follow my GitHub to see what I am building as I learn.',
    tech: ['Python', 'Networking', 'Systems Design', 'SQL'],
    badges: [{ label: 'In Progress', className: styles.progressBadge }],
    link: 'https://github.com/ayushx06',
    linkLabel: 'View GitHub',
    accent: 'cyan',
  },
]

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className="section-eyebrow">What I Have Built</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>Real projects, active coursework, and proof that I learn by shipping.</p>

        <div className={styles.grid}>
          {projects.map(proj => (
            <article key={proj.title} className={proj.accent === 'cyan' ? `${styles.card} ${styles.cyanCard}` : styles.card}>
              <div className={styles.scan} />
              <div className={styles.preview}>
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
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerTitle}>More work is in motion</p>
          <p className={styles.footerText}>
            Follow the build trail on{' '}
            <a href="https://github.com/ayushx06" target="_blank" rel="noreferrer" className={styles.footerLink}>github.com/ayushx06</a>
          </p>
        </div>
      </div>
    </div>
  )
}
