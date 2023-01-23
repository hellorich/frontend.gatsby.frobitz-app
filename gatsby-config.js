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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:400;700;900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-image', 
    'gatsby-plugin-sharp', 
    'gatsby-transformer-sharp', 
    'gatsby-plugin-root-import'
  ]
};