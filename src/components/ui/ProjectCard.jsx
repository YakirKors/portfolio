import Card from './Card'
import Tag from './Tag'
import Button from './Button'

function ProjectCard({ project }) {
  const hasImage = Boolean(project.image)
  const visibleLinks = Object.entries(project.links).filter(([, value]) => value)

  return (
    <Card className="project-card">
      <div className="project-media">
        {hasImage ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="image-placeholder project-placeholder">
            <span>{project.placeholderLabel}</span>
            <small>{project.imagePath}</small>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="tag-list">
          {project.techStack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        {visibleLinks.length > 0 && (
          <div className="project-links">
            {visibleLinks.map(([label, value]) => (
              <Button
                key={label}
                href={value}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

export default ProjectCard
