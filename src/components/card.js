import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Card = props => (
  <CardWrapper>
    <CardContent>
      <ArticleIcon>
        <Image fluid={props.articleIcon} />
      </ArticleIcon>
      <ArticleText>
        <ArticleTitle>{props.articleTitle}</ArticleTitle>
      </ArticleText>
    </CardContent>
  </CardWrapper>
)

export default Card

const ArticleText = styled.div`
  padding-left: 10px;
  align-self: auto;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  border-radius: 4px;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid var(--accents-2);
  :hover {
    transform: var(--transform-small);
    box-shadow: var(--shadow-small);
  }
`

const ArticleIcon = styled.div`
  width: 60px;
  align-self: center;
`

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 20px;
  align-items: center;
`

const ArticleTitle = styled.h1`
  font-size: 22px;
  margin: 0;
  line-height: 1.01em;
  color: var(--foreground);
  @media (max-width: 780px) {
    font-size: 20px;
  }
`
