exports.createPages = async ({ graphql, actions }) => {
  
  const {data: {allWpPage}} = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }  
  `)
  
  allWpPage.nodes.map((page) => {
    const {id, uri} = page;
    
    return actions.createPage({
      path: uri,
      component: require.resolve(`./src/templates/single/page.js`),
      context: {
        id: id
      }
    })
  })
  
  // const { createPage } = actions
  // const result = await graphql(`
  //   {
  //     allWpPage (filter: { status: { eq : "publish" } }) {
  //       nodes {
  //         id
  //         title
  //         content
  //         slug
  //         isFrontPage
  //       }
  //     }
  //   }
  // `)
  // result.data.allWpPage.nodes.forEach((node) => {
  //   createPage({
  //     path: node.isFrontPage === true ? '/' : node.slug,
  //     component: path.resolve(`./src/templates/single/page.js`), // should this be require.resolve?
  //     context: {
  //       slug: node.slug,
  //     },
  //   })
  // })
}