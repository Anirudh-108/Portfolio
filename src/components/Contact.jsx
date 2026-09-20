import { useState } from 'react'
import { profile } from '../data/content'
import { useInView } from '../hooks/useScroll'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio inquiry'
    )}&body=${body}`
    setSent(true)
    setForm(initial)
  }

  return (
    <section className={`contact section ${inView ? 'is-visible' : ''}`} id="contact" ref={ref}>
      <div className="section__head reveal">
        <p className="eyebrow">Get In Touch</p>
        <h2>Let&apos;s Work Together</h2>
        <p className="section__sub">
          Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__info reveal reveal--delay-1">
          <h3>Let&apos;s talk about your project</h3>
          <p>
            I&apos;m always interested in hearing about new projects and opportunities. Whether you
            have a question or just want to say hi, feel free to reach out!
          </p>

          <ul className="contact__list">
            <li>
              <i className="bx bx-envelope" />
              <div>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </li>
            <li>
              <i className="bx bx-phone" />
              <div>
                <span>Phone</span>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
            </li>
            <li>
              <i className="bx bx-map" />
              <div>
                <span>Location</span>
                <p>{profile.location}</p>
              </div>
            </li>
            <li>
              <i className="bx bxl-linkedin" />
              <div>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedinLabel}
                </a>
              </div>
            </li>
          </ul>

          <div className="contact__social">
            <span>Follow me on social media</span>
            <div>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bx bxl-linkedin" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bx bxl-github" />
              </a>
              <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="bx bxl-twitter" />
              </a>
            </div>
          </div>
        </div>

        <form className="contact__form reveal reveal--delay-2" onSubmit={onSubmit}>
          <div className="contact__row">
            <label>
              <span className="sr-only">Your Name</span>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>
            <label>
              <span className="sr-only">Your Email</span>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <label>
            <span className="sr-only">Subject</span>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={onChange}
            />
          </label>
          <label>
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={form.message}
              onChange={onChange}
              required
            />
          </label>
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
          {sent && <p className="contact__note">Opening your email client…</p>}
        </form>
      </div>
    </section>
  )
}
