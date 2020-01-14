import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'

const Svelte = () => (
  <Layout>
    <SEO title="Svelte Course" keywords={[`Svelte`, `Course`, `Screencasts`]} />
    <HeroContent>
      <h2>Svelte Crash Course</h2>
    </HeroContent>

    <Content>
      <p>Let me know when it launches! </p>
      <iframe
        title="Lauro's Newsletter"
        width="100%"
        src="https://laurosilvacom.substack.com/embed"
        frameBorder="0"
        scrolling="no"
      />
    </Content>
  </Layout>
)

export default Svelte
