import { NavLink } from 'react-router-dom'

const tabs = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Skills',   path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.logo}>A<span style={{ color: 'var(--accent)' }}>.</span>S</NavLink>
      <div style={styles.tabs}>
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            style={({ isActive }) => ({
              ...styles.tab,
              ...(isActive ? styles.tabActive : {})
            })}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    padding: '1.2rem 3rem', display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', background: 'rgba(5,5,7,0.85)',
    backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700,
    color: 'var(--white)', textDecoration: 'none',
  },
  tabs: {
    display: 'flex', gap: '0.25rem', background: 'var(--surface)',
    border: '1px solid var(--border)', borderRadius: '10px', padding: '0.3rem',
  },
  tab: {
    padding: '0.4rem 1.1rem', fontSize: '0.72rem', fontWeight: 500,
    color: 'var(--muted)', textDecoration: 'none', borderRadius: '7px',
    transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
  },
  tabActive: {
    color: 'var(--white)', background: 'var(--accent)',
  },
}