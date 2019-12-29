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
  max-width: 780px;
  padding: 100px 20px 0;
  text-align: center;

  h1 {
    color: var(--background);
  }
  h2 {
    color: var(--background);
  }
`
