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
  max-width: 780px;
  padding: 20px;
`

const Tutorial = styled.div`
  padding: 20px;
  box-shadow: var(--shadow);
  background: var(--accent-400);
  border-radius: 0.3rem;
  font-size: 20px;
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
    color: var(--accent-300);
  }
`
