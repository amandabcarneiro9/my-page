export default function ProjectType({
  projectName,
  projectGif,
  projectGif2,
  gifAlt,
  descriptionTitle,
  description1,
  description2,
  description3,
}) {
  return (
    <div className="project">
      <h2 className="__projectName">{projectName}</h2>

      <div className="__project-description">
        <div className="__infos">
          <div className="__project-gif">
            <img src={projectGif} alt={gifAlt} />
          </div>
          <div className="__descriptions">
            <h3 className="__title">{descriptionTitle}</h3>
            <div className="__description-text">
              <span>{description1}</span>
              <span>{description2}</span>
            </div>
            <div className="__code-explanation">
              <span>{description3}</span>
              <div className="__project-gif2">
                <img src={projectGif2} alt={gifAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
