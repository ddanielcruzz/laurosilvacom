import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TwitterFollowButton } from 'react-twitter-embed'

const Footer = () => (
  <FooterWrapper>
    <FooterGroup>
      <FooterMain>
        <FooterAbout></FooterAbout>
        <FooterContent>
          <FooterLearn>
            <LearnTitle>Learn</LearnTitle>
            <Link to="/">Articles</Link>
          </FooterLearn>
          <FooterCompany>
            <CompanyTitle>Company</CompanyTitle>
            <Link to="/">Contact</Link>
            <Link to="/terms">Legal</Link>
          </FooterCompany>
        </FooterContent>
      </FooterMain>
      <FooterCopyRight>
        <TwitterFollowButton
          options={{ size: 'large' }}
          screenName="laurosilvacom"
        />

        <CopyRight>
          Copyright © 2019 Rubydock, LLC. All rights reserved.
        </CopyRight>
      </FooterCopyRight>
    </FooterGroup>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.div`
  margin-top: 150px;
  position: relative;
`

const LearnTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`

const CompanyTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`

const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 780px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    grid-gap: 40px;
  }
`

const FooterAbout = styled.div`
  max-width: 400px;
  line-height: 2.5;
  font-size: 16px;
  @media (max-width: 780px) {
    text-align: center;
  }
`

const FooterGroup = styled.div`
  margin: auto;
  max-width: 1220px;
  padding-top: 100px;
  padding: 20px;
  padding-top: 50px;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  a {
    padding-bottom: 20px;
    color: #929ea3;
  }
`

const FooterLearn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: #929ea3;
  margin: 0 50px;
`

const FooterCompany = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: #929ea3;
  margin: 0 50px;
`

const FooterCopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-top: 2px solid #9aaebe0f;
  @media (max-width: 780px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
  }
`

const CopyRight = styled.div`
  color: #929ea359;
  font-size: 16px;
  margin-top: 20px;
`
