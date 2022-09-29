const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWpPage (filter: { status: { eq : "publish" } }) {
        nodes {
          id
          title
          content
          slug
          isFrontPage
        }
      }
    }
  `)
  result.data.allWpPage.nodes.forEach((node) => {
    createPage({
      path: node.isFrontPage === true ? '/' : node.slug,
      component: path.resolve(`./src/templates/single/page.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}