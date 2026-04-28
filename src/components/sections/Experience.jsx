import Section from '../layout/Section'
import Card from '../ui/Card'

function Experience({ items }) {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Recent professional experience."
      description="Focused on production mobile apps, backend services, and cloud operations."
    >
      <div className="experience-list">
        {items.map((item) => (
          <Card key={item.role} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>{item.role}</h3>
                {item.company && <p className="experience-company">{item.company}</p>}
              </div>
              {item.period && <span className="experience-period">{item.period}</span>}
            </div>

            <ul className="experience-points">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Experience
