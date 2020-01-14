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
      <h2>Outline</h2>
      <ul>
        <li>Setting Up a First App</li>
        <li>Base Syntax & Core Features</li>
        <li>A Closer Look at Reactivity</li>
        <li>Understanding the Different Component Types</li>
        <li>Working with Bindings & Forms</li>
        <li>Managing State & Data with Stores</li>
        <li>Motion, Transitions & Animations</li>
        <li>Network Interaction via Http</li>
      </ul>
      <h2>Out Feb, 2020</h2>
      <p>Let me know when it launches! Sign up for the newsletter.👇🏽</p>
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
