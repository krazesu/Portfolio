import type { ResumeData } from '../../types'
import './Skills.css'

interface Props {
  data: Pick<ResumeData, 'skills'>
}

export default function Skills({ data }: Props) {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="meta-label">02 — Skills</span>
          <h2>What I work with</h2>
        </div>
        <div className="skills-grid">
          {data.skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
