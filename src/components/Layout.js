import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <>
      <a href="#main" id="skip-navigation" className="skipped-links">
        Skip to content
      </a>
      <Header />
      <main id="main" role="main">{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
