import React from 'react'
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
        I'm Lauro Silva, a software engineer and technical writer from Portland,
        Oregon. I'm currently working full time on writing and creating
        open-source projects.
      </p>
      <p>
        I learn in <a href="/articles/learning-in-public">public</a> and{' '}
        <a href="/writing/">write</a> about everything I know.
      </p>
      <AboutImage />
      <h2>Company</h2>
      <ul>
        <li>
          <a href="/hire">Lauro Silva, LLC</a> - Looking for a writer for your
          developer-focused blog or publication? I can help with that!
        </li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>
          Email:&nbsp;
          <a href="mailto:lauro@laurosilva.com">lauro@laurosilva.com</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/laurosilvacom">laurosilvacom</a>
        </li>
        <li>
          Twitter: <a href="https://twitter.com/laurosilvacom">laurosilvacom</a>
        </li>
        <li>
          Newsletter: <a href="/newsletter">laurosilvacom</a>
        </li>
      </ul>
      <h2>Speaking</h2>
      <ul>
        <li>
          <a href="https://github.com/evanlucas/learnyoumongo">
            Portland Nodeschool
          </a>{' '}
          - Getting started with MongoDB and Node.js
        </li>
        <li>
          <a href="https://twitter.com/emiliorami/status/708450488522448896">
            ProductHunt Meetup
          </a>{' '}
          - Implementing Accessibility in tech communities
        </li>
        <li>
          <a href="https://twitter.com/SULMAGUTIERREZ/status/729113496881750016">
            Google + EpicQueen
          </a>{' '}
          - 101 Workshop: How Webpack Works
        </li>
        <li>
          <a href="https://twitter.com/EpicQueen/status/702686804009312256">
            Google + EpicQueen
          </a>{' '}
          - Code Reviews: CSS edition
        </li>
        <li>
          <a href="https://twitter.com/ChilangoDev/status/670074324963880960">
            Chilango Dev
          </a>{' '}
          - Implementing Accessibility in tech communities
        </li>
        <li>
          <a href="https://twitter.com/SiseiOnline/status/659056842664882176">
            Platzi
          </a>{' '}
          - The Wonderful World of Linting in JavaScript
        </li>
        <li>
          <a href="https://secure.meetupstatic.com/photos/event/1/3/c/2/highres_441425058.jpeg">
            Open Hack Nights
          </a>{' '}
          - Implement Fuzzy Search in a Few Lines of Ruby
        </li>
      </ul>

      <h2>OSS</h2>
      <ul>
        <li>
          <a href="https://github.com/laurosilvacom/laurosilvacom">
            laurosilvacom
          </a>{' '}
          - personal theme for Gatsby (the source of this website)
        </li>

        <li>
          <a href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-es">
            React+TypeScript Cheatsheets en Español
          </a>{' '}
          - Spanish translation of react-typescript-cheatsheet
        </li>
      </ul>
      <h2>Gear</h2>
      <ul>
        <li>
          Personal{' '}
          <a href="https://github.com/laurosilvacom/dotfiles">dotfiles</a> for
          macOS: zsh, iterm, and more.{' '}
        </li>
        <li>Computer:&nbsp;MacBook Pro 2018</li>
        <li>Headphones: QuietComfort 35 wireless headphones II</li>
        <li>Hosting:&nbsp; Netlify &nbsp;(blog)</li>
        <li>Editor:&nbsp; Visual Studio Code</li>
        <li>Static Site Generator:&nbsp; Gatsby</li>
        <li>Code Theme:&nbsp;Hyper Term Theme</li>
        <li>Newsletter:&nbsp; Substack</li>
      </ul>
    </Content>
  </Layout>
)

export default About
