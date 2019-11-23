import React from 'react'
import styled from 'styled-components'

const Hero = ({ children }) => (
  <Wrapper>
    <WrapperGroup>{children}</WrapperGroup>
  </Wrapper>
)

export default Hero

const Wrapper = styled.section`
  position: relative;
`

const WrapperGroup = styled.div`
  margin: 0 auto;
  max-width: 820px;
  padding: 130px 20px;
  h1 {
    font-size: 40px;
    margin: 0 0 20px;
    line-height: 1.01em;
    font-weight: 800;
  }
  p {
    margin: 0;
    line-height: 1.5em;
    text-transform: none;
    color: var(--accents-5);
    margin-top: 20px;
    max-width: 600px;
    font-size: 20px;
    font-weight: 400;
  }
  @media (max-width: 780px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 780px) {
    p {
      font-size: 20px;
    }
  }
`
