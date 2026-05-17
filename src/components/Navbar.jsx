import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

const tabs = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const getTabClass = ({ isActive }) =>
    isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab

  return (
    <nav className={styles.nav}>
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
          className={styles.menuButton}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
        >
          ☰
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
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={getTabClass}
            onClick={() => setOpen(false)}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
