import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from '../styles/Navbar.module.css'

const tabs = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 24)
      setProgress(maxScroll > 0 ? Math.min(100, (window.scrollY / maxScroll) * 100) : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getTabClass = ({ isActive }) =>
    isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={scrolled ? `${styles.nav} ${styles.navScrolled}` : styles.nav}>
      <div className={styles.progressBar} style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
      <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
        Ayush Subedi
      </NavLink>

      <div className={styles.navRight}>
        <div className={styles.workPill}>
          <span className={styles.workDot} />
          Open to Work
        </div>

        <button
          type="button"
          className={styles.themeButton}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
        >
          <span className={open ? `${styles.hamburger} ${styles.hamburgerOpen}` : styles.hamburger} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div className={styles.tabs}>
          {tabs.map(tab => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === '/'}
              className={getTabClass}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {tabs.map((tab, index) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={getTabClass}
            style={{ '--stagger': index }}
            onClick={() => setOpen(false)}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
