import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useActiveSection } from './hooks/useScroll'

const SECTIONS = [
  'home',
  'about',
  'experience',
  'services',
  'education',
  'projects',
  'contact',
]

export default function App() {
  const activeSection = useActiveSection(SECTIONS)

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
