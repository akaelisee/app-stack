import React from "react"
import {Carousel} from "react-bootstrap";
import { graphql } from 'gatsby';
import Header from "../layout/header";
import Footer from "../layout/footer";

const IndexPage = ({data}) => {

  return (
    <>
      <Header />

      <div className="container">
        <div className="slide">
          <Carousel>
            {
              data.allMarkdownRemark.edges.map(({node}, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={node.frontmatter.image}
                    alt="slide"
                  />
                  <Carousel.Caption className="title-slide">
                    <h3>{node.frontmatter.title}</h3>
                    <p>{node.frontmatter.price} $</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
              ))
            }
          </Carousel>
        </div>
        <div className="about">
            <h2>A propos de nous</h2>
            <div className="flex">
              <p>
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content
                  and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story
                  and let your users know a little more about you.
              </p>
              <p>
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content
                  and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story
                  and let your users know a little more about you.
              </p>
            </div>
        </div>
      </div>

    <Footer />
  </>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___created, order: DESC}, limit: 10) {
    edges {
      node {
        frontmatter {
          description
          image
          title
          price
        }
      }
    }
  }
}
`

export default IndexPage
