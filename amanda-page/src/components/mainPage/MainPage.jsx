import { useEffect } from 'react'

import Home from '../../sections/Home'
import Skills from '../../sections/Skills'
import About from '../../sections/About'
import Portfolio from '../portfolio/Portfolio'
import ContactForm from '../../sections/ContactForm'

export default function MainPage({ location }) {
  console.log(location)
  const { pathname } = location
  useEffect(() => {
    setTimeout(() => {
      const link = pathname.slice(1)
      if (!link) return

      const element = document.querySelector(`[name="${link}"]`)
      element && element.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }, [pathname])

  return (
    <>
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <ContactForm />
    </>
  )
}
