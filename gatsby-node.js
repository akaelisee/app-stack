exports.createPages = async ({ graphql, actions }) => {
    
    const products = await graphql(`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      } 
    `) 
    console.log(products.data.allMarkdownRemark.edges)
    products.data.allMarkdownRemark.edges.forEach(edge => {
        const path = edge.node.frontmatter.path;
        actions.createPage({
            path: path,
            component: require.resolve('./src/template/productTemplate.js'),
            context: {path:path}
        })
    })

}