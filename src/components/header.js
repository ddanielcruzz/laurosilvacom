import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import logolight from '../images/logolight.svg'
import './header.css'

import ThemeContext from '../context/ThemeContext'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <HeaderWrapper
            className={`
              ${this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
              ${theme.dark ? 'dark' : 'light'}
              `}
          >
            <HeaderGroup>
              <LogoWrapper>
                <Link to="/">
                  {theme.dark ? (
                    <Image src={logolight} />
                  ) : (
                    <Image src={logo} />
                  )}
                </Link>
              </LogoWrapper>
              <LinksWrapper>
                <Link to="/about">About</Link>
                <Link to="/newsletter">Newsletter</Link>
                <span
                  role="presentation"
                  className="dark-switcher"
                  onClick={theme.toggleDark}
                >
                  {theme.dark ? <span>☀</span> : <span>☾</span>}
                </span>
              </LinksWrapper>
            </HeaderGroup>
          </HeaderWrapper>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Header

const Image = styled.img`
  height: 30px;
  @media (max-width: 480px) {
    height: 20px;
  }
`

const HeaderWrapper = styled.div`
  border-bottom: 1px solid var(--accents-2);
  transition: all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  background: var(--background);
  &.dark {
    background: var(--foreground);
    border-bottom: 1px solid var(--accents-7);
  }
`
const HeaderGroup = styled.div`
  margin: auto;
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const LogoWrapper = styled.div`
  font-size: 30px;
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 1rem;
  align-items: center;
  a {
    padding-left: 40px;
    color: var(--accents-5);
  }
  span {
    font-size: 20px;
    margin: 0;
    padding-left: 20px;
    color: var(--foreground);
    transition: all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    @media (max-width: 480px) {
      padding-right: 20px;
    }
  }
`
