import plurisGif from '../../images/pluris-certo.gif'
import dasGif from '../../images/das-travel.gif'
import camillaGif from '../../images/camilla-chagas.gif'
import './portfolio.scss'
import Button from '../button/Button'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="__title">This is some of projects that I have done</h2>
      <div className="__projects">
        <Project
          projectTitle="Pluris Engenharia"
          description="Front-end Application made with Nextjs"
          gifName={plurisGif}
          href="/portfolio/pluris-project"
        />

        <Project
          projectTitle="DAS travel App"
          description="Single Page Application made  with PHP/Laravel and React.js"
          gifName={dasGif}
        />

        <Project
          projectTitle="Camilla Chagas Interiores"
          description="Rebuild a website from wix to a React.Js Single Page Application"
          gifName={camillaGif}
        />
      </div>
    </div>
  )
}

function Project({ projectTitle, description, gifName, href }) {
  return (
    <div className="__project">
      <div className="__infos">
        <h3 className="__project-title">{projectTitle}</h3>
        <span className="__description"> {description}</span>
      </div>
      <Button text="Discover More" href={href} />
      <div className="__project-gif">
        <img src={gifName} alt="gif from website" />
      </div>
    </div>
  )
}
