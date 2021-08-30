import TypeAnimated from '../components/TypeAnimated'
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
          Hi, I'm <TypeAnimated text="Amanda" />
        </h1>
        <span className="__subtitle">Junior web developer</span>
        <p>
          {' '}
          As a junior web developer, I'm on the process to improve my skills,learning how to learn efficientily, and
          making my code as clean and understanble as possible.
        </p>
      </div>
      <button className="__know-me-button">Know me better</button>
    </div>
  )
}
