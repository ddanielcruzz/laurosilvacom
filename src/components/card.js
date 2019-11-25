import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import ThemeContext from '../context/ThemeContext'

const Card = props => (
  <ThemeContext.Consumer>
    {theme => (
      <CardWrapper className={theme.dark ? 'dark' : 'light'}>
        <CardContent>
          <ArticleIcon>
            <Image fluid={props.articleIcon} />
          </ArticleIcon>
          <ArticleText>
            <ArticleTitle className={theme.dark ? 'dark' : 'light'}>
              {props.articleTitle}
            </ArticleTitle>
          </ArticleText>
        </CardContent>
      </CardWrapper>
    )}
  </ThemeContext.Consumer>
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
  &.dark {
    border: 1px solid var(--accents-7);
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    :hover {
      border: 1px solid var(--accents-2);
    }
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
  &.dark {
    color: var(--accents-1);
  }
`
