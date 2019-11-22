import React from 'react'
import styled from 'styled-components'

const Hero = ({ children }) => <Wrapper>{children}</Wrapper>

export default Hero

const Wrapper = styled.section`
  background: #1b2022;
  padding: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
`
