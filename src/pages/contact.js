import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'

const Contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`contact`]} />
    <HeroContent>
      <h2>Contact</h2>
    </HeroContent>

    <Content>
      <p>
        If you enjoy my writing. Singing up for my newsletter!  It's normally
        pretty brief and reflects what I'm learning, writing or what I'm working
        on.
      </p>
      <iframe
        title="Lauro's Newsletter"
        width="100%"
        src="https://laurosilvacom.substack.com/embed"
        frameBorder="0"
        scrolling="no"
      />
      <br />
      <br />

      <p>
        If you have any questions, comments, ideas, critiques, or you just want
        to say hello, don't hesitate to send me an{' '}
        <a href="mailto:lauro@laurosilva.com">email</a>.
      </p>

      <h2>Around the web</h2>
      <ul>
        <li>
          Email: <a href="mailto:lauro@laurosilva.com">lauro@laurosilva.com</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/laurosilvacom">laurosilvacom</a>
        </li>
        <li>
          Twitter: <a href="https://twitter.com/laurosilvacom">laurosilvacom</a>
        </li>
        <li>
          Newsletter:{' '}
          <a href="https://laurosilvacom.substack.com/subscribe">
            laurosilvacom
          </a>
        </li>
        <li>
          RSS: <a href="https://laurosilva.com/rss.xml">laurosilvacom</a>
        </li>
      </ul>
    </Content>
  </Layout>
)

export default Contact
