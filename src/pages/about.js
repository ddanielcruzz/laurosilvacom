import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'
import AboutImage from '../components/aboutimage'

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`Lauro Silva`, `about`]} />
    <HeroContent>
      <h2>About</h2>
    </HeroContent>

    <Content>
      <p>
        I'm a software engineer specializing in modern JavaScript. I make things
        from scratch, contribute to open source, and create resources that are
        accessible and intuitive to new developers.
      </p>
      <AboutImage fadeIn="false" loading="eager" critical="true" />
      <br />
      <p>Outside of work you can find me hiking with my dog, Marvel.</p>
      <h2>Writing</h2>
      <ul>
        <li>
          <a href="/tutorials">Main Blog</a>
        </li>
        <li>
          <a href="https://dev.to/laurosilvacom">The Practical DEV</a>
        </li>
      </ul>
      <h2>Teaching</h2>
      <ul>
        <li>
          <a href="https://setih.com">Setih</a> - where I publish practical,
          concise, programming screencasts
        </li>
      </ul>
      <h2>Speaking</h2>
      <ul>
        <li>
          <a href="https://github.com/evanlucas/learnyoumongo">
            PDX Nodeschool
          </a>{' '}
          - Getting started with MongoDB
        </li>
        <li>
          <a href="https://twitter.com/emiliorami/status/708450488522448896">
            ProductHunt
          </a>{' '}
          - Implementing Accessibility 101
        </li>
        <li>
          <a href="https://twitter.com/SULMAGUTIERREZ/status/729113496881750016">
            EpicQueen
          </a>{' '}
          - 101 Workshop: How Webpack Works
        </li>
        <li>
          <a href="https://twitter.com/EpicQueen/status/702686804009312256">
            EpicQueen
          </a>{' '}
          - Code Reviews: CSS edition
        </li>
        <li>
          <a href="https://secure.meetupstatic.com/photos/event/1/3/c/2/highres_441425058.jpeg">
            Open Hack Nights
          </a>{' '}
          - Implement Fuzzy Search in a Few Lines of Ruby
        </li>
      </ul>

      <h2>Open Source</h2>
      <ul>
        <li>
          <a href="https://github.com/laurosilvacom/laurosilvacom">
            laurosilvacom
          </a>{' '}
          - My personal theme for Gatsby (the source of this website)
        </li>

        <li>
          <a href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-es">
            React+TypeScript Cheatsheets ES
          </a>{' '}
          - Spanish translation of react-typescript-cheatsheet
        </li>
      </ul>
      <h2>More</h2>
      <ul>
        <li>
          <Link to="/uses">Uses</Link> - Links to all the tools I use
        </li>
      </ul>
    </Content>
  </Layout>
)

export default About
