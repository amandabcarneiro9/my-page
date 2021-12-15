import TypeAnimated from '../components/typeAnimated/TypeAnimated'
import SkillsIcons from '../components/skillsIcons/SkillsIcons'
import illustration from '../images/skills.png'

import '../scss/skills.scss'

export default function Skills() {
  return (
    <a name="skills">
      <div className="skills">
        <img className="__second-illustration" src={illustration} alt="illustration of people working on computer" />

        <div className="__skills-description">
          <div className="__title">
            <h2>
              What are the skills that <TypeAnimated text="I can offer to the company" timeToComplete={600} />
            </h2>
          </div>

          <SkillsIcons />
        </div>
      </div>
    </a>
  )
}
