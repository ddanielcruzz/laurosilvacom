import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Header = props => (
  <HeaderMain>
    <Icon>
      <Image fluid={props.icon} />
    </Icon>
    <HeaderWrapper>
      <Title>{props.title}</Title>
      <Tag>
        <span>{props.tag}</span>
        <span>{props.time}</span>
      </Tag>
    </HeaderWrapper>
  </HeaderMain>
)

export default Header

const HeaderMain = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 100px 1fr;
  max-width: 780px;
  padding: 80px 20px;
  grid-gap: 30px;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`

const Icon = styled.div`
  width: 100px;
  margin: auto;
  margin-bottom: 25px;
  @media (max-width: 780px) {
    margin: 0;
    width: 80px;
  }
`
const Title = styled.h1`
  margin: 0;
  color: rgba(255, 255, 255);
  font-weight: bold;
  font-size: 35px;
  margin: 0 0 10px;
  @media (max-width: 780px) {
    font-size: 25px;
  }
`
const Tag = styled.p`
  margin: 0;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  a {
    color: #929ea3;
  }

  span {
    padding-right: 15px;
    color: #929ea3;
  }
`
const HeaderWrapper = styled.div``
