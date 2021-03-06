import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Header = props => (
  <HeaderMainWrapper>
    <HeaderMain>
      <Icon>
        <Image fadeIn="false" loading="eager" fluid={props.icon} />
      </Icon>
      <HeaderWrapper>
        <Title>{props.title}</Title>
        <Tag>
          <span>{props.tag}</span>
          <span>{props.time}</span>
        </Tag>
      </HeaderWrapper>
    </HeaderMain>
  </HeaderMainWrapper>
)

export default Header

const HeaderMainWrapper = styled.div`
  padding: 20px;
`

const HeaderMain = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 70px 1fr;
  max-width: 720px;
  padding: 50px 0px 0;
  grid-gap: 40px;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`

const Icon = styled.div`
  width: 70px;
  margin: auto;
  margin-bottom: 25px;
  @media (max-width: 780px) {
    margin: 0;
    width: 60px;
  }
`
const Title = styled.h2`
  margin: 0 0 10px;
  line-height: 1.01em;
  font-size: 2rem;
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`
const Tag = styled.p`
  margin: 0;
  font-size: 1rem;
  color: var(--accent-200);
  font-weight: 500;
  span {
    padding-right: 10px;
  }
`
const HeaderWrapper = styled.div`
  h2 {
    color: var(--black);
  }
`
