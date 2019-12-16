import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FiTwitter, FiGithub, FiRss } from 'react-icons/fi'
import Button from './button'

const Footer = () => (
  <FooterWrapper>
    <FooterGroup>
      <FooterMain>
        <FooterAbout>
          <Button
            buttonLink="http://twitter.com/laurosilvacom"
            buttonText="Twitter"
            buttonIcon={<FiTwitter />}
          />
          <Button
            buttonLink="http://github.com/laurosilvacom"
            buttonText="Github"
            buttonIcon={<FiGithub />}
          />
          <Button
            buttonLink="https://laurosilva.com/rss.xml"
            buttonText="RSS"
            buttonIcon={<FiRss />}
          />
        </FooterAbout>
        <FooterContent>
          <FooterLearn>
            <LearnTitle>Learn</LearnTitle>
            <Link to="/tutorials">Tutorials</Link>
            <a
              href="https://setih.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Screencasts
            </a>
          </FooterLearn>
          <FooterCompany>
            <CompanyTitle>More</CompanyTitle>
            <Link to="/about">About</Link>
            <Link to="/newsletter">Newsletter</Link>
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
`

const LearnTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 1rem;
  font-size: 16px;
  color: var(--accents-1);
  line-height: 20px;
`

const CompanyTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 1rem;
  font-size: 16px;
  color: var(--accents-1);
  line-height: 20px;
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
  max-width: 450px;
  line-height: 2.5;
  font-size: 1rem;
  @media (max-width: 780px) {
    text-align: center;
  }
`

const FooterGroup = styled.div`
  margin: auto;
  max-width: 2220px;
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
    color: var(--accents-4);
  }
`

const FooterLearn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 50px;
  @media (max-width: 720px) {
    margin-bottom: 50px;
  }
`

const FooterCompany = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 50px;
  @media (max-width: 720px) {
    margin-bottom: 50px;
  }
`

const FooterCopyRight = styled.div`
  margin-top: 100px;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
`

const CopyRight = styled.div`
  font-size: 12px;
  color: var(--accents-4);
  margin-top: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`
