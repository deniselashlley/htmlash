import React, { useState, useEffect } from 'react'
import Media from 'react-media'
import NavList from './nav-list'

/* const MobileNavList = styled(NavList)`
  position: absolute;
  top: 0;
  z-index: 999;
  display: block;
  width: 100%;
` */

const Navigation = () => {
  const [showMenu, setMenu] = useState(false)

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
      <Media query={{ maxWidth: 1100 }}>
        <>
          <button className="menu-button" active={showMenu} type="button" onClick={handleShowMenu}>
            <span />
            <span />
            <span />
          </button>
          {showMenu && <NavList isOpen={showMenu} />}
        </>
      </Media>
      <Media query={{ minWidth: 1101 }}>
        <NavList />
      </Media>
    </nav>
  )
}

export default Navigation
