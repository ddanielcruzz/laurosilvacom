import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ThemeContext from '../../context/ThemeContext'

const Content = props => (
  <ThemeContext.Consumer>
    {theme => (
      <Tutorial className={`${theme.dark ? 'dark' : 'light'}`}>
        <MDXRenderer>{props.tutorial}</MDXRenderer>
      </Tutorial>
    )}
  </ThemeContext.Consumer>
)
export default Content

const Tutorial = styled.div`
  font-size: 20px;
  padding-top: 0;
  p {
    line-height: 32px;
  }
  .gatsby-resp-image-wrapper a {
    border-bottom: 0px solid #1b89da;
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
  &.dark blockquote {
    background: var(--foreground);
  }
  &.dark blockquote p {
    color: var(--background);
  }
`
