import { useState } from 'react'
import HamburgerIcon from 'hamburger-react'
import { Link } from 'react-router-dom'

import './hamburger.scss'

export default function Hamburguer() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <HamburgerIcon toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="links">
          <Link className="__link">Home</Link>
          <Link className="__link">About me</Link>
          <Link className="__link">My Skills</Link>
          <Link className="__link">Work as a Junior</Link>
          <Link className="__link">Portfolio</Link>
          <Link className="__link">Contact me </Link>
        </div>
      )}
    </>
  )
}
