let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${activeEnv}`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: ${process.env.WORDPRESS_URL}`)

module.exports = {
  siteMetadata: {
    title: 'richcookson.info',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress-experimental',
      options: {
        url: `${process.env.WORDPRESS_URL}/graphql`,
      },
    },
    "gatsby-plugin-sass",
  ],
};
