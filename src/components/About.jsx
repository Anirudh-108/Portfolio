import { profile } from '../data/content'
import { useInView } from '../hooks/useScroll'

const highlightBoxes = [
  {
    icon: 'bx-code-alt',
    title: 'Full Stack',
    subtitle: 'Java · Node · React',
  },
  {
    icon: 'bx-rocket',
    title: 'Fast Delivery',
    subtitle: 'Clean & scalable code',
  },
  {
    icon: 'bx-chip',
    title: 'GenAI Ready',
    subtitle: 'RAG · LLMs · Agents',
  },
  ...profile.codingStats.map((stat) => ({
    icon: stat.icon,
    title: stat.value,
    subtitle: stat.label,
  })),
]

export default function About() {
  const [ref, inView] = useInView(0.08)

  return (
    <section className={`about section ${inView ? 'is-visible' : ''}`} id="about" ref={ref}>
      <div className="section__head reveal">
        <p className="eyebrow">About Me</p>
        <h2>Know More About Me</h2>
        <p className="section__sub">
          Backend-focused software engineer delivering scalable enterprise applications.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__media reveal reveal--delay-1">
          <div className="about__code">
            <div className="about__code-header">
              <span />
              <span />
              <span />
              <em>developer.js</em>
            </div>
            <pre>
              <code>{`const developer = {
  name: "${profile.firstName}",
  skills: ["Java", "Spring Boot", "AI", "Azure"],
  passion: ∞
}`}</code>
            </pre>
          </div>

          <div className="about__mini-grid">
            {highlightBoxes.map((box) => (
              <div className="about__mini-box" key={`${box.title}-${box.subtitle}`}>
                <i className={`bx ${box.icon}`} />
                <strong>{box.title}</strong>
                <span>{box.subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__body reveal reveal--delay-2">
          <h3>
            I&apos;m {profile.name}, a <span>Software Engineer</span>
          </h3>
          <p>{profile.aboutIntro}</p>
          <p>{profile.aboutBody}</p>

          <div className="skill-bars">
            {profile.skillBars.map((skill) => (
              <div className="skill-bar" key={skill.name}>
                <div className="skill-bar__meta">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="skill-bar__track">
                  <div
                    className="skill-bar__fill"
                    style={{ width: inView ? `${skill.percent}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a href="#contact" className="btn btn--primary">
              Hire Me
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
