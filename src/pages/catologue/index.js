import React from 'react';
import { graphql } from 'gatsby'

import Catalogue from '../../components/catalogue';
import Produits from '../../components/produits';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
// import {Modal, Button} from 'react-bootstrap'


const Index = ({data}) => {

    return (
      <>

        <div className="catalogue">

            <Header />

            <div className="content-catalogue">
                <div className="sidebar">
                   <Catalogue children={data} />
                </div>
                <div className="right-catalogue">
                    <Produits children={data}/>
                </div>
            </div>

            <Footer />    
        </div>
      </>
    )
}

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          description
          image
          path
          price
        }
        fields {
          sourceName
        }
        fileAbsolutePath
      }
    }
    totalCount
  }
}
`
export default Index