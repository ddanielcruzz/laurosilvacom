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
  height: 25px;
  @media (max-width: 780px) {
    height: 20px;
  }
`

const HeaderWrapper = styled.div``

const HeaderGroup = styled.div`
  margin: auto;
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled.div`
  font-weight: bold;
  font-size: 30px;
  a {
    color: white;
  }
  a:hover {
    color: white;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin: 0;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  padding: 0 20px;
  a {
    color: white;
    padding-left: 20px;
    padding-right: 20px;
  }
  a:hover {
    color: white;
  }
  span {
    font-size: 20px;
  }
`
