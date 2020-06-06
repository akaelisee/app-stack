import React from 'react';
import {graphql} from 'gatsby';
import CompBlog from '../../components/compBlog';
import Header from '../../layout/header';
import Footer from '../../layout/footer';

const Index = ({data}) => {
    return (
        <>
           <Header/>
                <div className='container'>
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
