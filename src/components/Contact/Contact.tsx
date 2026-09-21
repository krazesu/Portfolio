import type { ResumeData } from '../../types'
import './Contact.css'

interface Props {
  data: Pick<ResumeData, 'contact'>
}

export default function Contact({ data }: Props) {
  return (
    <section id="contact" className="section contact-section">
      <div className="wrap contact-grid">
        <div>
          <span className="meta-label">04 — Contact</span>
          <p className="contact-lede">Let's work together.</p>
        </div>

        <ul className="contact-list">
          {data.contact.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <span className="meta-label">{link.label}</span>
                <span className="value">{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
