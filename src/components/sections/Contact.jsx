import Section from '../layout/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'

const contactDetails = {
  // Update these contact details here if they change later.
  email: 'yakirkurs6@gmail.com',
  phone: '+972532403439',
  linkedin: 'https://www.linkedin.com/in/yakir-kurs?trk=contact-info',
}

const contactItems = [
  {
    label: 'Email',
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    label: 'Phone',
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, '')}`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yakir-kurs',
    href: contactDetails.linkedin,
    isExternal: true,
  },
]

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let&apos;s build something useful."
      description="This section is intentionally simple so you can swap the placeholders quickly."
    >
      <Card className="contact-card">
        <div className="contact-list">
          {contactItems.map((item) => (
            <div key={item.label} className="contact-item">
              <p className="contact-label">{item.label}</p>
              <a
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noreferrer' : undefined}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>

        <Button href={`mailto:${contactDetails.email}`}>Contact Me</Button>
      </Card>
    </Section>
  )
}

export default Contact
