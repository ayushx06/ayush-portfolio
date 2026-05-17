import Shiva from '../assets/Shiva.jpg'
import ShivaMobile from '../assets/Shiva-mobile.jpg'
import project from '../assets/project.jpg'
import styles from '../styles/Projects.module.css'

const projects = [
  {
    image: Shiva,
    imageMobile: ShivaMobile,
    title: 'Shiva Trekking Guide Nepal',
    problem: 'A local trekking guide needed a credible online presence that made packages, pricing, trust signals, and enquiries easy for international visitors.',
    solution: 'Designed and built a responsive website with trekking packages, an interactive price calculator, booking calendar, gallery, WhatsApp contact, and SEO-friendly content.',
    result: 'Created a live business website that presents the service professionally and gives visitors faster paths to enquire or book.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
    badges: [
      { label: 'Live Project', className: styles.liveBadge },
      { label: 'Featured', className: styles.featuredBadge },
    ],
    links: [
      { href: 'https://www.shivatrekkingguidenepal.com', label: 'Live Site' },
      { href: 'https://github.com/ayushx06', label: 'GitHub' },
    ],
    accent: 'purple',
  },
  {
    image: project,
    imageMobile: project,
    title: 'BIT Coursework & Learning Projects',
    problem: 'As a BIT student, I need to build evidence across more than frontend work: systems thinking, networking, data, troubleshooting, and software fundamentals.',
    solution: 'Use coursework and personal practice to document small, focused projects in Python, SQL, networking concepts, systems analysis, and web development.',
    result: 'Growing a practical portfolio that shows learning momentum and readiness for entry-level IT, helpdesk, support, and internship roles.',
    tech: ['Python', 'Networking', 'Systems Design', 'SQL'],
    badges: [
      { label: 'Coursework', className: styles.courseBadge },
      { label: 'In Progress', className: styles.progressBadge },
    ],
    links: [{ href: 'https://github.com/ayushx06', label: 'View GitHub' }],
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
                <picture className={styles.projectPicture}>
                  <source srcSet={proj.imageMobile} media="(max-width: 768px)" />
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className={styles.projectImage}
                    width="530"
                    height="230"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className={styles.body}>
                <div className={styles.badges}>
                  {proj.badges.map(b => (
                    <span key={b.label} className={`${styles.badge} ${b.className}`}>{b.label}</span>
                  ))}
                </div>
                <div className={styles.headingRow}>
                  <h3 className={styles.cardTitle}>{proj.title}</h3>
                </div>

                <div className={styles.caseGrid}>
                  <div className={styles.caseBlock}>
                    <span className={styles.caseLabel}>Problem</span>
                    <p>{proj.problem}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <span className={styles.caseLabel}>Solution</span>
                    <p>{proj.solution}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <span className={styles.caseLabel}>Result / Impact</span>
                    <p>{proj.result}</p>
                  </div>
                </div>

                <div className={styles.stackBlock}>
                  <span className={styles.caseLabel}>Tech Stack</span>
                  <div className={styles.techRow}>
                    {proj.tech.map(t => <span key={t} className={styles.pill}>{t}</span>)}
                  </div>
                </div>

                <div className={styles.actionRow}>
                  {proj.links.map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={styles.link}>
                      {link.label}
                    </a>
                  ))}
                </div>
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
