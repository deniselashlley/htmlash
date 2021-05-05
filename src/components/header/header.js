import * as React from 'react'
import { Link } from 'gatsby'
import Navigation from '../navigation'

const Header = () => (
  <header className="header" role="banner">
    <div className="block">
      <div className="circle">
        <h1>
          <Link to="/">Denise Lashlley</Link>
        </h1>
      </div>
    </div>
    <Navigation />
  </header>
)

export default Header
