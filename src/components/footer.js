import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TwitterFollowButton } from 'react-twitter-embed'

const Footer = () => (
  <FooterWrapper>
    <FooterGroup>
      <FooterMain>
        <FooterAbout>
          <TwitterFollowButton
            options={{ size: 'large' }}
            screenName="laurosilvacom"
          />
        </FooterAbout>
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
        <CopyRight>
          Copyright © 2019 Lauro Silva, LLC. All rights reserved.
        </CopyRight>
      </FooterCopyRight>
    </FooterGroup>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.div`
  margin-top: 150px;
  position: relative;
  border-top: 1px solid var(--accents-2);
`

const LearnTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 800;
`

const CompanyTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 800;
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
  max-width: 820px;
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
    color: var(--accents-5);
  }
`

const FooterLearn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 50px;
`

const FooterCompany = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 50px;
`

const FooterCopyRight = styled.div`
  margin-top: 100px;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
`

const CopyRight = styled.div`
  font-size: 12px;
  color: var(--accents-5);
  margin-top: 20px;
`
