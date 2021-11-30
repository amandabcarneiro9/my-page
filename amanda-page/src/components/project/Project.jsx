import './project.scss'

export default function ProjectType({ projectName, children, image }) {
  return (
    <div className="project">
      <h2 className="__project-title">{projectName}</h2>

      <div className="__content">{children}</div>
    </div>
  )
}

function ProjectSection({ children, metadataElement }) {
  return (
    <section className="project-section">
      {metadataElement}
      <h3 className="__title">Project Overview</h3>
      <div className="__texts">{children}</div>
    </section>
  )
}
export function ProjectSectionImage({ children, image }) {
  const metadata = <img src={image} alt="" className="__metadata" />
  return <ProjectSection metadataElement={metadata}>{children}</ProjectSection>
}

export function ProjectSectionOverview({
  roleDescriptions,
  methodsDescription,
  durationDescription,
  href2,
  href,
  status,
  nextSteps,
  goal,
}) {
  return (
    <div className="project-section-overview">
      <h3 className="__title">More details</h3>
      <div className="__overview-information-card">
        <div className="__overview-information">
          <h3>Role</h3>
          <span> {roleDescriptions}</span>
        </div>
        <div className="__overview-information">
          <h3>Methods and Technologies</h3>
          <span> {methodsDescription}</span>
        </div>
        <div className="__overview-information">
          <h3>Duration</h3>
          <span> {durationDescription}</span>
        </div>
        <div className="__overview-information">
          <h3>Status</h3>
          <span> {status}</span>
        </div>

        <div className="__overview-information">
          <h3>Next Steps</h3>
          <span> {nextSteps}</span>
        </div>

        <div className="__overview-information">
          <h3>Goal</h3>
          <span> {goal}</span>
        </div>

        <div className="__overview-information __links">
          <h3>See more about the code here:</h3>
          <a href={href} target="_blank" rel="noreferrer">
            Github repository{' '}
          </a>
          <a href={href2}>Link site Heroku</a>
        </div>
      </div>
    </div>
  )
}
