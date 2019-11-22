import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = props => (
  <Link to={props.buttonLink}>
    <Wrapper>
      <span role="img" aria-label="box">
        {props.buttonText}
      </span>
    </Wrapper>
  </Link>
)

export default Button

const Wrapper = styled.div`
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  position: relative;
  margin-bottom: 40px;
  margin-top: 30px;
  line-height: 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  background: #1b89da;
  text-align: center;
  border-radius: 6px;
  padding: 10px 20px;
  padding-bottom: 12px;
  box-shadow: inset 0 -0.2em rgba(0, 0, 0, 0.4);
  :hover {
    transform: translateY(-2px);
    color: white;
    background: #1b89da;
  }
`
