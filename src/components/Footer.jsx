import { profile } from '../data/content'
import { useInView } from '../hooks/useScroll'
import { asset } from '../utils/asset'

export default function Footer() {
  const [ref, inView] = useInView(0.05)
  const year = new Date().getFullYear()

  return (
    <footer className={`footer section ${inView ? 'is-visible' : ''}`} ref={ref}>
      <div className="footer__grid reveal">
        <div className="footer__brand">
          <a href="#home" className="navbar__logo">
            <img src={asset('img/logo.png')} alt="AS logo" className="navbar__logo-img" />
            <span className="navbar__brand">
              Anirudh
              <small>Developer & Engineer</small>
            </span>
          </a>
          <p>
            Creating exceptional digital experiences through innovative web development and
            thoughtful engineering.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>Backend Engineering</li>
            <li>Microservices</li>
            <li>Cloud & DevOps</li>
            <li>AI & GenAI</li>
            <li>Frontend Development</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom reveal reveal--delay-1">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="footer__top" aria-label="Back to top">
          <i className="bx bx-up-arrow-alt" />
        </a>
      </div>
    </footer>
  )
}
