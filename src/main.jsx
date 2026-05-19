import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser'
import './index.css'
import App from './App.jsx'

// Analytics placeholder:
// Add Google Analytics, Vercel Analytics, or another provider here later.
// Keep IDs in Vite environment variables, for example VITE_GA_MEASUREMENT_ID.
const setupAnalytics = () => {
  const analyticsId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!analyticsId) return

  // Initialize analytics here when the project is ready.
}

setupAnalytics()

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
