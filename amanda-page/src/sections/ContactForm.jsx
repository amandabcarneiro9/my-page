import React, { useState } from 'react'
import '../scss/contactForm.scss'
import contactImage from '../images/junior.jpg'
import Errors from '../components/errors/Errors'
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const emptyState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [token, setToken] = useState(null)
  const [contactState, setContactState] = useState(emptyState)
  const [errors, setErrors] = useState([])
  const { name, email, subject, message } = contactState
  const [messageSent, setMessageSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function updateState({ currentTarget }) {
    setContactState({
      ...contactState,
      [currentTarget.name]: currentTarget.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setMessageSent(false)

    const errors = [
      token === null && 'Captcha is required',
      name.trim() === '' && 'Fill the name',
      subject.trim() === '' && 'Fill the subject',
      message.trim() === '' && 'Fill the message',
    ].filter(Boolean)

    setErrors(errors)

    if (errors.length > 0) return
    setLoading(true)

    const response = await fetch('https://kilfkkqwqwvneflp463pqqxml40zygwz.lambda-url.us-east-1.on.aws/', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'omit',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ ...contactState, token }),
    })
    setLoading(false)

    const result = await response.json()

    if (!result.success) {
      return setErrors(result.errors)
    }

    setMessageSent(true)

    setContactState(emptyState)
  }

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
          {loading && (
            <div className="__loading-message">
              <div className="loadingIcon">
                <div />
                <div />
                <div />
              </div>
            </div>
          )}
          {!loading && (
            <>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your name Here"
                value={name}
                onChange={updateState}
                required
              />

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
              <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_GOOGLE_CAPTCHA_TOKEN}>
                <GoogleReCaptcha onVerify={setToken} />
              </GoogleReCaptchaProvider>
              <input type="submit" value="send message" className="__send-button" />
              <Errors errors={errors} />
              {messageSent && <span className="__success-message">Thanks for your message! I'll contact you soon</span>}
            </>
          )}
        </form>
      </div>
    </div>
  )
}
