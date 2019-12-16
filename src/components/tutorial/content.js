import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Content = props => (
  <Tutorial>
    <MDXRenderer>{props.tutorial}</MDXRenderer>
  </Tutorial>
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

  p,
  ul,
  li {
    color: var(--accents-4);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    color: var(--background);
  }

  blockquote {
    background: var(--foreground);
  }
  blockquote p {
    color: var(--background);
  }
`
