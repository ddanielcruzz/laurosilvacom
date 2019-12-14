import React from 'react'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext'

const Content = ({ children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <ContentWrapper>
        <Tutorial className={`${theme.dark ? 'dark' : 'light'}`}>
          {children}
        </Tutorial>
      </ContentWrapper>
    )}
  </ThemeContext.Consumer>
)
export default Content

const ContentWrapper = styled.div`
  margin: auto;
  max-width: 680px;
  padding: 20px;
`

const Tutorial = styled.div`
  font-size: 20px;
  padding-top: 0;
  p {
    line-height: 32px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    color: var(--foreground);
  }
  p,
  ul,
  li {
    color: var(--accents-5);
  }
  &.dark {
    p,
    ul,
    li {
      color: var(--accents-4);
    }
  }
  &.dark {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      color: var(--background);
    }
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-left: 20px;
  }
`
