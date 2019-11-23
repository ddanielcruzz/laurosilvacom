import React from 'react'

import Header from './header'
import './layout.css'
import Footer from './footer'

import ThemeContext from '../context/ThemeContext'

const Layout = ({ children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <div className={theme.dark ? 'dark' : 'light'}>
        <Header />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default Layout
