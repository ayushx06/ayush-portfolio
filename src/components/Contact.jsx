import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import styles from '../styles/Contact.module.css'

const contactItems = [
  { icon: <FaEnvelope />, label: 'Email', val: 'ayushdbs77@gmail.com', href: 'mailto:ayushdbs77@gmail.com' },
  { icon: <FaGithub />, label: 'GitHub', val: 'github.com/ayushx06', href: 'https://github.com/ayushx06' },
  { icon: <FaLinkedin />, label: 'LinkedIn', val: 'linkedin.com/in/ayush-subedi2006', href: 'https://www.linkedin.com/in/ayush-subedi2006/' },
  { icon: <FaMapMarkerAlt />, label: 'Location', val: 'Auckland, New Zealand', href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    console.log('EmailJS env check', {
      serviceIdLoaded: Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID),
      templateIdLoaded: Boolean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
      publicKeyLoaded: Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
    })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ayushdbs77@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error(error)
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className="section-eyebrow">Get In Touch</p>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.subtitle}>
          Open to web development, IT support, helpdesk, networking roles,
          internships, and entry-level IT opportunities in Auckland.
        </p>

        <div className={styles.banner}>
          <span className={styles.dot} />
          <p className={styles.bannerText}>
            <strong className={styles.bannerStrong}>Currently available</strong> for web dev, IT support, helpdesk, networking, and internship roles. Based in Auckland, NZ. International student with work rights.
          </p>
        </div>

        <a className={styles.downloadLink} href="/ayush-subedi-resume.pdf" download>
          <span className={styles.downloadIcon}>↓</span>
          Download CV
        </a>

        <div className={styles.layout}>
          <div className={styles.contactList}>
            {contactItems.map(item => {
              const inner = (
                <>
                  <div className={styles.icon}>{item.icon}</div>
                  <div>
                    <div className={styles.cardLabel}>{item.label}</div>
                    <div className={styles.cardVal}>{item.val}</div>
                  </div>
                </>
              )

              return item.href
                ? <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.contactCard}>{inner}</a>
                : <div key={item.label} className={styles.contactCard}>{inner}</div>
            })}
          </div>

          <form className={styles.formWrap} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            {[
              ['Name', 'name', 'text', 'Your name'],
              ['Email', 'email', 'email', 'your@email.com'],
              ['Subject', 'subject', 'text', 'Job opportunity / collaboration'],
            ].map(([label, name, type, ph]) => (
              <div key={label} className={styles.formGroup}>
                <label className={styles.label}>{label}</label>
                <input
                  type={type}
                  name={name}
                  placeholder={ph}
                  value={formData[name]}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            ))}
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about the role or project..."
                value={formData.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.textarea}`}
                required
              />
            </div>
            {status.message && (
              <p className={`${styles.status} ${status.type === 'success' ? styles.success : styles.error}`}>
                {status.message}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`${styles.btn} ${status.type === 'success' ? styles.btnSuccess : ''} ${loading ? styles.btnDisabled : ''}`}
            >
              {loading ? 'Sending...' : status.type === 'success' ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
