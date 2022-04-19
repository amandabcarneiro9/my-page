import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

export default function Button({ text, href, className, ...rest }) {
  return (
    <Link to={href} className={`button ${className}`} {...rest}>
      {text}
    </Link>
  )
}
