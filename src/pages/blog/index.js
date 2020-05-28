import React from 'react';
import {graphql} from 'gatsby';
import CompBlog from '../../components/compBlog';
import Header from '../../layout/header';
import Footer from '../../layout/footer';

const Index = ({data}) => {
    return (
        <div className='blog'>
           <Header/>
            <div className='group-blog'>
                <CompBlog  children= {data}/>
            </div>
           <Footer />
        </div>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/entries/"}}, sort: {fields: frontmatter___created, order: ASC}) {
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
