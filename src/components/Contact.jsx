import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

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

    try {
      await emailjs.send(
        'service_hby65zi',
        'template_377a6bo',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ayushdbs77@gmail.com',
        },
       
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
    <div style={s.page}>
      <div style={s.inner} className="fade-in">
        <p style={s.eyebrow}>Get In Touch</p>
        <h1 style={s.title}>Contact Me</h1>
        <p style={s.subtitle}>Open to junior web developer roles, internships, and freelance projects in Auckland or remote.</p>

        <div style={s.banner}>
          <span style={s.dot} />
          <p style={s.bannerText}><strong style={{ color: 'var(--accent2)' }}>Currently available</strong> for Junior Web Developer roles, internships, and freelance work. Based in Auckland, NZ. International student with work rights.</p>
        </div>

        <div style={s.layout}>
          <div style={s.contactList}>
            {contactItems.map(item => {
              const inner = (
                <>
                  <div style={s.icon}>{item.icon}</div>
                  <div>
                    <div style={s.cardLabel}>{item.label}</div>
                    <div style={s.cardVal}>{item.val}</div>
                  </div>
                </>
              )
              return item.href
                ? <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={s.contactCard}>{inner}</a>
                : <div key={item.label} style={s.contactCard}>{inner}</div>
            })}
          </div>

          <form style={s.formWrap} onSubmit={handleSubmit}>
            <h3 style={s.formTitle}>Send a Message</h3>
            {[
              ['Name', 'name', 'text', 'Your name'],
              ['Email', 'email', 'email', 'your@email.com'],
              ['Subject', 'subject', 'text', 'Job opportunity / collaboration'],
            ].map(([label, name, type, ph]) => (
              <div key={label} style={s.formGroup}>
                <label style={s.label}>{label}</label>
                <input
                  type={type}
                  name={name}
                  placeholder={ph}
                  value={formData[name]}
                  onChange={handleChange}
                  style={s.input}
                  required
                />
              </div>
            ))}
            <div style={s.formGroup}>
              <label style={s.label}>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about the role or project..."
                value={formData.message}
                onChange={handleChange}
                style={{ ...s.input, minHeight: 120, resize: 'vertical' }}
                required
              />
            </div>
            {status.message && (
              <p style={{ ...s.status, ...(status.type === 'success' ? s.success : s.error) }}>
                {status.message}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{ ...s.btn, ...(status.type === 'success' ? { background: 'var(--green)', color: '#000' } : {}), ...(loading ? s.btnDisabled : {}) }}
            >
              {loading ? 'Sending...' : status.type === 'success' ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const s = {
  page: { paddingTop: 70, minHeight: '100vh' },
  inner: { maxWidth: 1000, margin: '0 auto', padding: '4rem 3rem' },
  eyebrow: { fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' },
  title: { fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em' },
  subtitle: { fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: '0.75rem', marginBottom: '2rem' },
  banner: { display: 'flex', alignItems: 'center', gap: '1rem', background: 'linear-gradient(135deg,rgba(108,99,255,0.1),rgba(167,139,250,0.05))', border: '1px solid rgba(108,99,255,0.2)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' },
  dot: { width: 10, height: 10, borderRadius: '50%', background: 'var(--green)', flexShrink: 0, animation: 'pulse 2s ease infinite', display: 'inline-block' },
  bannerText: { fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.5 },
  layout: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' },
  contactList: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  contactCard: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none', cursor: 'pointer' },
  icon: { width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'var(--accent2)', flexShrink: 0 },
  cardLabel: { fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' },
  cardVal: { fontSize: '0.88rem', color: 'var(--text)' },
  formWrap: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem' },
  formTitle: { fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--white)', marginBottom: '1.5rem' },
  formGroup: { marginBottom: '1.2rem' },
  label: { fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' },
  input: { width: '100%', padding: '0.7rem 1rem', background: 'var(--bg3)', border: '1px solid var(--muted2)', borderRadius: 8, color: 'var(--text)', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', outline: 'none' },
  status: { fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '1rem' },
  success: { color: 'var(--green)' },
  error: { color: '#ff7a7a' },
  btn: { width: '100%', padding: '0.85rem', background: 'var(--accent)', color: 'var(--white)', fontSize: '0.85rem', fontWeight: 500, borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.2s' },
  btnDisabled: { opacity: 0.7, cursor: 'not-allowed' },
}
