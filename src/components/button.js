import React from 'react'
import styled from 'styled-components'

const Button = props => (
  <a href={props.buttonLink} target="_blank" rel="noreferrer noopener">
    <Wrapper>
      {props.buttonText} <span>{props.buttonIcon}</span>
    </Wrapper>
  </a>
)

export default Button

const Wrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  line-height: 20px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  background: var(--success);
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 0.2rem;
  padding: 10px 20px;
  letter-spacing: 0.4px;
  display: inline-block;
  border: 1px solid var(--success);
  box-shadow: var(--shadow-success);
  transition: transform 160ms;
  :hover {
    background: none;
    color: var(--success);
    box-shadow: none;
  }
  :hover svg {
    stroke: var(--success);
  }
  span {
    position: relative;
    left: 10px;
    top: 3px;
    margin-left: 20px;
  }
`
