import illustration from '../images/about.jpg'
import TypeAnimated from '../components/TypeAnimated'
import '../scss/about.scss'

export default function About() {
  return (
    <div className="about">
      <div className="__image">
        {' '}
        <h2>About me</h2>
        <img src={illustration} alt=" illustration from people doing things" />
      </div>

      <div className="__texts">
        <div className="__content">
          <p className="__first-paragraph">
            My name is Amanda Carneiro. I am a junior full-stack developer and enjoy learning new trends.
            <TypeAnimated
              text=" I am developing user interfaces in JavaScript, React and backend of my projects in PHP and Laravel.
            "
              timeToComplete={1000}
            />
          </p>

          <p>
            I am open to learning new technologies and enjoy working with people
            <em> who are as passionate about all web-related as me.</em>
          </p>

          <p>I can work for clients all across the world but currently I am based in Amsterdam, Netherlands.</p>

          <p>I like dogs, scuba diver and sailing, and discover the world trough different views.</p>

          <span>Get in touch and let's do something great together</span>
        </div>
        <button>Contact me</button>
      </div>
    </div>
  )
}
