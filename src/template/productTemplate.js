import React from 'react'
import { graphql } from 'gatsby'

export  default ({data}) => {
    // console.log(data)
    return (
        <div>
            <p>{data.markdownRemark.frontmatter.title}</p>
            <p>{data.markdownRemark.frontmatter.description}</p>
            <p>{data.markdownRemark.frontmatter.price}</p>
            <img src={data.markdownRemark.frontmatter.image} alt={data.markdownRemark.frontmatter.title} />
            <p>
                <ul>
                    {
                        (data.markdownRemark.frontmatter.size || []).map((detail, index) => (
                                <li key ={index}>
                                    {detail.name}
                                </li>
                                ))
                    }
                </ul>
            </p>
            <p>
                {
                        (data.markdownRemark.frontmatter.color || []).map((detail, index) => (
                                <li key ={index}>
                                    {detail.name}
                                </li>
                                ))
                    }
            </p>
            
        </div>
    )
}

export const query = graphql`
    query ($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
          frontmatter {
            title
            image
            description
            price
            size {
              name
            }
            color {
              name
            }
          }
        }
      }
`
