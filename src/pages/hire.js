import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'

const Hire = () => (
  <Layout>
    <SEO
      title="Hire a Technical Writer"
      keywords={[`Hire Me`, `Technical Writer`]}
    />
    <HeroContent>
      <h2>Need a Writer?</h2>
    </HeroContent>

    <Content>
      <p>
        Looking for a writer for your blog or publication? Or a fresh voice of
        someone with a very diverse background and experiences?
      </p>
      <p>
        Please ping me at{' '}
        <a href="mailto:hey@laurosilva.com">hey@laurosilva.com</a>! I am always
        on the hunt for new potential partnerships!
      </p>
    </Content>
  </Layout>
)

export default Hire
