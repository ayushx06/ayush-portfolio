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
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [copiedEmail, setCopiedEmail] = useState(false)

  const validateField = (name, value) => {
    if (!value.trim()) return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.'
    if (name === 'message' && value.trim().length < 12) return 'Message should be at least 12 characters.'
    return ''
  }

  const validateForm = nextData => {
    const nextErrors = Object.fromEntries(
      Object.entries(nextData)
        .map(([name, value]) => [name, validateField(name, value)])
        .filter(([, message]) => message)
    )

    setErrors(nextErrors)
    return nextErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ayushdbs77@gmail.com')
      setCopiedEmail(true)
      window.setTimeout(() => setCopiedEmail(false), 1600)
    } catch {
      window.location.href = 'mailto:ayushdbs77@gmail.com'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validateForm(formData)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)
    setStatus({ type: '', message: '' })

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
        }
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
                    {item.label === 'Email' && <div className={styles.tapHint}>Tap to copy email</div>}
                  </div>
                </>
              )

              if (item.label === 'Email') {
                return (
                  <button key={item.label} type="button" className={styles.contactCard} onClick={copyEmail}>
                    {inner}
                    {copiedEmail && <span className={styles.copyToast}>Copied!</span>}
                  </button>
                )
              }

              return item.href
                ? <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.contactCard} aria-label={`Open ${item.label}: ${item.val}`}>{inner}</a>
                : <div key={item.label} className={styles.contactCard}>{inner}</div>
            })}
          </div>

          <form className={styles.formWrap} onSubmit={handleSubmit} noValidate data-reveal>
            <h3 className={styles.formTitle}>Send a Message</h3>
            {[
              ['Name', 'name', 'text'],
              ['Email', 'email', 'email'],
              ['Subject', 'subject', 'text'],
            ].map(([label, name, type]) => (
              <div key={label} className={styles.formGroup}>
                <input
                  id={name}
                  type={type}
                  name={name}
                  placeholder=" "
                  value={formData[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors[name] ? `${styles.input} ${styles.inputError}` : styles.input}
                  aria-invalid={Boolean(errors[name])}
                  aria-describedby={errors[name] ? `${name}-error` : undefined}
                  required
                />
                <label className={styles.label} htmlFor={name}>{label}</label>
                {errors[name] && <p id={`${name}-error`} className={styles.fieldError}>{errors[name]}</p>}
              </div>
            ))}
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message ? `${styles.input} ${styles.textarea} ${styles.inputError}` : `${styles.input} ${styles.textarea}`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              <label className={styles.label} htmlFor="message">Message</label>
              {errors.message && <p id="message-error" className={styles.fieldError}>{errors.message}</p>}
            </div>
            {status.message && (
              <p className={`${styles.status} ${status.type === 'success' ? styles.success : styles.error}`}>
                {status.type === 'success' && (
                  <svg className={styles.checkIcon} viewBox="0 0 52 52" aria-hidden="true">
                    <path d="M14 27l8 8 17-19" />
                  </svg>
                )}
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
