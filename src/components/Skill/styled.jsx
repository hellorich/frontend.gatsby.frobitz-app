import styled from "styled-components"

export const StyledSkill = styled.li`
  list-style: none;

  .skill {
    color: #FFF;
    display: inline-block;
    margin: 0.25rem;
    min-width: 5rem;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    
    &.skill--advanced {
      background-color: rgb(33, 150, 243);
      
      &:active, &:focus, &:hover, &:link, &:visited {
        background-color: rgb(33, 150, 243);
      }
    }
    
    &.skill--basic {
      background-color: rgb(33, 201, 243);
      
      &:active, &:focus, &:hover, &:link, &:visited {
        background-color: rgb(33, 201, 243);
      }
    }
  }
`