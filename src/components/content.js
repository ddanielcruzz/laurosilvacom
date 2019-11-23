import React from 'react'
import styled from 'styled-components'

const Content = ({ children }) => (
  <ContentWrapper>
    <Article>{children}</Article>
  </ContentWrapper>
)
export default Content

const ContentWrapper = styled.div`
  margin: auto;
  max-width: 820px;
  padding: 20px;
`

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
`
