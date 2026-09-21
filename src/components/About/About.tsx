import type { ResumeData } from '../../types'
import './About.css'

interface Props {
  data: Pick<ResumeData, 'about' | 'education'>
}


export default function About({ data }: Props) {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <div className="section-head">
          <span className="meta-label">01 — About</span>
          <h2>Background</h2>
        </div>

        <div>
          <div className="about-copy">
            {data.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="education">
            <h3 className="education-heading meta-label">Education</h3>
            <ul className="education-list">
              {data.education.map((item) => (
                <li className="education-item" key={item.degree}>
                  <div className="education-main">
                    <span className="education-degree">{item.degree}</span>
                    <span className="education-institution">{item.institution}</span>
                    {item.detail && <p className="education-detail">{item.detail}</p>}
                  </div>
                  <span className="education-year">{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
