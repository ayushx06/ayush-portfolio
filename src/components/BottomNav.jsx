import { NavLink } from 'react-router-dom'
import { FaCode, FaEnvelope, FaHome, FaTools } from 'react-icons/fa'
import styles from '../styles/BottomNav.module.css'

const links = [
  { label: 'Home', path: '/', icon: <FaHome /> },
  { label: 'Projects', path: '/projects', icon: <FaTools /> },
  { label: 'Skills', path: '/skills', icon: <FaCode /> },
  { label: 'Contact', path: '/contact', icon: <FaEnvelope /> },
]

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav} aria-label="Mobile primary navigation">
      {links.map(link => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          className={({ isActive }) => isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          aria-label={link.label}
        >
          <span className={styles.icon} aria-hidden="true">{link.icon}</span>
          <span className={styles.label}>{link.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
