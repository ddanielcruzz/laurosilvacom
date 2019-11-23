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
  max-width: 820px;
  padding: 140px 20px 0;
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
  font-weight: bold;
  font-size: 40px;
  margin: 0 0 10px;
  line-height: 1.01em;
  @media (max-width: 780px) {
    font-size: 35px;
  }
`
const Tag = styled.p`
  margin: 0;
  font-size: 16px;
  color: var(--accents-4);
  span {
    padding-right: 10px;
  }
`
const HeaderWrapper = styled.div``
