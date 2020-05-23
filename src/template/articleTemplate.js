import React from 'react'
import { graphql } from 'gatsby'

export  default ({data}) => {
    return (
        <div>
            <h1>
                {/* {data.markdownRemark.frontmatter.title} */}
            </h1>
        </div>
    )
}

// export const query = graphql`
//     query($title: String!) {
//         markdownRemark(frontmatter: {path: {eq: $title}}) {
//             frontmatter{
//                 title 
//             }
//         }
//     }
// `
