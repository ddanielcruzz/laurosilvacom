import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'

const Uses = () => (
  <Layout>
    <SEO title="Uses" keywords={[`gear`, `uses`]} />
    <HeroContent>
      <h2>Uses</h2>
    </HeroContent>

    <Content>
      <h2>Editor</h2>
      <ul>
        <li>
          <a href="https://github.com/laurosilvacom/dotfiles">
            Visual Studio Code
          </a>
        </li>
        <li>
          <a href="https://github.com/laurosilvacom/dotfiles">
            Personal dotfiles.
          </a>{' '}
          For macOS: zsh, iterm, and more.{' '}
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=ngryman.codesandbox-theme">
            CodeSandbox.
          </a>{' '}
          Main editor theme.
        </li>
      </ul>

      <h2>Office</h2>
      <ul>
        <li>
          <a href="https://www.amazon.com/gp/product/B0778Z8G5K/">
            The LG UltraFine 5K Display.
          </a>{' '}
          Great for recording screencasts.
        </li>
        <li>
          <a href="https://www.amazon.com/gp/product/B0756CYWWD">
            Bose QuietComfort 35.{' '}
          </a>
          Great for the home office and travel.
        </li>
        <li>
          <a href="https://www.apple.com">MacBook Pro (15-inch, 2019). </a>
          Main laptop.
        </li>
      </ul>
      <h2>Screencasts</h2>
      <ul>
        <li>
          <a href="https://www.telestream.net/screenflow/">Screenflow.</a> Great
          for recording screencasts, horrible for anything else.
        </li>
        <li>
          <a href="https://www.bluedesigns.com/products/yeticaster/">
            Blue Microphones Yeticaster Studio.{' '}
          </a>
          Perfect setup for recording.
        </li>
      </ul>
    </Content>
  </Layout>
)

export default Uses
