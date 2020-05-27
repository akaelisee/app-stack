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

    products.data.allMarkdownRemark.edges.forEach(edge => {
        const paths = edge.node.frontmatter.path;
        actions.createPage({
            path: paths,
            component: require.resolve(`./src/template/productTemplate.js`),
            context: {path:paths}
        })
    })

    // Categories
    // const categories = await graphql(`
    //     query {
    //         allMarkdownRemark {
    //         edges {
    //             node {
    //             frontmatter {
    //                 title
    //                 price
    //                 image
    //             }
    //             }
    //         }
    //         }
    //     }
    // `)
}