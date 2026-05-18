import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from '@emailjs/browser'

console.log('EmailJS public key loaded', Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY))

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

// Analytics placeholder:
// Add Google Analytics, Vercel Analytics, or another provider here later.
// Keep IDs in Vite environment variables, for example VITE_GA_MEASUREMENT_ID.
const setupAnalytics = () => {
  const analyticsId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!analyticsId) return

  // Initialize analytics here when the project is ready.
}

setupAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
