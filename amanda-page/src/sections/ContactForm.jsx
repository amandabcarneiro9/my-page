import '../scss/contactForm.scss'
import { useState } from 'react'
import contactImage from '../images/junior.jpg'
import Errors from '../components/errors/Errors'

export default function ContactForm() {
  const [contactState, setContactState] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState([])
  const { name, email, subject, message } = contactState

  function updateState({ currentTarget }) {
    setContactState({ ...contactState, [currentTarget.name]: currentTarget.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    setErrors(
      [
        name.trim() === '' && 'Fill the name',
        subject.trim() === '' && 'Fill the subject',
        message.trim() === '' && 'Fill the message',
      ].filter(Boolean)
    )

    return console.log(contactState)
  }

  console.log(errors)

  return (
    <div className="contact-form">
      <a name="contact-form" />
      <h3 className="__title">Let's have a talk!</h3>
      <div className="__contact-place">
        <div className="__infos">
          <img src={contactImage} alt="" />
          <p>Did you like my job ?</p>
          <p>Do you want talk about some ideas for projects ?</p>
          <span>Dont hesitate to contact me! Let's make plans together! </span>
        </div>
        <form action="" className="__form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Your name Here" value={name} onChange={updateState} required />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your email Here"
            value={email}
            onChange={updateState}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            placeholder="What is the subject"
            value={subject}
            onChange={updateState}
            required
          />

          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message here..."
            value={message}
            onChange={updateState}
            required
          ></textarea>
          <input type="submit" value="send message" className="__send-button" />
          <Errors errors={errors} />
        </form>
      </div>
    </div>
  )
}
