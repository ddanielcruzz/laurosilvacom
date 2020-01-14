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
  margin: auto;
  max-width: 720px;
  padding: 50px 0px 0;
  h2 {
    line-height: 1;
    margin: 10px 0;
  }

  h2 {
    color: var(--black);
  }
  p {
    color: var(--accent-200);
  }
`
