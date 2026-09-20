import { services } from '../data/content'
import { useInView } from '../hooks/useScroll'

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section className={`services section ${inView ? 'is-visible' : ''}`} id="services" ref={ref}>
      <div className="section__head reveal">
        <p className="eyebrow">Services</p>
        <h2>What I Offer</h2>
        <p className="section__sub">
          Full-stack development services tailored to modern product needs.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-card__icon">
              <i className={`bx ${service.icon}`} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>
                  <i className="bx bx-check" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
