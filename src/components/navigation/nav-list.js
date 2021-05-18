import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const NavListMobile = () => {
  const { menuLinks } = useSiteMetadata();

  return (
    <ul className="menu-list">
      {menuLinks.map(link => (
        <li key={link.name} className="menu-list__item">
          {(link.name === 'Projects'  || link.name === 'Contact')? (
            <AnchorLink
              to={link.slug}
              title={link.name}
              label={link.name}
            />
          ) : (
            <Link
              to={link.slug}
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default React.memo(NavListMobile)
