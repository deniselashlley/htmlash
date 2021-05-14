import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/hero'
import PageBody from '../components/page-body'
import SEO from '../components/seo'

const PostTemplate = ({ data, pageContext }) => {
  const { title, metaDescription, heroImage, body } = data.contentfulPost

  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
      />
        
        <article className="article">
          <h1 className="article-title">{title}</h1>
          <div className="article-block">
            <Hero image={heroImage} />
            <PageBody body={body} />
          </div>
        </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        title
        gatsbyImageData(
          quality: 90
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
