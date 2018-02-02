module.exports = {
  proxy: {
    prefix: "/api", 
    url: "http://dev.example.com",  //哪天要打從localhost 打api 的時候改這段
  },
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
