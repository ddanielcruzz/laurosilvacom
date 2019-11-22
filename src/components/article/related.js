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
`

const SidebarTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 50px;
  a {
    color: #000;
  }
`
