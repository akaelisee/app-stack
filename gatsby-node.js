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
            context: {path: paths}
        })
    });

    const articles = await graphql(`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}) {
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

    articles.data.allMarkdownRemark.edges.forEach(article => {
      const articlePath = article.node.frontmatter.path;
      actions.createPage({
        path: articlePath,
        component: require.resolve(`./src/template/articleTemplate.js`),
        context: {path: articlePath}
      })
    });
}