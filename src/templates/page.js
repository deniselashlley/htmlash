import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageBody from '../components/page-body'
import SEO from '../components/seo'

const PageTemplate = ({ data }) => {
  const { title, metaDescription, body } = data.contentfulPage
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
      <div className="container">
        <h1 className="article-title">{title}</h1>
        <PageBody body={body} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
