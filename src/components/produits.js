import React from 'react';
import {Link} from 'gatsby';
import {Row} from 'react-bootstrap';
// import { graphql } from 'gatsby'
// import imageCard from '../sass/image/woman-in-peach-color-and-red-floral-sweatshirt-holding-gray-794062.jpg'


const Produits = (props) => {

    const produit = props.children.allMarkdownRemark;
    return (
        <div className="produits"> 
            <div className="title">
                <p className="title"> Produit</p>
                <span> {produit.totalCount} Résultats</span>
            </div>

            <hr/>
            
            <div className="cards">
                <div className="produit-item">
                    <Row>
                        {
                            produit.edges.map(({node}, index) => (
                                <div className="card-img" key={index}>
                                    <Link to= {"/" + node.frontmatter.path}>
                                        <img src={node.frontmatter.image} alt="imagea"/>
                                        <div className="cards-title">
                                            <p>{node.frontmatter.title}</p>
                                            <span>{node.frontmatter.price}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Produits

