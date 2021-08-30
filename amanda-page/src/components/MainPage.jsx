import { useEffect } from 'react'

import Home from '../sections/Home'
// import About from './About'
// import Projects from './Projects'
// import Services from './Services'
// import Instagram from './Instagram'
// import Contact from './Contact'

export default function MainPage({ location }) {
  //   const { pathname } = location
  //   useEffect(() => {
  //     const route = pathname.slice(1)
  //     if (!route) return

  //     const element = document.querySelector(`[data-section-name=${route}]`)
  //     console.log(route, element)
  //     element && element.scrollIntoView({ behavior: 'smooth' })
  //   }, [pathname])

  return (
    <>
      <Home />
    </>
  )
}
