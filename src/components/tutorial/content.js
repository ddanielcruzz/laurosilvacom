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
  font-size: 1rem;
  padding-top: 0;
  .gatsby-resp-image-wrapper a {
    border-bottom: 0px solid #1b89da;
  }

  p,
  ul,
  li {
    color: var(--accent-200);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    color: var(--black);
  }
`
