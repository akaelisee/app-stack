// import React from 'react'
// import { graphql } from 'gatsby';
// import { Row, Col } from 'react-bootstrap';
// import Header from '../layout/header';
// import Footer from '../layout/footer';
// import SideBar from '../components/sideBar';


// const ArticleTemplate = ({data}) => {
//     console.log(data)
//     return (
//         <div className="template">
//               <Header />
//               <div className="group-template">
//                 <div className="group-template-blog">
//                   <Row>
//                     <Col md="4">
//                       <div style={{width: "100%", height: "100%"}}>
//                           <SideBar />
//                       </div>
//                     </Col>
//                     <Col md="8">
//                         <div className="detail-item">
//                           <div className="title-article">
//                               <p> {data.markdownRemark.frontmatter.title} </p>
//                           </div>
//                           <div className="sous-title">
//                               <span>{data.markdownRemark.frontmatter.created.replace('T', " ")}</span>
//                           </div>
//                           <div className="desc-article">
//                             <p>{data.markdownRemark.frontmatter.description}</p>
//                           </div>
//                           <div className="img-article">
//                             <img src= {data.markdownRemark.frontmatter.image} alt="imahe" />
//                           </div>
//                         </div>
//                     </Col>
//                   </Row>
//                 </div>
//               </div>

//               <Footer />
//         </div>
//     )
// }

// export const query = graphql`
// query ($path: String!) {
//     markdownRemark(frontmatter: {path: {eq: $path}}) {
//       frontmatter {
//         created
//         description
//         image
//         title
//       }
//     }
//   }
  
// `
// export default ArticleTemplate