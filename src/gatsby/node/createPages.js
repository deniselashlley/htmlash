const config = require('../../../gatsby-config');
const query = require('../data/query');
const path = require(`path`);
const { paginate } = require(`gatsby-awesome-pagination`);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const basePath = config.siteMetadata.basePath || '/';

  // Create a page for each "post"
  const postsQuery = await graphql(query.data.posts);
  const posts = postsQuery.data.allContentfulPost.edges;
  posts.forEach((post, i) => {
    const next = i === posts.length - 1 ? null : posts[i + 1].node;
    const prev = i === 0 ? null : posts[i - 1].node;

    createPage({
      path: `${basePath === '/' ? '' : basePath}/${post.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.slug,
        basePath: basePath === '/' ? '' : basePath,
        prev,
        next,
      },
    });
  });

  // Create a page containing all "posts" and paginate.
  paginate({
    createPage,
    component: path.resolve(`./src/templates/posts.js`),
    items: posts,
    itemsPerFirstPage: config.siteMetadata.postsPerFirstPage || 7,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: basePath,
    context: {
      basePath: basePath === '/' ? '' : basePath,
      paginationPath: basePath === '/' ? '' : `/${basePath}`,
    },
  });
};
