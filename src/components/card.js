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
  border-radius: 4px;
  padding: 20px;
  grid-gap: 10px;
  border: 1px solid var(--accents-2);
  :hover {
    border: 1px solid var(--foreground);
  }
  :active {
    border: 1px solid var(--success);
  }
  &.dark {
    border: 1px solid var(--accents-7);
    :hover {
      border: 1px solid var(--accents-4);
    }
    :active {
      border: 1px solid var(--success);
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
