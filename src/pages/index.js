import React from "react"
// import { Link } from "gatsby"
import {Carousel} from "react-bootstrap";
import { graphql } from 'gatsby';

import Header from "../layout/header";
import Footer from "../layout/footer";
// import '../sass/style.scss';
// import imageI from "../../static/assets/47372301.jpg";
// import imageJ from "../../static/assets/cat-illustrations-004.jpg";
// import imageK from "../../static/assets/huaweip30pro.jpg";

const IndexPage = ({data}) => {
// console.log(data)
  return (
    <div className="homepage">
      <Header />
      <div className="body-homepage">

        <div className="title-shop">
          <p>Bienvenue dans ma boutique en ligne</p> 
          <p>Exclusive</p> 
        </div>
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
                    <p>{node.frontmatter.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
              ))
            }
          </Carousel>
        </div>
        <div className="about">
            <h2>A propos de nous</h2>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>

        </div>
      </div>
    <Footer />
  </div>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(limit: 10) {
    edges {
      node {
        frontmatter {
          description
          image
          title
        }
      }
    }
  }
}
`

export default IndexPage
