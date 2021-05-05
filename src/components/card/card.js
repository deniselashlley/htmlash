import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Card = ({ data, basePath }) => {
  return (
    <ul>
      {data.map(({ node: post }) => (
          <li key={post.id} className="card-list__item">
            <Link to={`${basePath}/${post.slug}/`}>
              <Img fluid={post.heroImage.fluid} backgroundColor={'#eeeeee'} className="card-item__image"/>
              <h3 className="card-list__title">{post.title}</h3>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Card
