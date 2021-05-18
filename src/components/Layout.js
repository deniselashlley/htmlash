import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import BackToTop from './back-to-top';
import '../styles/global.scss';

const Layout = (props) => {
  const handleFirstTab = (e) => {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');
    }
  };

  useEffect(() => window.addEventListener('keydown', handleFirstTab), []);

  return (
    <>
      <a href="#main" id="skip-navigation" className="skipped-links">
        Skip to content
      </a>
      <Header />
      <main id="main" role="main">
        {props.children}
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
