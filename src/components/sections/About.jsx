import Section from '../layout/Section'
import Card from '../ui/Card'

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building practical products that ship."
      description="A straightforward overview you can easily update later."
    >
      <Card className="content-card">
        <p>
          I&apos;m a full stack developer focused on mobile apps, backend
          systems, cloud infrastructure, and real-world production solutions. I
          have experience building applications from scratch, deploying them to
          app stores, and maintaining production systems serving thousands of
          users.
        </p>
      </Card>
    </Section>
  )
}

export default About
