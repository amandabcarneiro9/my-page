import React, { useState } from 'react'
import '../scss/contactForm.scss'
import contactImage from '../images/junior.jpg'
import Errors from '../components/errors/Errors'
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function ContactForm() {
  const [token, setToken] = useState(null)
  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState([])
  const { name, email, subject, message } = contactState

  function updateState({ currentTarget }) {
    setContactState({
      ...contactState,
      [currentTarget.name]: currentTarget.value,
    })
  }

  async function handleSubmit(event) {
    alert(1)
    event.preventDefault()

    const errors = [
      token === null && 'Captcha is required',
      name.trim() === '' && 'Fill the name',
      subject.trim() === '' && 'Fill the subject',
      message.trim() === '' && 'Fill the message',
    ].filter(Boolean)

    setErrors(errors)

    if (errors.length > 0) return

    const response = await fetch('https://kilfkkqwqwvneflp463pqqxml40zygwz.lambda-url.us-east-1.on.aws/', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ ...contactState, token }),
    })

    const result = await response.text()

    console.log(result)
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
          <p>Do you want to talk about some ideas for projects ?</p>
          <span>Don't hesitate to contact me! Let's make plans together! </span>
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
          <GoogleReCaptchaProvider reCaptchaKey="6LeO3awfAAAAAAALbvuwAJIMu3jFtMm_K4PB8cfP" useEnterprise>
            <GoogleReCaptcha onVerify={setToken} />
          </GoogleReCaptchaProvider>
          <input type="submit" value="send message" className="__send-button" />
          <Errors errors={errors} />
        </form>
      </div>
    </div>
  )
}
