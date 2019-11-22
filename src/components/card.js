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
        <TagsTitle>
          <span> {props.articleTags}</span>
        </TagsTitle>
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
  border-radius: 6px;
  margin-bottom: 40px;
  padding: 20px;
  background: #1b2022;
  :hover {
    transform: scale(1.02);
  }
  @media (max-width: 780px) {
    padding: 10px;
  }
`

const ArticleIcon = styled.div`
  width: 60px;
  align-self: center;
`

const CardContent = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 20px;
`

const TagsTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  color: #929ea3;
  font-size: 14px;
  font-weight: 600;
  span {
    padding-right: 20px;
  }
  svg {
    font-size: 10px;
  }
`

const ArticleTitle = styled.h1`
  font-size: 30px;
  margin: 0;
  color: white;
  @media (max-width: 780px) {
    font-size: 20px;
  }
`
