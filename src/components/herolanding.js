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
  margin: auto;
  max-width: 680px;
  padding: 130px 20px;
  h2 {
    line-height: 1;
    margin: 10px 0;
  }

  h2 {
    color: var(--background);
  }
  p {
    color: var(--accents-4);
  }
`
