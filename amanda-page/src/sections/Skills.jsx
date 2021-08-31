import TypeAnimated from '../components/TypeAnimated'
import SkillsIcons from '../components/SkillsIcons'
import illustration from '../images/skills.png'
import SocialIcons from '../components/SocialIcons'

import '../scss/skills.scss'

export default function Skills() {
  return (
    <div className="skills">
      <div className="__second-illustration">
        <img src={illustration} alt="illustration of people working on computer" />
      </div>

      <div className="__skills-description">
        <div className="__title">
          <h2>
            What are the skills that <TypeAnimated text="I can offer to the company" timeToComplete={600} />
          </h2>
        </div>

        <div className="__skills-tags">
          <SkillsIcons />
        </div>
      </div>
    </div>
  )
}
