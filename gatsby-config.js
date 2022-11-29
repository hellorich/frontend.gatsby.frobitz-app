module.exports = {
  siteMetadata: {
    title: 'Test',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://frobitz.app/richcookson-info/graphql'
      }
    }, 
    'gatsby-plugin-image', 
    'gatsby-plugin-sharp', 
    'gatsby-transformer-sharp', 
    'gatsby-plugin-sass',
    'gatsby-plugin-root-import'
  ]
};