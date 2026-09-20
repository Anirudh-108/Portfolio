import { experience } from '../data/content'
import { useInView } from '../hooks/useScroll'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section
      className={`experience section ${inView ? 'is-visible' : ''}`}
      id="experience"
      ref={ref}
    >
      <div className="section__head reveal">
        <p className="eyebrow">Career</p>
        <h2>Work Experience</h2>
        <p className="section__sub">
          Building reliable backend systems and shipping production features at Hexaware.
        </p>
      </div>

      <div className="experience__timeline">
        {experience.map((job) => (
          <article className="exp-card" key={`${job.role}-${job.period}`}>
            <div className="exp-card__marker" aria-hidden="true" />
            <div className="exp-card__body">
              <div className="exp-card__top">
                <div>
                  <p className="exp-card__company">{job.company}</p>
                  <h3>{job.role}</h3>
                </div>
                <div className="exp-card__meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>
                    <i className="bx bx-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
