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
  padding: 20px;
`

const WrapperGroup = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 50px 0px 0;

  h1 {
    color: var(--black);
    margin: 0;
  }
  h2 {
    color: var(--black);
    margin: 0;
  }
`
