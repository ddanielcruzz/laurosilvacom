/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Related = ({ children }) => <RelatedWrapper>{children}</RelatedWrapper>

export default Related

const RelatedWrapper = styled.div`
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: all 0.2s ease-out 0s;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 30px;
  :hover {
    transform: scale(1.02, 1.03);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
  }
  font-size: 16px;
  color: #000;
`
