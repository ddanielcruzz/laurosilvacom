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
  border-radius: 0.5rem;
  padding: 20px;
  grid-gap: 10px;
  box-shadow: var(--shadow);
  background: var(--teal-400);
  transition: transform 160ms;
  :hover {
    transform: scale(1.05);
  }
`

const TutorialIcon = styled.div`
  width: 60px;
  align-self: center;
`

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-gap: 20px;
  align-items: center;
`

const TutorialTitle = styled.h1`
  font-size: 22px;
  margin: 0;
  line-height: 1.01em;
  color: var(--accents-1);
  @media (max-width: 780px) {
    font-size: 20px;
  }
`
