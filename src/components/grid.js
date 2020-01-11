import React from 'react'
import styled from 'styled-components'

const Grid = ({ children }) => (
  <GridMain>
    <GridWrapper>{children}</GridWrapper>
  </GridMain>
)

export default Grid

const GridMain = styled.div`
  padding: 20px;
`

const GridWrapper = styled.div`
  align-items: end;
  display: grid;
  max-width: 720px;
  margin: 0 auto;
  grid-gap: 20px;
`
