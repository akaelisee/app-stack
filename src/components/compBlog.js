import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import SideBar from './sideBar';
import {Link} from 'gatsby'

const CompBlog = (props) => {
    const blog = props.children.allMarkdownRemark.edges;
    return (
        <div className="blog-detail">

            {/* Title */}
            <div className="title-blog">
                <h1>Trouvez des outils, des conseils et un aperçu pour amener votre entreprise à un meilleur niveau .</h1>
            </div>

            <div className="flex-blog">
                <div className="detail-article">
                    {
                        blog.map(({node}, index) => (
                            <div className="article-item"  key={index}>
                                <div className="img-item">
                                        <Link to ={node.frontmatter.path}> <img src={node.frontmatter.image} alt="blog" /> </Link>
                                </div>
                                <div className="title-item">
                                    <Link to ={node.frontmatter.path}>
                                        <span>
                                            {
                                                node.frontmatter.title.charAt(0).toUpperCase() + node.frontmatter.title.substring(1).toLowerCase()
                                            }
                                        </span>
                                    </Link>
                                </div>
                                <div className="date-item">
                                        <span>{node.frontmatter.created}</span>
                                </div>
                                <div className="desc-item">
                                        <span>
                                            {
                                                node.frontmatter.description.charAt(0).toUpperCase() + node.frontmatter.description.substring(1).toLowerCase()
                                            }
                                        </span>
                                </div>
                                <Link to ={node.frontmatter.path} className="suite"><span> Lire la suite </span></Link>
                            </div>
                        ))
                    }
                </div>
                <div className="side-blog">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}


export default CompBlog



{/* <Link to={node.frontmatter.path}>
                                        <Card style= {{ width: "22rem"}} className="maparticle">
                                            <Card.Img variant="top" src={node.frontmatter.image} />
                                            <Card.Body>
                                                <Card.Title> {node.frontmatter.title} </Card.Title>
                                                    <Card.Text className="desc-task">
                                                        {node.frontmatter.description} 
                                                    </Card.Text>
                                                <p className="date-article">{node.frontmatter.created}</p>
                                            </Card.Body>
                                        </Card>
                                    </Link> */}