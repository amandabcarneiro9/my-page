import './errors.scss'

export default function Errors({ errors }) {
  if (errors.length === 0) return null

  return (
    <div className="errors">
      <ul>
        {errors.map((error) => (
          <li className="__error">{error}</li>
        ))}
      </ul>
    </div>
  )
}
