import './skillsIcons.scss'
import nextJsImage from '../../images/next-js.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function SkillsIcons() {
  return (
    <div className="container">
      <IconCard description="html5">
        <FontAwesomeIcon icon={['fab', 'html5']} className="__icon" />
      </IconCard>
      <IconCard description="css3">
        <FontAwesomeIcon icon={['fab', 'css3']} className="__icon" />
      </IconCard>
      <IconCard description="javascript">
        <FontAwesomeIcon icon={['fab', 'js']} className="__icon" />
      </IconCard>
      <IconCard description="react">
        <FontAwesomeIcon icon={['fab', 'react']} className="__icon" />
      </IconCard>
      <IconCard description="PHP">
        <FontAwesomeIcon icon={['fab', 'php']} className="__icon" />
      </IconCard>

      <IconCard description="laravel">
        <FontAwesomeIcon icon={['fab', 'laravel']} className="__icon" />
      </IconCard>

      <IconCard description="sass">
        <FontAwesomeIcon icon={['fab', 'sass']} className="__icon" />
      </IconCard>

      <IconCard description="database">
        <FontAwesomeIcon icon={['fas', 'database']} className="__icon" />
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
