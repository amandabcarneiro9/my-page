import React from 'react'
import './socialIcons.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcons() {
  return (
    <div className="__media-links">
      <a target="_blank" href="https://www.linkedin.com/in/amandabcarneiro/" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a target="_blank" href="https://github.com/amandabcarneiro9" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=310629121520" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
      </a>
    </div>
  )
}
