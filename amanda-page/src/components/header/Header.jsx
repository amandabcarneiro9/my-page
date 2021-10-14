import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

import './header.scss'

export default function Header() {
  const [isOpen, setOpen] = useState(false)

  function linkClick(event) {
    const link = event.currentTarget.href.split('/').pop()
    const element = document.querySelector(`[name=${link}]`)
    element && element.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }
  return (
    <header className={`header ${isOpen ? '--menu-opened' : ''}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="__nav-links">
        <Link to="/" className="__link" onClick={linkClick}>
          Home
        </Link>

        <Link to="/skills" className="__link" onClick={linkClick}>
          My Skills
        </Link>
        <Link to="/about" className="__link" onClick={linkClick}>
          About me
        </Link>
        <Link className="__link" onClick={linkClick}>
          Work as a Junior
        </Link>
        <Link className="__link" onClick={linkClick}>
          Portfolio
        </Link>
        <Link className="__link" onClick={linkClick}>
          Contact me{' '}
        </Link>
      </div>
    </header>
  )
}
