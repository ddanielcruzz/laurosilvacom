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
  color: var(--background);
  text-align: center;
  border-radius: 4px;
  padding: 10px 20px;
  letter-spacing: 0.4px;
  display: inline-block;
  border: 1px solid var(--success);
  :hover {
    background: none;
    color: var(--success);
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
