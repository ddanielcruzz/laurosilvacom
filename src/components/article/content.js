import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Content = props => (
  <ContentWrapper>
    <Article>
      <MDXRenderer>{props.article}</MDXRenderer>
    </Article>
  </ContentWrapper>
)
export default Content

const ContentWrapper = styled.div``

const Article = styled.div`
  font-size: 20px;
  line-height: 1.7;
  color: #929ea3;
  padding-top: 0;
  img {
    border-radius: 4px;
  }
  h1 {
    color: white;
    font-size: 35px;
    margin: 4rem 0 1rem;
  }
  h2,
  h3 {
    color: white;
    margin: 4rem 0 1rem;
  }
  a {
    color: #1b89da;
  }
  a:hover {
    color: #2e9def;
  }
  .gatsby-resp-image-wrapper a {
    border-bottom: 0px solid #1b89da;
  }
`
