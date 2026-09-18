import type { ResumeData } from '../../types'
import './About.css'

interface Props {
  data: Pick<ResumeData, 'about'>
}

export default function About({ data }: Props) {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <div className="section-head">
          <span className="meta-label">01 — About</span>
          <h2>Background</h2>
        </div>
        <div className="about-copy">
          {data.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
