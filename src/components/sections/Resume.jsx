import resumePdf from '../../assets/resume/Yakir_Kurs_FullStack_Developer.pdf'
import Section from '../layout/Section'
import Card from '../ui/Card'

const resumeFileName = 'Yakir_Kurs_FullStack_Developer.pdf'

const resumeHighlights = [
  'Full stack delivery across mobile apps, backend services, and cloud infrastructure.',
  'Hands-on experience shipping apps, integrating production APIs, and maintaining real users.',
  'Clear technical ownership from product requirements through deployment and iteration.',
]

function Resume() {
  const handleResumeDownload = () => {
    const shouldDownload = window.confirm(
      'Download Yakir Kurs Full Stack Developer resume as a PDF?',
    )

    if (!shouldDownload) {
      return
    }

    const link = document.createElement('a')
    link.href = resumePdf
    link.download = resumeFileName
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="The short version hiring teams can keep."
      description="A focused PDF that connects the projects on this site with the skills, experience, and ownership behind them."
    >
      <Card className="resume-card">
        <div className="resume-copy">
          <h3>For recruiters, founders, and engineering teams</h3>
          <p>
            If the portfolio gives you the product context, the resume gives
            you the scannable snapshot: stack, experience, delivery history,
            and the kind of roles where I can contribute quickly.
          </p>

          <ul className="resume-highlights">
            {resumeHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="resume-download-panel">
          <button
            type="button"
            className="resume-file-card"
            aria-label="Download Yakir Kurs resume as a PDF"
            onClick={handleResumeDownload}
          >
            <span className="resume-file-type">PDF</span>
            <span className="resume-file-details">
              <strong>Yakir Kurs - Full Stack Developer</strong>
              <small>Resume PDF</small>
            </span>
            <span className="resume-file-action">Download</span>
          </button>

          <a
            className="resume-preview-link"
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
          >
            Preview the PDF in a new tab
          </a>
        </div>
      </Card>
    </Section>
  )
}

export default Resume
