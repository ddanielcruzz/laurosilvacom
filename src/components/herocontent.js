import React from 'react'
import styled from 'styled-components'

const Hero = ({ children }) => (
  <Wrapper>
    <WrapperGroup>{children}</WrapperGroup>
  </Wrapper>
)

export default Hero

const Wrapper = styled.section`
  background: #1b2022;
  position: relative;
`

const WrapperGroup = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 130px 20px;
  text-align: center;
  h1 {
    font-size: 35px;
    margin: 0;
  }
  @media (max-width: 780px) {
    h1 {
      font-size: 25px;
    }
  }
  p {
    color: #929ea3;
    font-size: 25px;
    line-height: 1.4;
  }
`
