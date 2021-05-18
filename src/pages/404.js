import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="Page Not Found" />
    <div className="container" style={{ minHeight: '70vh' }}>
      <section className="section section-notfound">
        <h2 className="section__title">Page Not Found</h2>
        <p className="section__content">
          Please return <Link to="/">home</Link> or use the menu to navigate to a different page.
        </p>
      </section>
    </div>
  </Layout>
);

export default NotFoundPage;
