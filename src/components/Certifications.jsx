import { certifications } from '../data/content'
import { useInView } from '../hooks/useScroll'

export default function Certifications() {
  const [ref, inView] = useInView()

  return (
    <section
      className={`certifications section ${inView ? 'is-visible' : ''}`}
      id="certifications"
      ref={ref}
    >
      <div className="section__head reveal">
        <p className="eyebrow">Credentials</p>
        <h2>My Certifications</h2>
        <p className="section__sub">
          Industry-recognized credentials across cloud, AI, and programming.
        </p>
      </div>

      <div className="certifications__grid">
        {certifications.map((item) => (
          <article className="cert-card" key={item.title}>
            <div className="cert-card__icon">
              <i className={`bx ${item.icon}`} />
            </div>
            <h3>{item.title}</h3>
            <p className="cert-card__issuer">{item.issuer}</p>
            <p className="cert-card__validity">{item.validity}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="btn btn--outline">
              View Certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
