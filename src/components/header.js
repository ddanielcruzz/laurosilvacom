import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import logolight from '../images/logolight.svg'

import './header.css'

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
      <HeaderWrapper
        className={`${
          this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'
        } `}
      >
        <HeaderGroup>
          <Link to="/">
            <LogoWrapper>
              <Image src={logolight} alt="Lauro Silva Logo" />

              <LogoTitle>Lauro Silva</LogoTitle>
            </LogoWrapper>
          </Link>
          <LinksWrapper>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/about">About</Link>
          </LinksWrapper>
        </HeaderGroup>
      </HeaderWrapper>
    )
  }
}

export default Header

const LogoTitle = styled.h2`
  margin: 0;
  line-height: 0;
  color: black;
  font-size: 24px;
  font-weight: 800;
  color: var(--background);
  @media (max-width: 680px) {
    display: none;
  }
`

const Image = styled.img`
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  height: 30px;
`

const HeaderWrapper = styled.div`
  background: var(--foreground);
  border-bottom: 1px solid var(--accents-7);
`
const HeaderGroup = styled.div`
  margin: auto;
  max-width: 2220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const LogoWrapper = styled.div`
  font-size: 30px;
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 1rem;
  align-items: center;
  a {
    margin-left: 40px;
    color: var(--accents-4);
  }
`
