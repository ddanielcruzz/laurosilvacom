import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FiTwitter, FiGithub, FiRss } from 'react-icons/fi'
import ThemeContext from '../context/ThemeContext'
import Button from './button'

const Footer = () => (
  <ThemeContext.Consumer>
    {theme => (
      <FooterWrapper
        className={`
        ${theme.dark ? 'dark' : 'light'}
      `}
      >
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
                <LearnTitle className={`${theme.dark ? 'dark' : 'light'}`}>
                  Learn
                </LearnTitle>
                <Link to="/writing">Writing</Link>
                <Link to="/newsletter">Newsletter</Link>
              </FooterLearn>
              <FooterCompany>
                <CompanyTitle className={`${theme.dark ? 'dark' : 'light'}`}>
                  More
                </CompanyTitle>
                <Link to="/about">About</Link>
                <Link to="/hire">Hire Me</Link>
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
    )}
  </ThemeContext.Consumer>
)

export default Footer

const FooterWrapper = styled.div`
  margin-top: 150px;
  position: relative;
  border-top: 1px solid var(--accents-2);
  &.dark {
    border-top: 1px solid var(--accents-7);
  }
`

const LearnTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 1rem;
  font-size: 14px;
  color: var(--accents-6);
  line-height: 20px;
  &.dark {
    color: var(--accents-1);
  }
`

const CompanyTitle = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 1rem;
  font-size: 14px;
  color: var(--accents-6);
  line-height: 20px;
  &.dark {
    color: var(--accents-1);
  }
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
  font-size: 14px;
  color: var(--accents-4);
  margin-top: 20px;
`
