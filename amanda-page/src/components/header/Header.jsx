import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import AmandaLogo from '../../images/logo_size.jpg'

import './header.scss'

export default function Header() {
  const [isOpen, setOpen] = useState(false)

  function linkClick(event) {
    const link = event.currentTarget.href.split('/').pop()
    const element = document.querySelector(`[name=${link}]`)
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }
  return (
    <header className={`header ${isOpen ? '--menu-opened' : ''}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="__nav-links">
        <div className="__amanda-logo">
          <Link to="/" className="__logo">
            <img src={AmandaLogo} alt="Amanda's logo" />
          </Link>
        </div>
        <div className="__links">
          <Link to="/skills" className="__link" onClick={linkClick}>
            Skills
          </Link>
          <Link to="/about" className="__link" onClick={linkClick}>
            About
          </Link>

          <Link to="/portfolio" className="__link" onClick={linkClick}>
            Work
          </Link>
          <Link to="/contact-form" className="__link" onClick={linkClick}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
