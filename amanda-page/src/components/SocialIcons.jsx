import '../components/socialIcons.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialIcons() {
  return (
    <div className="__media-links">
      <a target="_blank" href="https://www.linkedin.com/in/amandabcarneiro/">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a target="_blank" href="https://github.com/amandabcarneiro9">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=310629121520">
        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
      </a>
    </div>
  )
}
