import React from 'react'
import styled from 'styled-components'
import { FiTwitter, FiGithub, FiRss, FiMail } from 'react-icons/fi'
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
          <Button
            buttonLink="https://laurosilvacom.substack.com/subscribe"
            buttonText="Newsletter"
            buttonIcon={<FiMail />}
          />
        </FooterAbout>
      </FooterMain>
      <FooterCopyRight>
        <CopyRight>© 2019 Lauro Silva, LLC. All rights reserved.</CopyRight>
      </FooterCopyRight>
    </FooterGroup>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.div`
  margin-top: 150px;
  position: relative;
`

const FooterMain = styled.div`
  justify-content: center;
  display: grid;
`

const FooterAbout = styled.div`
  text-align: center;
`

const FooterGroup = styled.div`
  margin: auto;
  max-width: 720px;
  padding-top: 100px;
  padding: 20px;
  padding-top: 50px;
`

const FooterCopyRight = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
`

const CopyRight = styled.div`
  font-size: 14px;
  color: var(--accent-300);
  margin-top: 20px;
`
