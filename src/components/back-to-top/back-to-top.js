import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const BackToTop = () => (
  <div className="back-to-top">
    <button
      type="button"
      className="back-to-button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="back to top"
    >
      <StaticImage src="../../assets/icons/arrow-up.svg" layout="fixed" alt="" className="back-to-top" />
    </button>
  </div>
);

export default BackToTop;
