import { useEffect, useState } from 'react'
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
  const [stats, setStats] = useState({ repos: 0, stars: 0, streak: 'Learning daily' })
  const [statsLoading, setStatsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState({})
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let cancelled = false

    const loadStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ayushx06/repos?per_page=100')
        if (!response.ok) throw new Error('GitHub stats unavailable')
        const repos = await response.json()
        if (cancelled) return
        setStats({
          repos: repos.length,
          stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
          streak: 'Active builder',
        })
      } catch {
        if (!cancelled) setStats({ repos: 6, stars: 0, streak: 'Active builder' })
      } finally {
        if (!cancelled) setStatsLoading(false)
      }
    }

    loadStats()

    return () => {
      cancelled = true
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ayushdbs77@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = 'mailto:ayushdbs77@gmail.com'
    }
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className="section-eyebrow">What I Have Built</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>Real projects, active coursework, and proof that I learn by shipping.</p>

        <section className={styles.statsPanel} data-reveal>
          <div>
            <p className={styles.statsLabel}>GitHub Activity</p>
            <h2 className={styles.statsTitle}>github.com/ayushx06</h2>
          </div>
          <div className={styles.statsGrid}>
            {[
              ['Repos', stats.repos],
              ['Stars', stats.stars],
              ['Streak', stats.streak],
            ].map(([label, value]) => (
              <div key={label} className={styles.statCard}>
                <span>{label}</span>
                <strong>{statsLoading ? '...' : value}</strong>
              </div>
            ))}
          </div>
          <button type="button" className={styles.copyButton} onClick={copyEmail}>
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        </section>

        <div className={styles.grid}>
          {projects.map(proj => (
            <article key={proj.title} className={proj.accent === 'cyan' ? `${styles.card} ${styles.cyanCard}` : styles.card} data-reveal>
              <div className={styles.scan} />
              <div className={styles.preview}>
                {!loadedImages[proj.title] && <div className={styles.skeleton} aria-hidden="true" />}
                <picture className={styles.projectPicture}>
                  <source srcSet={proj.imageMobile} media="(max-width: 768px)" />
                  <img
                    src={proj.image}
                    alt={`${proj.title} project preview`}
                    className={styles.projectImage}
                    width="530"
                    height="230"
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [proj.title]: true }))}
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

        <div className={styles.footer} data-reveal>
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
