import { useState, useEffect } from 'react'
import './TypeAnimated.scss'

export default function TypeAnimated({ text }) {
  const [displayingText, setDisplayingText] = useState('')

  useEffect(() => {
    const nextInterval = displayingText === text ? 2000 : 100
    const typingTimeout = setTimeout(() => {
      if (displayingText.length < text.length) {
        setDisplayingText(text.slice(0, displayingText.length + 1))
      } else {
        setDisplayingText('')
      }
    }, nextInterval)

    return () => clearTimeout(typingTimeout)
  }, [text, displayingText])

  return <span className="type-animated">{displayingText}</span>
}
