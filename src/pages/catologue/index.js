import React from 'react'
// import { graphql } from 'gatsby'

import Catalogue from '../../components/catalogue';
import Produits from '../../components/produits';
import Header from '../../layout/header';
import Footer from '../../layout/Footer';


const Index = ({data}) => {

  // togglePopup() {
  //   this.setState({
  //     showPopup : true
  //   })
  // }

  // // state login false
  // closePopup() {
  //   this.setState({
  //     showPopup : false
  //   })
  // }

  // <Link to="" onClick = {this.togglePopup} className="login-link"> Login </Link>
  // <span onClick={this.props.popUp} className="close" title="Close Modal">&times;</span>
  


    return (
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
    )
}

export const query = graphql`
  query  {
    allDirectory {
      edges {
        node {
          name
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            price
            path
            image
          }
        }
      }
      pageInfo {
        itemCount
      }
    }
  }
`
export default Index