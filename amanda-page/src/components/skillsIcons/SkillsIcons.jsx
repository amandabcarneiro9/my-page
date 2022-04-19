import React from 'react'
import './skillsIcons.scss'
import nextJsImage from '../../images/next-js.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillsIcons() {
  return (
    <div className="container">
      <IconCard title="HTML" descriptionList={['Forms', 'Semantics', 'SEO']}>
        <FontAwesomeIcon icon={['fab', 'html5']} className="__icon" />
      </IconCard>
      <IconCard title="Css" descriptionList={['BEM', 'Flexbox', 'Grid', 'Responsive', 'basic animations']}>
        <FontAwesomeIcon icon={['fab', 'css3']} className="__icon" />
      </IconCard>
      <IconCard title="Javascript" descriptionList={['DOM manipulation', 'fetching', 'vanilla Javascript']}>
        <FontAwesomeIcon icon={['fab', 'js']} className="__icon" />
      </IconCard>
      <IconCard
        title="React"
        descriptionList={['Functional components', 'hooks', 'context', 'React router', 'Basic redux', 'Basic Webpack']}
      >
        <FontAwesomeIcon icon={['fab', 'react']} className="__icon" />
      </IconCard>
      <IconCard title="PHP" descriptionList={['Classes', 'DBO', 'Basic Features']}>
        <FontAwesomeIcon icon={['fab', 'php']} className="__icon" />
      </IconCard>

      <IconCard
        title="Laravel"
        descriptionList={[
          'Sending emails',
          'Authentication',
          'Authorization',
          'Eloquent ORM',
          'API creation',
          'Server-side rendering',
        ]}
      >
        <FontAwesomeIcon icon={['fab', 'laravel']} className="__icon" />
      </IconCard>

      <IconCard title="Sass" descriptionList={['Variables', 'BEM', 'Responsive Design', 'Color Manipulation', 'Mixin']}>
        <FontAwesomeIcon icon={['fab', 'sass']} className="__icon" />
      </IconCard>

      <IconCard title="Database" descriptionList={['MySql', 'Relationships', 'Migrations', 'REST']}>
        <FontAwesomeIcon icon={['fas', 'database']} className="__icon" />
      </IconCard>

      <IconCard
        title="NextJS"
        descriptionList={['Routing', 'Functional Components', 'Basic Features', 'Introduction to Testings']}
      >
        <img src={nextJsImage} alt=" next-js logo" className="__next-logo" />
      </IconCard>

      <IconCard title="GIT" descriptionList={['Branching', 'Code Reviews', 'Forks', 'Complic Resolution']}>
        <FontAwesomeIcon icon={['fab', 'git-square']} className="__icon" />
      </IconCard>
    </div>
  )
}

function IconCard({ children, descriptionList, title }) {
  return (
    <div className="__card">
      <div className="__flip">
        <div className="__face">{children}</div>
        <div className={['__face', '--back'].join(' ')}>
          <h3>{title}</h3>
          <div className="__descriptions">
            <ul>
              {descriptionList && descriptionList.map((description, index) => <li key={index}>{description}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
