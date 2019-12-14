import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'

const Newsletter = () => (
  <Layout>
    <SEO title="Newsletter" keywords={[`newsletter`]} />
    <HeroContent>
      <h2>Newsletter</h2>
    </HeroContent>

    <Content>
      <p>
        Listen, I get it, newsletters are the worst. This one is different
        though. It's normally pretty brief and reflects what I'm learning,
        writing or what I'm working on.
      </p>
      <iframe
        title="Lauro's Newsletter"
        width="100%"
        height="220"
        src="https://laurosilvacom.substack.com/embed"
        frameBorder="0"
        scrolling="no"
      />
      <br />
      <br />
      <p>
        I will not sell your email address to spammers. No spam. No ads. No BS.
      </p>
    </Content>
  </Layout>
)

export default Newsletter
