import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import {Card, Col} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Recommandation = ({data}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (
        <div className="recommandation">
            <div className="title">
                <h1>Poduit Recommandé</h1>
            </div>
            <StaticQuery query={query} render={(data => (
                <div className="recent">
                <Slider {...settings}>
                    {
                        data.allMarkdownRemark.edges.map(({node}) => (
                            <Col>
                                <Card key={node.id}>
                                    <Link to= {node.frontmatter.path}>
                                        <Card.Img variant="top" src={node.frontmatter.image} style= {{height: "200px"}} />
                                    </Link>
                                </Card>
                            </Col>
                        ))
                    }
                    </Slider>
                </div>
            ))}/>
        </div>
    )
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark(sort: {order: DESC, fields: id}, limit: 10, filter: {fields: {sourceName: {ne: "blog"}}}) {
      edges {
        node {
          frontmatter {
            title
            price
            image
            path
          }
        }
      }
    }
  }
`

export default Recommandation
