import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
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
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <HeaderGroup>
          <LogoWrapper>
            <Link to="/">
              <Image src={logo} />
            </Link>
          </LogoWrapper>
          <LinksWrapper>
            <Link to="/">Me</Link>
            <Link to="/">Contact</Link>
          </LinksWrapper>
        </HeaderGroup>
      </HeaderWrapper>
    )
  }
}

export default Header

const Image = styled.img`
  height: 30px;
`

const HeaderWrapper = styled.div`
  background: var(--background);
  border-bottom: 1px solid var(--accents-2);
`

const HeaderGroup = styled.div`
  margin: auto;
  max-width: 820px;
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
  font-size: 16px;
  align-items: center;
  a {
    padding-left: 40px;
    color: var(--accents-5);
  }
  span {
    font-size: 20px;
  }
`
