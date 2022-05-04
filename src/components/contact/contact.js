import React from "react";

import { StaticImage } from 'gatsby-plugin-image';
// import { useStaticQuery, graphql } from "gatsby"
// import _get from "lodash/get";
// import shortid from 'shortid';

import ContactLinks from '../contact-links';

const Contact = () => {
  /* const data = useStaticQuery(graphql`
  query InstagramQuery {
    allInstagramContent {
      edges {
        node {
          localImage {
            
            childImageSharp {
              gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
}
`) *///
// const getInstaImages = _get(data, 'allInstagramContent.edges')
  return (
  <section id="contact" className="section section-contact">
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
    {/* <div className="instagram-section" >
        {getInstaImages.map((item) =>  <GatsbyImage image={item.node.localImage.childImageSharp.gatsbyImageData} style={{ width: 180, height: 180}} key={shortid.generate()}/>)}
  </div> */}
  </section>
  )
};

export default Contact;
