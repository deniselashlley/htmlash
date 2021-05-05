import * as React from 'react'
import Img from 'gatsby-image'

const Hero = (props) => (
  <div className="hero" height={props.height}>
    <Img fluid={props.image.fluid} backgroundColor={'#eeeeee'} className="hero__image" />
    <h1 className="hero__title">{props.title}</h1>
  </div>
)

export default Hero
