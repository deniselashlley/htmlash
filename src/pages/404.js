import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

/* const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: ${props => props.theme.colors.text};
  }
` */

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="Page Not Found" />
    <div className="container">
      <h2>Page Not Found</h2>
      <p>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
