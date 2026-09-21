import type { ResumeData } from '../../types'
import './Hero.css'

interface Props {
  data: Pick<
    ResumeData,
    'name' | 'title' | 'location' | 'status' | 'summary' | 'resumeFileHref' | 'profileImageSrc' | 'profileImageAlt'
  >
}

export default function Hero({ data }: Props) {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="hero-status meta-label">
            <span className="dot" aria-hidden="true" />
            {data.status}
          </span>
          <h1>
            {data.name}
            <br />
            <span className="accent">{data.title}</span>
          </h1>
          <p className="hero-summary">{data.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn-ghost" href={data.resumeFileHref} download>
              Download résumé
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img
            className="hero-photo"
            src={data.profileImageSrc}
            alt={data.profileImageAlt}
            width={320}
            height={400}
          />
          <dl className="hero-facts">
            <div className="hero-fact">
              <dt>Role</dt>
              <dd>{data.title}</dd>
            </div>
            <div className="hero-fact">
              <dt>Location</dt>
              <dd>{data.location}</dd>
            </div>
            <div className="hero-fact">
              <dt>Status</dt>
              <dd>{data.status}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

