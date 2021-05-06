import * as React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = (props) => (
  <div className="hero" height={props.height}>
    <GatsbyImage
      image={props.image.gatsbyImageData}
      className="hero__image" 
      alt=""
    />
    <h1 className="hero__title">{props.title}</h1>
  </div>
)

export default Hero
