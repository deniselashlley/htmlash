import * as React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = (props) => (
  <div className="article-hero">
    <GatsbyImage
      image={props.image.gatsbyImageData}
      className="article-hero__image" 
      alt=""
    />
  </div>
)

export default Hero
