import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import About from '../components/about'
import Projects from '../components/projects'
import SEO from '../components/seo'
import { startCase } from 'lodash'
import ContactLinks from '../components/contact-links'
import { StaticImage } from "gatsby-plugin-image"

const Posts = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { basePath } = pageContext

  return (
    <Layout>
      <SEO title={startCase(basePath)} />
      <div className="container">
        <About />
        <Projects data={posts} path={basePath} />
        <section id="contact" className="section section--contact">
          <h2 className="section__title">Connect with me...</h2>
          <div className="section__content">
            <StaticImage 
              src="../../static/images/me.jpeg" 
              width={280}
              height={280}
              placeholder="blurred"
              alt="profile picture"
              layout="fixed"
              className="avatar" 
            />
            <ContactLinks />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            gatsbyImageData(layout: CONSTRAINED)
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Posts
