import Section from '../layout/Section'
import ProjectCard from '../ui/ProjectCard'

function Projects({ projects }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected mobile and product work."
      description="Project cards are powered by `src/data/projects.js` so they stay easy to edit."
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
