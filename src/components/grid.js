import React from 'react'
import styled from 'styled-components'

const Grid = ({ children }) => <GridWrapper>{children}</GridWrapper>

export default Grid

const GridWrapper = styled.div`
  align-items: end;
  display: grid;
  max-width: 780px;
  margin: 0 auto;
  padding: 20px;
  justify-items: center;
`
