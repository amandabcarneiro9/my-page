import './project.scss'

export default function ProjectType({
  projectName,
  children,
  // projectGif,
  // projectGif2,
  // gifAlt,
  // descriptionTitle,
  // description1,
  // description2,
  // description3,
}) {
  return (
    <div className="project">
      <h2 className="__projectName">{projectName}</h2>

      <div className="__content">{children}</div>
    </div>
  )
}

export function ProjectSection({ children, image }) {
  return (
    <section className="project-section">
      <div>{children}</div>
      <img src={image} alt="" />
    </section>
  )
}
