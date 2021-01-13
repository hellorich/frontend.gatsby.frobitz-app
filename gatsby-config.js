module.exports = {
  siteMetadata: {
    title: "richcookson.info",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "http://frobitz-app.lndo.site/richcookson-info/graphql",
      },
    },
    "gatsby-plugin-sass",
  ],
};
