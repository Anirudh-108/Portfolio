import { education } from '../data/content'
import { useInView } from '../hooks/useScroll'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section
      className={`education section ${inView ? 'is-visible' : ''}`}
      id="education"
      ref={ref}
    >
      <div className="section__head reveal">
        <p className="eyebrow">Academic Information</p>
        <h2>My Education</h2>
        <p className="section__sub">A solid academic foundation supporting continuous growth.</p>
      </div>

      <div className="education__timeline">
        {education.map((item) => (
          <article className="edu-record" key={item.title}>
            <div className="edu-record__rail" aria-hidden="true">
              <span className="edu-record__dot" />
            </div>
            <div className="edu-record__body">
              <div className="edu-record__icon">
                <i className={`bx ${item.icon}`} />
              </div>
              <div className="edu-record__content">
                <div className="edu-record__top">
                  <h3>{item.title}</h3>
                  <span className="edu-record__period">{item.period}</span>
                </div>
                <p className="edu-record__school">{item.school}</p>
                <p className="edu-record__result">{item.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
