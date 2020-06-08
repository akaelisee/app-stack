import React , {useEffect} from 'react';
import {graphql} from 'gatsby';
import CompBlog from '../../components/compBlog';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { Spinner } from 'react-bootstrap';


const Index = ({data}) => {

    useEffect(() => {
        const loader = document.querySelector('.loading');
        loader.classList.add('hidden');
    })
  
    return (
        <>
           <Header/>
                <div className='container'>
                <div className="loading">
                    <Spinner animation="border" className="loader" />
                </div>
                    <CompBlog  children= {data}/>
                </div>
           <Footer />
        </>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {fields: frontmatter___created, order: ASC}) {
        edges {
            node {
            frontmatter {
                title
                path
                image
                description
                created(formatString: "MMM Do YYYY")
            }
            }
        }
        }
    }
`

export default Index
