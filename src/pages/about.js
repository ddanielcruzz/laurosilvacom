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
        I'm Lauro Silva, an independent software engineer from Portland, Oregon.
        I specialize in taking what I learn, synthesizing it, and sharing it in
        forms that are accessible and intuitive.
      </p>
      <AboutImage fadeIn="false" loading="eager" critical="true" />
      <br />
      <p>
        Outside of work, I enjoy trail running, finding the perfect cup of
        coffee, and spending time with my dog, Marvel.
      </p>
      <h2>Work</h2>
      <ul>
        <li>
          <a href="https://setih.com">Setih</a> - practical, concise, in-depth
          video tutorials that increase developer happiness and productivity.
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
        <li>Computer: MacBook Pro 2018</li>
        <li>Headphones: QuietComfort 35 wireless headphones II</li>
        <li>Hosting: Netlify (blog)</li>
        <li>Editor: Visual Studio Code</li>
        <li>Static Site Generator: Gatsby</li>
        <li>Code Theme: Hyper Term Theme</li>
        <li>Newsletter: Substack</li>
      </ul>
    </Content>
  </Layout>
)

export default About
