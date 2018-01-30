module.exports = {
  pathPrefix: "/react-gatsby-prerender-site",
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: `gatsby-plugin-sass`,
    options: {
      precision: 8,
    },
  }],
};
