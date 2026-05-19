import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import styles from './styles/App.module.css'

function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!('IntersectionObserver' in window)) {
      cards.forEach(card => card.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
    )

    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch || !cursorRef.current) return undefined

    const cursor = cursorRef.current
    const moveCursor = event => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }

    window.addEventListener('pointermove', moveCursor)
    return () => window.removeEventListener('pointermove', moveCursor)
  }, [])

  return <div ref={cursorRef} className={styles.cursor} aria-hidden="true" />
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div id="main-content" className={styles.routeWrapper}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

function AppShell() {
  return (
    <div className={styles.app}>
      <a href="#main-content" className={styles.skipLink}>Skip to main content</a>
      <CustomCursor />
      <Navbar />
      <ScrollReveal />
      <AnimatedRoutes />
      <Footer />
      <BottomNav />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
