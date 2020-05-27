import React from 'react';
import {Tab, Tabs, Form, Button} from 'react-bootstrap';
import { Link, graphql } from 'gatsby';


const ComProduitTemplate = (props) => {

    //Variable
  let detail = props.children.markdownRemark.frontmatter;
  let detailSize = props.children.markdownRemark.frontmatter.size;
  let detailColor = props.children.markdownRemark.frontmatter.color;

  // Select size
  let detailListSize = detailSize = []
    && detailSize.map((item, i) => {
      return (
      <option key={i}>{item.name}</option>
      )
    });

  // Select color
    let detailListColor = detailColor = []
    && detailColor.map((item, i) => {
      return (
      <option key={i}>{item.name}</option>
      )
    });


    return (
        <>
            <div className="group-detail">
                      <div className="img-detail">
                        <img src={detail.image} alt={detail.title} />
                      </div>
                      <div className="text-detail">
                        <p>{detail.title}</p>
                        <p>{detail.description}</p>
                        <span>{detail.price} € </span>

                        <div className="select-detail">
                          {
                             detail.size
                             ? (
                              <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                  <Form.Label>Couleur :</Form.Label>
                                  <Form.Control as="select" custom>
                                    <option selected></option>
                                    {detailListSize}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                               )
                             : ''

                          }
                          {
                            detail.color
                            ? (
                              <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                  <Form.Label>Couleur :</Form.Label>
                                  <Form.Control as="select" custom>
                                    <option selected></option>
                                    {detailListColor}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                              )
                            : ''
                          }
                        </div>
                        <div className="button-panier">
                          <Link to="/"> Ajouter au panier </Link>
                        </div>
                      </div>
                  </div>
        </>
    )
}

export default ComProduitTemplate
