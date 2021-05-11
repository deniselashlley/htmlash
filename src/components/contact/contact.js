import * as React from 'react'
import ContactLinks from '../contact-links'
import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => (
  <section id="contact" className="section section--contact">
    <h2 className="section__title">Connect with me...</h2>
    <div className="section__content">
      <StaticImage
        src="../../assets/me.jpeg"
        placeholder="blurred"
        layout="fullWidth"
        alt=""
        className="profile-image"
      />
      <ContactLinks />
    </div>
  </section>
)

export default Contact
