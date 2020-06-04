import React from 'react'
// import { graphql } from 'gatsby';
const products = ({data}) => {
    // console.log(data.allMarkdownRemark)
    return (
        <div className="products__grid">
            {/* {
                data.allMarkdownRemark.edges.map(({node} , index) => (
                    <div className="product__item"  key= {index}>
                        <img src= {node.frontmatter.image} alt= {node.frontmatter.title}/>
                        <h2>
                            {node.frontmatter.title}
                        </h2>
                        <p className="product__price">
                            {node.frontmatter.price}
                        </p>
                        <div className="product__description">
                            {node.frontmatter.description}
                        </div>
                    </div>
                ))
            } */}
        </div>
    )
}

// export const query = graphql`
// query MyQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             description
//             image
//             price
//             title
//           }
//         }
//       }
//     }
//   }
// `
export default products

