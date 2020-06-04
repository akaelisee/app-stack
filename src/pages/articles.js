import React from 'react'
// import { graphql } from 'gatsby'
const articles = ({data}) => {
    // console.log(data.allMarkdownRemark.edges[2].node.frontmatter.album_librairy)
    return (
        <div className="article__grid">
                {/* {
                    data.allMarkdownRemark.edges.map(({node} , index) => {
                        console.log(node);
                        return (
                            <div className="article__item"  key= {index}>
                                <img src= {node.frontmatter.image} alt= {node.frontmatter.title}/>
                                <h2>
                                    {node.frontmatter.title}
                                </h2>
                                <p className="article__price">
                                    {node.frontmatter.price}
                                </p>
                                <div className="article__description">
                                    {node.frontmatter.description}
                                </div>
                                <div className="article__description">
                                    { 
                                    (node.frontmatter.album_librairy || []).map((avaxt, jndex) => (
                                        <div className="autre" key={jndex}>
                                            <img src= {avaxt.avatar} alt=""/>
                                            <p> {avaxt.name} </p>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        )
                    })
                } */}
        </div>
    )
}

// export const query = graphql`
// query  {
//     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/articles/"}}) {
//       edges {
//         node {
//           frontmatter {
//             airport_code
//             album_librairy {
//               avatar
//               name
//             }
//             title
//             description
//             image
//             path
//             price
//           }
//         }
//       }
//     }
//   }
// `
export default articles

