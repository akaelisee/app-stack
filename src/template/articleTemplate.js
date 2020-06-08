import React from 'react'
import { graphql } from 'gatsby';
import Header from '../layout/header';
import Footer from '../layout/footer';
import SideBar from '../components/sideBar';


const ArticleTemplate = ({data}) => {
    console.log(data)
    return (
      <>
      <Header />
        <div className="container">
          <div className="detail-item">
              <div className="title-article">
                  <p> {data.markdownRemark.frontmatter.title} </p>
              </div>
              <div className="sous-title">
                  <span>{data.markdownRemark.frontmatter.created.replace('T', " ")} écrit par {data.markdownRemark.frontmatter.auteur} </span>
              </div>
              <div className="desc-article">
                <p>{data.markdownRemark.frontmatter.description}</p>
              </div>
              <div className="img-article">
                <img src= {data.markdownRemark.frontmatter.image} alt="imahe" />
              </div>

              <div className="title-article">
                  <p> {data.markdownRemark.frontmatter.title1} </p>
              </div>
              <div className="desc-article">
                <p>{data.markdownRemark.frontmatter.description1}</p>
              </div>
              <div className="img-article">
                <img src= {data.markdownRemark.frontmatter.image1} alt="imahe" />
              </div>
          </div>
          <div className="detail-side">
              <SideBar />
          </div>
        </div>
        <Footer />
      </>
    )
}

export const query = graphql`
query ($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      frontmatter {
        title
        price
        image
        image1
        title1
        path
        description1
        description
        auteur
        created
      }
    }
  }
`
export default ArticleTemplate