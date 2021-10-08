import './skillsIcons.scss'
import nextJsImage from '../../images/next-js.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function SkillsIcons() {
  return (
    <div className="container">
      <IconCard description="html5">
        <FontAwesomeIcon icon={['fab', 'html5']} />
      </IconCard>
      <IconCard description="css3">
        <FontAwesomeIcon icon={['fab', 'css3']} />
      </IconCard>
      <IconCard description="javascript">
        <FontAwesomeIcon icon={['fab', 'js']} />
      </IconCard>
      <IconCard description="react">
        <FontAwesomeIcon icon={['fab', 'react']} />
      </IconCard>
      <IconCard description="PHP">
        <FontAwesomeIcon icon={['fab', 'php']} />
      </IconCard>

      <IconCard description="laravel">
        <FontAwesomeIcon icon={['fab', 'laravel']} />
      </IconCard>

      <IconCard description="sass">
        <FontAwesomeIcon icon={['fab', 'sass']} />
      </IconCard>

      <IconCard description="database">
        <FontAwesomeIcon icon={['fas', 'database']} />
        <span className="__name">database</span>
      </IconCard>

      <IconCard description="nextJS">
        <img src={nextJsImage} alt=" next-js logo" className="__next-logo" />
      </IconCard>
    </div>
  )
}

function IconCard({ children, description }) {
  return (
    <div className="__card">
      <div className="__flip">
        <div className="__face">{children}</div>
        <div className={['__face', '--back'].join(' ')}>{description}</div>
      </div>
    </div>
  )
}
