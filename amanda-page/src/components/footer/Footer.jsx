import SocialIcons from '../socialIcons/SocialIcons'
import './footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="__icons">
        <SocialIcons />
      </div>
      <span className="__call-action"> Let's Conect </span>
      <span className="__informations"> amandabcarneiro9@gmail.com | Amsterdam, The Netherlands</span>
      <span className="__made-by">Design and Code by Amanda Carneiro — © 2020 — All Rights Reserved </span>
    </div>
  )
}
