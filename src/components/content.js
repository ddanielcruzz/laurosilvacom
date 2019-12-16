import React from 'react'
import styled from 'styled-components'

const Content = ({ children }) => (
  <ContentWrapper>
    <Tutorial>{children}</Tutorial>
  </ContentWrapper>
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
    color: var(--background);
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-left: 20px;
  }
  p,
  ul,
  li {
    color: var(--accents-4);
  }
`
