import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import {Card, Form} from 'react-bootstrap';
import {Link} from 'gatsby';
import imageAvert from '../sass/image/57936514-avertissement.jpg'

const SideBar = () => {
    return (
        <>
            <div className="newsletter">
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <p>NEWSLETTER</p>
                            <Card.Text>
                                <Form className="forme">
                                    <Form.Control size="lg" type="email" placeholder="email@example.com" />
                                </Form>
                            </Card.Text>
                            <div className="btn-link">
                                <Link to="/">Souscrire</Link>
                            </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="newsletter">
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <p>AVERTISSEMENT</p>
                        <Card.Img variant="top" src={imageAvert} />
                    </Card.Body>
                </Card>
            </div>
            <div className="newsletter">
                <Card style={{ width: '20rem' }}>
                    <StaticQuery query={query} render={(data => (
                        <div className="recent">
                            <p>POSTS RECENTS</p>
                            {
                                data.allMarkdownRemark.edges.map(({node}) => (
                                    <Card.Body key={node.id}>
                                        <Card.Img variant="top" src={node.frontmatter.image} />
                                        <p>{node.frontmatter.title}</p>
                                    </Card.Body>
                                ))
                            }
                        </div>

                    ))}/>
                    
                </Card>
            </div>
        </>
    )
}

export const query = graphql`
 query  {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/entries/"}}, sort: {fields: frontmatter___created, order: DESC}, limit: 2) {
    edges {
      node {
        id
        frontmatter {
          title
          path
          image
        }
      }
    }
  }
}

`
export default SideBar
