import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Content = props => (
  <Article>
    <MDXRenderer>{props.article}</MDXRenderer>
  </Article>
)
export default Content

const Article = styled.div`
  font-size: 20px;
  line-height: 1.7;
  padding-top: 0;
  img {
    border-radius: 4px;
  }
  h1 {
    font-size: 35px;
    margin: 4rem 0 1rem;
  }
  h2,
  h3 {
    margin: 4rem 0 1rem;
  }
  .gatsby-resp-image-wrapper a {
    border-bottom: 0px solid #1b89da;
  }
`
