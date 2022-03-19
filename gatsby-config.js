require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const customQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 768px)',
  md: '(max-width: 992px)',
  l: '(max-width: 1024px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: 'Denise Lashlley',
    description:
      'Denise is a web professional specialising in modern front-end development, based in London, UK',
    siteUrl: 'https://deniselashlley.io/',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Projects',
        slug: '/#projects',
      },
      {
        name: 'Contact',
        slug: '/#contact',
      },
    ],
    basePath: '/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
             access_token: process.env.INSTAGRAM_TOKEN }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'images',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
          queries: customQueries,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENV,
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'deniselashlley',
        short_name: 'deniselashlley',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './static/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
  ],
}
