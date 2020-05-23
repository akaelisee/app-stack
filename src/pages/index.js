import React from "react"
import { Link } from "gatsby"
import {Carousel} from "react-bootstrap";


import Header from "../layout/header";
import Footer from "../layout/footer";
// import '../sass/style.scss';
// import imageI from "../../static/assets/47372301.jpg";
// import imageJ from "../../static/assets/cat-illustrations-004.jpg";
// import imageK from "../../static/assets/huaweip30pro.jpg";

const IndexPage = () => (
  <>
    <Header />
         <p>Bienvenue dans ma boutique en ligne</p> 
         <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={""}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"imageJ"}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"imageK"}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        La boutique en ligne
    <Footer />
  </>
)

export default IndexPage
