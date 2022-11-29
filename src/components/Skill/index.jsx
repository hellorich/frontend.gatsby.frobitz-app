import React from 'react'
import PropTypes from 'prop-types'
import './skill.css'

export default function Skill ({ skill: { title, level, link } }) {
  const skillLevel = `skill--${level}`
  return (
    <li className="skill-list--item">
      <a 
        className={['skill', skillLevel].join(' ')}
        href="{link}"
        rel="external"
      >
      {title}
      </a>
    </li>
  )
}

Skill.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    level: PropTypes.oneOf(['basic', 'advanced']),
  })
}