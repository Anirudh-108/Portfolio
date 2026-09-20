import { useMemo, useState } from 'react'
import { projectFilters, projects } from '../data/content'
import { useInView } from '../hooks/useScroll'

export default function Projects() {
  const [ref, inView] = useInView()
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section className={`projects section ${inView ? 'is-visible' : ''}`} id="projects" ref={ref}>
      <div className="section__head reveal">
        <p className="eyebrow">Portfolio</p>
        <h2>Featured Projects</h2>
        <p className="section__sub">
          A collection of recent work showcasing creativity and technical range.
        </p>
      </div>

      <div className="filter-bar reveal reveal--delay-1" role="tablist" aria-label="Project filters">
        {projectFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            className={`filter-bar__btn ${filter === item.id ? 'is-active' : ''}`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {visible.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card__media">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
                View Project <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
