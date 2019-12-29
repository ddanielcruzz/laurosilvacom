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
  box-shadow: 0 0 10px #0b1c2d;
  background-color: #274059;
  border-radius: 0.5rem;
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
    color: var(--accents-4);
  }
`
