import Button from '../ui/Button'

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-eyebrow">Developer Portfolio</p>
          <h1>Full Stack Developer | Mobile &amp; Cloud Systems</h1>
          <p className="hero-description">
            I build production-ready mobile applications and scalable backend
            systems using React Native, Flutter, Node.js, and Google Cloud.
          </p>

          <div className="hero-actions">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
