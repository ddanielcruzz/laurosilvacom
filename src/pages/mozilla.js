/* eslint-disable jsx-a11y/iframe-has-title */
// eslint-disable-next-line jsx-a11y/iframe-has-title

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'

const Mozilla = () => (
  <Layout>
    <SEO title="Mozilla" />
    <HeroContent>
      <h2>Mozilla</h2>
    </HeroContent>

    <Content>
      <iframe
        src="https://player.vimeo.com/video/380162048"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <p>
        <a href="https://vimeo.com/380162048">Mozilla</a> from{' '}
        <a href="https://vimeo.com/user97718985">Lauro Silva</a> on{' '}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    </Content>
  </Layout>
)

export default Mozilla
