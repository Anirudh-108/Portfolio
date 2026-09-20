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

      <div className="education__grid">
        {education.map((item) => (
          <article className="edu-card" key={item.title}>
            <div className="edu-card__icon">
              <i className={`bx ${item.icon}`} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="btn btn--outline">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
