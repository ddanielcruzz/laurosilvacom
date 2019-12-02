import React from 'react'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext'

const Content = ({ children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <ContentWrapper>
        <Article className={`${theme.dark ? 'dark' : 'light'}`}>
          {children}
        </Article>
      </ContentWrapper>
    )}
  </ThemeContext.Consumer>
)
export default Content

const ContentWrapper = styled.div`
  margin: auto;
  max-width: 780px;
  padding: 20px;
`

const Article = styled.div`
  font-size: 20px;
  line-height: 1.7;
  padding-top: 0;
  img {
    border-radius: 4px;
  }
  p {
    color: red;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li {
    color: red;
  }
`
