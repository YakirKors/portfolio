import { useRef, useState } from 'react'

import Card from './Card'
import Tag from './Tag'
import Button from './Button'

function ProjectCard({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const mediaTrackRef = useRef(null)
  const projectImages =
    project.images?.length > 0
      ? project.images
      : project.image
        ? [{ src: project.image, alt: project.title }]
        : []
  const hasImage = projectImages.length > 0
  const hasMultipleImages = projectImages.length > 1
  const visibleLinks = Object.entries(project.links).filter(([, value]) => value)

  const scrollToImage = (index) => {
    const trackElement = mediaTrackRef.current

    if (!trackElement) {
      return
    }

    const nextSlide = trackElement.children[index]

    if (!nextSlide) {
      return
    }

    nextSlide.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
    setActiveImageIndex(index)
  }

  const handleMediaScroll = () => {
    const trackElement = mediaTrackRef.current

    if (!trackElement || trackElement.clientWidth === 0) {
      return
    }

    const nextIndex = Math.round(trackElement.scrollLeft / trackElement.clientWidth)

    if (nextIndex !== activeImageIndex) {
      setActiveImageIndex(nextIndex)
    }
  }

  return (
    <Card className="project-card">
      <div className="project-media">
        {hasImage ? (
          <>
            <div className="project-media-shell">
              <div
                ref={mediaTrackRef}
                className="project-media-track"
                onScroll={handleMediaScroll}
                aria-label={`${project.title} screenshots`}
              >
                {projectImages.map((image) => (
                  <div key={image.src} className="project-media-slide">
                    <img src={image.src} alt={image.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {hasMultipleImages && (
              <div className="project-media-navigation">
                <button
                  type="button"
                  className="project-media-control project-media-control-prev"
                  onClick={() =>
                    scrollToImage(
                      activeImageIndex === 0
                        ? projectImages.length - 1
                        : activeImageIndex - 1,
                    )
                  }
                  aria-label="Show previous project image"
                >
                  <span aria-hidden="true">‹</span>
                </button>

                <div className="project-media-dots" aria-label="Project image navigation">
                  {projectImages.map((image, index) => (
                    <button
                      key={`${image.src}-dot`}
                      type="button"
                      className={`project-media-dot ${
                        index === activeImageIndex ? 'is-active' : ''
                      }`}
                      onClick={() => scrollToImage(index)}
                      aria-label={`Show image ${index + 1}`}
                      aria-pressed={index === activeImageIndex}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="project-media-control project-media-control-next"
                  onClick={() =>
                    scrollToImage(
                      activeImageIndex === projectImages.length - 1
                        ? 0
                        : activeImageIndex + 1,
                    )
                  }
                  aria-label="Show next project image"
                >
                  <span aria-hidden="true">›</span>
                </button>
              </div>
            )}
          </>
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
