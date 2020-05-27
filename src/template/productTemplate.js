import React, {useState} from 'react';
import { graphql } from 'gatsby';
import {Tab, Tabs} from 'react-bootstrap';
import ComProduitTemplate from '../components/ComProduitTemplate';
import Header from '../layout/header';
import Footer from '../layout/footer';

 const ProduitTemplate = ({data}) => {

  const [key, setKey] = useState('home');
  
    return (
        <div className="template">
            <Header /> 
            <div className="group-template"> 
              <div className="template-detail">
                  <div className="propos">
                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                      <Tab eventKey="home" title="Détail produit">
                          <ComProduitTemplate children ={data}/>     
                      </Tab>
                      <Tab eventKey="profile" title="Recommendation">
                        {/* <Sonnet /> */}

                      </Tab>
                    </Tabs>
                  </div>
              </div>
            </div>
            <Footer /> 
        </div>
    )
}

export const query = graphql`
    query ($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
          frontmatter {
            title
            image
            description
            price
            size {
              name
            }
            color {
              name
            }
          }
        }
      }
`

export default ProduitTemplate