import { useMemo, useState } from 'react'
import styles from '../styles/Blog.module.css'

const posts = [
  {
    title: 'My Journey from Nepal to IT in New Zealand',
    summary: 'A short reflection on moving from Pokhara to Auckland, choosing IT, and building a career with patience and practical learning.',
    category: 'Career',
    date: 'May 2026',
    readTime: '4 min read',
    content: [
      'Moving from Pokhara, Nepal to Auckland has been one of the biggest steps in my personal and professional life. It pushed me to become more independent, organised, and confident in new environments.',
      'I chose IT because I enjoy understanding how systems work and how technology can solve real problems. My goal is not only to build websites, but to grow into a reliable IT professional who can support users, troubleshoot issues, understand networks, and contribute to practical business technology.',
      'As a BIT student in New Zealand, I am building my career step by step through coursework, personal projects, and real client experience. I am open to internships and entry-level roles where I can learn quickly, communicate clearly, and become useful to a team.',
    ],
  },
  {
    title: 'What I’m Learning in Bachelor of IT',
    summary: 'A snapshot of the technical foundation I am building through programming, networking, systems, databases, cybersecurity, and professional practice.',
    category: 'BIT Study',
    date: 'May 2026',
    readTime: '5 min read',
    content: [
      'My Bachelor of IT is helping me build a wider foundation than web development alone. I am learning how software, networks, operating systems, databases, cybersecurity basics, and professional IT practice connect in real workplaces.',
      'The most useful part of the degree is that it encourages both technical thinking and communication. In IT support, helpdesk, networking, and junior systems roles, being able to explain problems clearly is just as important as solving them.',
      'I am using my coursework as a base for small practical projects so recruiters can see how I learn. My focus is steady improvement: write cleaner code, understand systems better, document my work, and keep building evidence of real skills.',
    ],
  },
  {
    title: 'How I Built My First Client Website',
    summary: 'What I learned from planning, designing, building, deploying, and improving a real small business website for a trekking guide.',
    category: 'Web Development',
    date: 'May 2026',
    readTime: '6 min read',
    content: [
      'My first client website taught me how different real work feels compared with practice projects. The goal was to create a professional online presence for a trekking guide, with clear information, responsive design, and simple ways for visitors to make enquiries.',
      'I planned the structure, built the pages, added package information, improved mobile responsiveness, and connected practical contact paths such as WhatsApp. I also thought about SEO and how visitors would judge trust from the first few seconds on the site.',
      'The biggest lesson was ownership. A client project requires communication, testing, deployment, and improvements after feedback. That experience made me more confident and showed me that I enjoy building useful technology for real people.',
    ],
  },
]

const categories = ['All', ...new Set(posts.map(post => post.category))]

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase()

    return posts.filter(post => {
      const matchesCategory = category === 'All' || post.category === category
      const matchesSearch = !search || `${post.title} ${post.summary} ${post.category}`.toLowerCase().includes(search)

      return matchesCategory && matchesSearch
    })
  }, [category, query])

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} fade-in`}>
        <p className="section-eyebrow">Writing</p>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Personal learning articles about my IT journey, BIT study, and practical
          project experience. These short posts are written for recruiters and IT
          employers who want to understand how I think and learn.
        </p>

        <div className={styles.controls}>
          <label className={styles.searchLabel}>
            <span>Search posts</span>
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search by topic..."
              className={styles.search}
            />
          </label>

          <div className={styles.filters} aria-label="Blog category filters">
            {categories.map(item => (
              <button
                key={item}
                type="button"
                className={item === category ? `${styles.filter} ${styles.filterActive}` : styles.filter}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredPosts.map(post => (
            <article key={post.title} className={styles.card}>
              <div className={styles.metaRow}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.meta}>{post.date} · {post.readTime}</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.summary}>{post.summary}</p>
              <button
                type="button"
                className={styles.readButton}
                aria-label={`Read ${post.title}`}
                onClick={() => setSelectedPost(post)}
              >
                Read More
              </button>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className={styles.empty}>No posts match that search yet.</p>
        )}
      </div>

      {selectedPost && (
        <div className={styles.modalBackdrop} role="presentation" onClick={() => setSelectedPost(null)}>
          <article
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-post-title"
            onClick={event => event.stopPropagation()}
          >
            <div className={styles.modalHead}>
              <div>
                <span className={styles.category}>{selectedPost.category}</span>
                <h2 id="blog-post-title" className={styles.modalTitle}>{selectedPost.title}</h2>
                <p className={styles.modalMeta}>{selectedPost.date} · {selectedPost.readTime}</p>
              </div>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Close blog post"
                onClick={() => setSelectedPost(null)}
              >
                Close
              </button>
            </div>

            <div className={styles.postContent}>
              {selectedPost.content.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
