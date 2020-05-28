import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import SideBar from './sideBar';

const CompBlog = (props) => {
    const blog = props.children.allMarkdownRemark.edges;
    return (
        <div className="blog-detail">
            <Row>
                <Col md="8">
                    <div className="detail-article">
                        {
                            blog.map(({node}, index) => (
                                <Card style= {{ width: "40rem"}} key={index}>
                                    <Card.Img variant="top" src={node.frontmatter.image} />
                                    <Card.Body>
                                        <Card.Title> {node.frontmatter.title} </Card.Title>
                                            <Card.Text>
                                                {node.frontmatter.description}
                                            </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        <span>{node.frontmatter.created}</span>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </div>
                    <div className="detail-article">
                        {
                            blog.map(({node}, index) => (
                                <Card style= {{ width: "40rem"}} key={index}>
                                    <Card.Img variant="top" src={node.frontmatter.image} />
                                    <Card.Body>
                                        <Card.Title> {node.frontmatter.title} </Card.Title>
                                            <Card.Text>
                                                {node.frontmatter.description}
                                            </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        <span>{node.frontmatter.created}</span>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </div>
                </Col>

                <Col md="4">
                    <div style={{width: "100%", height: "100%"}}>
                        <SideBar />
                    </div>
                </Col>
            </Row>
           
        </div>
    )
}


export default CompBlog
