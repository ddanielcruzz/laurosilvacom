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
  margin: 0 auto;
  max-width: 680px;
  padding: 100px 20px 0;
  h2 {
    color: var(--foreground);
  }
  &.dark h2 {
    color: var(--background);
  }
`
