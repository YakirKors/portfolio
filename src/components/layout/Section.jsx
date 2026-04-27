function Section({
  id,
  eyebrow,
  title,
  description,
  className = '',
  children,
}) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="section-heading">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {description && <p className="section-description">{description}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}

export default Section
