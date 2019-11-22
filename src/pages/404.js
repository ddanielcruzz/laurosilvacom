import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroLanding from '../components/herolanding'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeroLanding>
      <h1>
        NOT FOUND{' '}
        <span role="img" aria-label="box">
          🙀
        </span>
      </h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </HeroLanding>
  </Layout>
)

export default NotFoundPage
