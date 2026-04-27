import Section from '../layout/Section'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

function Skills({ groups }) {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools and platforms I work with."
      description="Grouped into the main areas I use in production work."
    >
      <div className="skills-grid">
        {groups.map((group) => (
          <Card key={group.title} className="skill-card">
            <h3>{group.title}</h3>

            <div className="tag-list">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Skills
