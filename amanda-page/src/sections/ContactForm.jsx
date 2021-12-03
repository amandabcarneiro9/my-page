import '../scss/contactForm.scss'
import contactImage from '../images/junior.jpg'

export default function ContactForm() {
  return (
    <div className="contact-form">
      <h3 className="__title">Let's have a talk!</h3>
      <div className="__contact-place">
        <div className="__infos">
          <img src={contactImage} alt="" />
          <p>Did you like my job ?</p>
          <p>Do you want talk about some ideas for projects ?</p>
          <span>Dont hesitate to contact me! let's make plans together! </span>
        </div>
        <form action="" className="__form">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Your name Here" required />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" placeholder="Your email Here" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" placeholder="What is the subject" required />

          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message here..."
            required
          ></textarea>
          <input type="submit" value="send message" className="__send-button" />
        </form>
      </div>
    </div>
  )
}
