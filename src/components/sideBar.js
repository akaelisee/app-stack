import React, {useState} from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {Card, Form} from 'react-bootstrap';
import { navigate } from 'gatsby';

import imageAvert from '../sass/image/57936514-avertissement.jpg'

const SideBar = () => {

    const [inputForm, setInputForm] = useState({
        email: ""
    })

    const handleChange = (e) => {
        setInputForm({
            [e.target.name] : e.target.value
        })
    }


    const submitForm = (e) =>{
        e.preventDefault();
        const datas = { email: inputForm.email };

        fetch('https://inspiring-visvesvaraya-f559ca.netlify.app/.netlify/functions/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            body: JSON.stringify( datas )
        })
        .then(res => {
            console.log(res.ok)
            return navigate('../pages/blog/success.js');
        })
        .catch(err => {
            console.log(err)
        });
    }
    return (
        <>
            <div className="newsletter">
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <p>NEWSLETTER</p>
                            <Card.Text>
                                <Form className="forme" onSubmit={(e) =>submitForm(e)}>
                                    <Form.Control size="lg" 
                                        type="email" 
                                        value = {inputForm.email} 
                                        name="email" 
                                        onChange={handleChange} 
                                        placeholder="email@example.com" 
                                    />

                                    <div className="btn-link">
                                        <button type="submit">Souscrire</button>
                                    </div>
                                </Form>
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="newsletter item">
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <p>AVERTISSEMENT</p>
                        <Card.Img variant="top" src={imageAvert} />
                    </Card.Body>
                </Card>
            </div>
            <div className="newsletter item">
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
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/entries/"}}, sort: {fields: frontmatter___created, order: DESC}, limit: 1) {
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
