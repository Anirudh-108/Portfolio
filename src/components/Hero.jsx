import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'
import { useInView } from '../hooks/useScroll'
import { asset } from '../utils/asset'

function RotatingWords({ words }) {
  const containerRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const wordEls = Array.from(root.querySelectorAll('.word'))
    wordEls.forEach((word, index) => {
      const letters = words[index].split('')
      word.textContent = ''
      letters.forEach((letter) => {
        const span = document.createElement('span')
        span.textContent = letter === ' ' ? '\u00a0' : letter
        span.className = 'letter'
        word.append(span)
      })
    })

    let currentWordIndex = 0
    wordEls[0].style.opacity = '1'
    setReady(true)

    const changeText = () => {
      const currentWord = wordEls[currentWordIndex]
      const nextIndex = currentWordIndex === wordEls.length - 1 ? 0 : currentWordIndex + 1
      const nextWord = wordEls[nextIndex]

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = 'letter out'
        }, i * 80)
      })

      nextWord.style.opacity = '1'
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind'
        setTimeout(() => {
          letter.className = 'letter in'
        }, 340 + i * 80)
      })

      currentWordIndex = nextIndex
    }

    const interval = setInterval(changeText, 3000)
    return () => clearInterval(interval)
  }, [words])

  return (
    <div className={`change-text ${ready ? 'is-ready' : ''}`} ref={containerRef}>
      <h3>I&apos;m a&nbsp;</h3>
      <h3 className="change-text__words">
        {words.map((word) => (
          <span className="word" key={word}>
            {word}
          </span>
        ))}
      </h3>
    </div>
  )
}

export default function Hero() {
  const [ref, inView] = useInView()

  return (
    <section className={`hero section ${inView ? 'is-visible' : ''}`} id="home" ref={ref}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__content reveal">
          <p className="hero__badge">
            <span className="hero__badge-dot" />
            {profile.availability}
          </p>

          <p className="hero__greeting">Hey there! I&apos;m</p>
          <h1 className="hero__title">
            <span>{profile.name}</span>
          </h1>

          <RotatingWords words={profile.roles} />

          <p className="hero__lead">{profile.heroTagline}</p>

          <div className="hero__tags">
            {profile.techTags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&apos;s Talk
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              Resume
            </a>
          </div>

          <div className="hero__social">
            <span>Follow me:</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bx bxl-linkedin" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bx bxl-github" />
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="bx bxl-twitter" />
            </a>
            {/* <a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="bx bxl-facebook" />
            </a> */}
          </div>
        </div>

        <div className="hero__visual reveal reveal--delay-1">
          <div className="glowing-circle">
            <span />
            <span />
            <div className="glowing-circle__image">
              <img src={asset('img/profile-image.png')} alt={profile.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
