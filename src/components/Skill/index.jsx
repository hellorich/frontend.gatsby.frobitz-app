import React from "react"
import PropTypes from "prop-types"
import { StyledSkill } from "./styled"

export const Skill = ({ skill: { title, level, link } }) => {
  const skillLevel = `skill--${level}`
  
  return (
    <StyledSkill className="skill-list--item">
      <a 
        className={["skill", skillLevel].join(" ")}
        href={link}
        rel="external"
      >
      {title}
      </a>
    </StyledSkill>
  )
}

Skill.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    level: PropTypes.oneOf(["basic", "advanced"]),
  })
}