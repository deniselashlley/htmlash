import React, { useState, useEffect, useRef } from 'react';
import NavList from './nav-list';
import NavListMobile from './nav-list-mobile';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import cn from 'classnames';

const Navigation = () => {
  const [showMenu, setMenu] = useState(false);
  const navRef = useRef(null);
  const breakpoints = useBreakpoint();

  useEffect(() => {
    if (!showMenu) {
      document.body.classList.remove('kill-scroll');
      document.documentElement.classList.remove('kill-scroll');
    }
  }, [showMenu]);

  const handleShowMenu = () => {
    setMenu(!showMenu);

    if (!showMenu) {
      document.body.classList.add('kill-scroll');
      document.documentElement.classList.add('kill-scroll');
    }

    if (showMenu) {
      document.body.classList.remove('kill-scroll');
      document.documentElement.classList.remove('kill-scroll');
    }
  };

  return (
    <nav className={cn('navigation', { 'navigation-menu--active': showMenu })} ref={navRef}>
      {breakpoints.sm ? (
        <>
          <button className="menu-icon" type="button" onClick={handleShowMenu}>
            <span className="menu-icon__line" />
            <span className="menu-icon__line" />
            <span className="menu-icon__line" />
          </button>
          <NavListMobile isOpen={showMenu} handleClosed={navRef} />
        </>
      ) : (
        <NavList />
      )}
    </nav>
  );
};

export default Navigation;
