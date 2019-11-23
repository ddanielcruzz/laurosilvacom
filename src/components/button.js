import React from 'react'
import styled from 'styled-components'

const Button = props => (
  <a href={props.buttonLink}>
    <Wrapper>{props.buttonText}</Wrapper>
  </a>
)

export default Button

const Wrapper = styled.div`
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
  line-height: 20px;
  font-size: 16px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  background: var(--success);
  color: var(--background);
  text-align: center;
  border-radius: 4px;
  padding: 10px 20px;
  letter-spacing: 0.4px;
  :hover {
    transform: var(--transform-small);
    background: var(--success-dark);
    box-shadow: var(--shadow-small);
  }
`
