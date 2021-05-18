import * as React from 'react';
import Hero from '../hero';
import shortid from 'shortid';
import ReactHtmlParser from 'react-html-parser';

const ArticleSection = ({ data }) => {
  const { title, heroImage, body, website, year, skillTag } = data;
  return (
    <article className="article">
      <h1 className="article-title">{title}</h1>
      <div className="article-block">
        <Hero image={heroImage} />
        <div className="article-content">
          <div>{ReactHtmlParser(body.childMarkdownRemark.html)}</div>
          {website && (
            <p>
              Website:{' '}
              <a href={website.linkUrl} target="blank">
                {website.linkTitle}
              </a>
            </p>
          )}
          <p className="article-year">Year: {year}</p>
          {skillTag && (
            <>
              <ul className="article-tags-lists">
                {skillTag.map((item) => (
                  <li className="article-tags-item" key={shortid.generate()}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleSection;
