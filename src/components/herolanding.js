import React from 'react'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext'

const Hero = ({ children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <Wrapper>
        <WrapperGroup className={`${theme.dark ? 'dark' : 'light'}`}>
          {children}
        </WrapperGroup>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
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
    color: var(--foreground);
  }
  p {
    color: var(--accents-4);
  }
  &.dark h2 {
    color: var(--background);
  }
  &.dark p {
    color: var(--accents-4);
  }
`
