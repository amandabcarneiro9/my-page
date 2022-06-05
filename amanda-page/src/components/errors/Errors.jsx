import React from 'react'
import './errors.scss'

export default function Errors({ errors }) {
  if (errors.length === 0) return null

  return (
    <div className="errors">
      Sorry, but some errors happened:
      <ul>
        {errors.map((error, index) => (
          <li className="__error" key={index}>
            {error}
          </li>
        ))}
      </ul>
    </div>
  )
}
