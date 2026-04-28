import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import { skills } from './data/skills'
import { projects } from './data/projects'
import { experience } from './data/experience'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="app-shell">
      <Header links={navigationLinks} />

      <main>
        <Hero />
        <About />
        <Skills groups={skills} />
        <Projects projects={projects} />
        <Experience items={experience} />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
