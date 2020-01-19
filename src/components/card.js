import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Card = props => (
  <CardWrapper>
    <CardContent>
      <TutorialIcon>
        <Image fluid={props.tutorialIcon} />
      </TutorialIcon>
      <TutorialText>
        <TutorialTitle>{props.tutorialTitle}</TutorialTitle>
      </TutorialText>
    </CardContent>
  </CardWrapper>
)

export default Card

const TutorialText = styled.div`
  padding-left: 10px;
  align-self: auto;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 0.2rem;
  padding: 20px;
  grid-gap: 10px;
  border: 1px solid var(--accent-100);
  transition: transform 160ms;
  :hover {
    border: 1px solid var(--black);
  }
  :active {
    border: 1px solid var(--success);
  }
`

const TutorialIcon = styled.div`
  width: 40px;
  align-self: center;
`

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 20px;
  align-items: center;
`

const TutorialTitle = styled.h1`
  font-size: 22px;
  margin: 0;
  line-height: 1.01em;
  color: var(--black);
  @media (max-width: 780px) {
    font-size: 20px;
  }
`
