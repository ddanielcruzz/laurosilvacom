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
  max-width: 780px;
  margin-top: 40px;
  margin: 0 auto;
`
