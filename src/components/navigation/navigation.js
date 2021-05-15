import React, { useState, useEffect } from 'react'
import NavList from './nav-list'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

/* const MobileNavList = styled(NavList)`
  position: absolute;
  top: 0;
  z-index: 999;
  display: block;
  width: 100%;
` */

const Navigation = () => {
  const [showMenu, setMenu] = useState(false)
  const breakpoints = useBreakpoint();

  useEffect(() => {
    if (!showMenu) {
      document.body.classList.remove('kill-scroll')
      document.documentElement.classList.remove('kill-scroll')
    }
  }, [showMenu])

  const handleShowMenu = () => {
    setMenu(!showMenu)

    if (!showMenu) {
      document.body.classList.add('kill-scroll')
      document.documentElement.classList.add('kill-scroll')
    }

    if (showMenu) {
      document.body.classList.remove('kill-scroll')
      document.documentElement.classList.remove('kill-scroll')
    }
  }

  return (
    <nav className="navigation">
      { breakpoints.sm ? (
        <>
          <button className="menu-button" type="button" onClick={handleShowMenu}>
            <span />
            <span />
            <span />
          </button>
          { showMenu && <NavList isOpen={showMenu} /> }
        </>
        ) : <NavList />
    }
    </nav>
  )
}

export default Navigation
