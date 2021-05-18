import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = ({ data, basePath }) => {
  return (
    <ul className="card-list">
      {data.map(({ node: post }) => (
        <li key={post.id} className="card-list__item">
          <Link to={`${basePath}/${post.slug}/`}>
            <GatsbyImage image={post.heroImage.gatsbyImageData} className="card-item__image" alt={post.title} />
            <h3 className="card-list__title">{post.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Card;
