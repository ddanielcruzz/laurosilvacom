import React from 'react'

import Header from './header'
import './layout.css'
import Footer from './footer'

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)

export default Layout
