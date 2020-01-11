import React from 'react'
import styled from 'styled-components'

const Related = props => (
  <SidebarWrapper>
    <SidebarTitle>{props.tag}</SidebarTitle>
  </SidebarWrapper>
)

export default Related

const SidebarWrapper = styled.div`
  align-self: baseline;
  padding: 20px;
`

const SidebarTitle = styled.div`
  max-width: 720px;
  margin-top: 40px;
  margin: 0 auto;
  a {
    line-height: 1.5;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }
`
