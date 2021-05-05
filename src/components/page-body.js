import React from 'react'
require('prismjs/themes/prism.css')

const PageBody = props => (
    <div
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
      className="body-content" 
    />
);

export default PageBody
