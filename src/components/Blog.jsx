import { useMemo, useState } from 'react'
import styles from '../styles/Blog.module.css'

const posts = [
  {
    title: 'Moving from Pokhara to Auckland: My First Month in NZ Tech',
    summary: 'A personal reflection on arriving in Auckland, settling into student life, and beginning a New Zealand IT career from the ground up.',
    category: 'Career',
    date: 'May 2026',
    readTime: '4 min read',
    content: [
      'Moving from Pokhara to Auckland changed almost every part of my routine. In the first month I had to learn the city, manage study expectations, and get comfortable asking questions in a new academic and professional environment.',
      'That transition also made my interest in technology feel more practical. I started thinking beyond websites and into the wider IT systems that support real workplaces: networks, helpdesk processes, databases, operating systems, and clear communication with users.',
      'My goal in New Zealand tech is simple: become useful, reliable, and easy to work with. I am building that through BIT study, personal projects, and small habits like documenting my learning and improving my troubleshooting process.',
    ],
  },
  {
    title: "What I'm Learning in My First Semester of BIT",
    summary: 'A snapshot of my first-semester BIT foundation: programming, systems thinking, networking, databases, cybersecurity basics, and professional practice.',
    category: 'BIT Study',
    date: 'May 2026',
    readTime: '5 min read',
    content: [
      'My Bachelor of IT is helping me build a wider foundation than web development alone. I am learning how software, networks, operating systems, databases, cybersecurity basics, and professional IT practice connect in real workplaces.',
      'The most useful part of the degree is that it encourages both technical thinking and communication. In IT support, helpdesk, networking, and junior systems roles, being able to explain problems clearly is just as important as solving them.',
      'I am using my coursework as a base for small practical projects so recruiters can see how I learn. My focus is steady improvement: write cleaner code, understand systems better, document my work, and keep building evidence of real skills.',
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
            <article key={post.title} className={styles.card} data-reveal>
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
