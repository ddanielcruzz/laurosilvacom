import React from 'react'
import styled from 'styled-components'

const Content = ({ children }) => (
  <ContentWrapper>
    <Tutorial>{children}</Tutorial>
  </ContentWrapper>
)
export default Content

const ContentWrapper = styled.div`
  padding: 20px;
`

const Tutorial = styled.div`
  margin: auto;
  max-width: 720px;
  font-size: 1rem;
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
    color: var(--accent-300);
  }
`
