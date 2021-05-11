import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const activeLinkStyle = {
  color: '#53666E',
}

const NavList = ({ isOpen }) => {
  const { menuLinks } = useSiteMetadata()

  const handleClick = event => {
    // console.log(event)
  }

  return (
    <ul className="nav-items">
      {menuLinks.map(link => (
        <li key={link.name}>
          {(link.name === 'Projects'  || link.name === 'Contact')? (
            <AnchorLink
              to={link.slug}
              title={link.name}
              activeStyle={activeLinkStyle}
            />
          ) : (
            <Link
              to={link.slug}
              activeStyle={activeLinkStyle}
              onClick={handleClick}
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
  className: PropTypes.string,
}

NavList.defaultProps = {
  isOpen: false,
  className: '',
}

export default React.memo(NavList)
