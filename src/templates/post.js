import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ArticleSection from '../components/article-section';

const PostTemplate = ({ data }) => (
    <Layout>
        <ArticleSection data={data.contentfulPost} />
    </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
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
      website {
        linkUrl
        linkTitle
      }
      skillTag
      year
    }
  }
`

export default PostTemplate
