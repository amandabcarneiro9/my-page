import './skillsIcons.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function SkillsIcons() {
  return (
    <div className="container">
      <span className="__icon">
        <FontAwesomeIcon icon={['fab', 'html5']} />
      </span>
      <span className="__icon">
        <FontAwesomeIcon icon={['fab', 'css3']} />
      </span>
      <span className="__icon">
        <FontAwesomeIcon icon={['fab', 'js']} />
      </span>
      <span className="__icon">
        {' '}
        <FontAwesomeIcon icon={['fab', 'react']} />
      </span>
      <span className="__icon">
        <FontAwesomeIcon icon={['fab', 'php']} />
      </span>
      <span className="__icon">
        <FontAwesomeIcon icon={['fab', 'laravel']} />
      </span>
      <span className="__icon">
        <FontAwesomeIcon icon={['fab', 'sass']} />
      </span>
      <span className="__icon">
        <FontAwesomeIcon icon={['fas', 'database']} />
      </span>
    </div>
  )
}
