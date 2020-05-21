exports.createPages = async ({ graphql, actions }) => {
    
    const products = await graphql(`
    query {
        allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/product/"}}) {
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
    products.data.allMarkdownRemark.edges.forEach(edge => {
        const path = edge.node.frontmatter.path;
        actions.createPage({
            path: path,
            component: require.resolve(`./src/template/productTemplate.js`),
            context: {path:path}
        })
    })

    // Requete pour obtenir mes articles
    // const articles = await graphql(`
    //   query {
    //       allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/article/"}}) {
    //         edges {
    //           node {
    //             frontmatter {
    //               path
    //             }
    //           }
    //         }
    //       }
    //     } 
    //   `)

    // articles.data.allMarkdownRemark.edges.forEach(edge => {
    //   const path = edge.node.frontmatter.path;
    //     actions.createPage({
    //         path: path,
    //         component: require.resolve(`./src/template/articleTemplate.js`),
    //         context: {path:path}
    //     })
    // })
}