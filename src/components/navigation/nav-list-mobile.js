import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import cn from 'classnames';

const NavList = ({ isOpen, handleClosed, isMobile }) => {
  const { menuLinks } = useSiteMetadata();

  const handleCloseMenu = () => {
    if(isOpen) {
      document.body.classList.remove('kill-scroll')
      document.documentElement.classList.remove('kill-scroll')
    }
    handleClosed.current.classList.remove('navigation-menu--active');
  }

  return (
    <ul className="menu-list menu-list--mobile">
      {menuLinks.map(link => (
        <li key={link.name} className="menu-list__item">
          {(link.name === 'Projects'  || link.name === 'Contact')? (
            <a
              href={link.slug}
              title={link.name}
              onClick={handleCloseMenu}
            >
            {link.name}
            </a>
          ) : (
            <Link
              to={link.slug}
              onClick={handleCloseMenu}
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

NavList.propType = {
  isOpen: PropTypes.boolean,
  handleClosed: PropTypes.shape({ current: PropTypes.any }),
  isMobile: false
}


export default React.memo(NavList)
