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
        <Hero image={heroImage} />
        <article className="article">
          <h1 className="article-title">{title}</h1>
          <PageBody body={body} />
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
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        gatsbyImageData(
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
