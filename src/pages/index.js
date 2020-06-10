import React , {useEffect} from "react"
import {Carousel, Spinner} from "react-bootstrap";
import { graphql } from 'gatsby';
import Header from "../layout/header";
import Footer from "../layout/footer";

const IndexPage = ({data}) => {

  useEffect(() => {
      const loader = document.querySelector('.loading');
      loader.classList.add('hidden');
  })

  return (
    <>
      <Header />

      <div className="container">
        <div className="loading">
          <Spinner animation="border" className="loader" />
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
              APROPOS The Concept Store unites phantasy and tradition with beauty and art while creating a unique lifestyle: “It is important to us, to offer you the most luxurious and unique items which will make your life more beautiful.” For 30 years now, the two owners Klaus Ritzenhöfer and Daniel Riedo have been remaining faithful to their original credo. By providing exclusive fashion by international designers as well as beauty and interior products, they constantly prove their extraordinary taste for style and beautiful things.
              </p><p>
              APROPOS The Concept Store unites phantasy and tradition with beauty and art while creating a unique lifestyle: “It is important to us, to offer you the most luxurious and unique items which will make your life more beautiful.” For 30 years now, the two owners Klaus Ritzenhöfer and Daniel Riedo have been remaining faithful to their original credo. By providing exclusive fashion by international designers as well as beauty and interior products, they constantly prove their extraordinary taste for style and beautiful things.
              </p><p>
              APROPOS The Concept Store unites phantasy and tradition with beauty and art while creating a unique lifestyle: “It is important to us, to offer you the most luxurious and unique items which will make your life more beautiful.” For 30 years now, the two owners Klaus Ritzenhöfer and Daniel Riedo have been remaining faithful to their original credo. By providing exclusive fashion by international designers as well as beauty and interior products, they constantly prove their extraordinary taste for style and beautiful things.
              </p>
            </div>
        </div>
        <button
          className='snipcart-add-item'
          data-item-id="1"
          data-item-price="12"
          data-item-name="habille"
          data-item-description="le prix unique"
          data-item-url={"https://inspiring-visvesvaraya-f559ca.netlify.app/"} 
      > Ajouter au panier </button> 
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
