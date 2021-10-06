import TypeAnimated from '../components/typeAnimated/TypeAnimated'
import Button from '../components/button/Button'
import SocialIcons from '../components/socialIcons/SocialIcons'
import FirstImage from '../images/women_generated.jpg'
import '../scss/home.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="__first-illustration">
        <img src={FirstImage} alt="black woman illustration" />
      </div>
      <div className="__presentation">
        <h1>
          Hi, <br />
          I'm <TypeAnimated text="Amanda" timeToComplete={600} />
        </h1>
        <span className="__subtitle">Junior web developer</span>
        <p className="__description">
          {' '}
          As a junior web developer, I'm on the process to improve my skills,learning how to learn efficientily,{' '}
          <TypeAnimated text="and making my code as clean and understanble as possible." timeToComplete={700} />
        </p>

        <Button text="Know me better →" />
        <SocialIcons />
      </div>
    </div>
  )
}
