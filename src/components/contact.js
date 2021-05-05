import React from 'react'
import { graphql } from 'gatsby'

import ContactLinks from './contact-links'

const Contact = () => (
  <section id="contactme" className="page-section">
    <h2>Contact</h2>
    <div>
      <ContactLinks />
    </div>
  </section>
)

export default Contact

export const fluidImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "avatar.png" }) {
      ...fixedImage
    }
  }
`
