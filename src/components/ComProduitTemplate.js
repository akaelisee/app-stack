import React from 'react';
import {Form} from 'react-bootstrap';
import { Link } from 'gatsby';


const ComProduitTemplate = (props) => {

    //Variable
  let detail = props.children.markdownRemark.frontmatter;
  let detailSize = props.children.markdownRemark.frontmatter.size;
  let detailColor = props.children.markdownRemark.frontmatter.color;

  // Funcion map size
  const funcSize = () => {
    return (
          detailSize.map((item, i) => (
            <option key={i}>{item.name}</option>
          ))
        )
  }

  //Fonction Detail size
  let detailListSize = () =>{

    if (detailSize){
      return(
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Taille :</Form.Label>
            <Form.Control as="select" custom>
              <option selected></option>
              {funcSize()}
            </Form.Control>
          </Form.Group>
      </Form>
      )
    }else{
      return(<div></div>)
    }
  }


  
  // Funcion map color
  const funcColor = () => {
    return (
          detailColor.map((item, i) => (
            <option key={i}>{item.name}</option>
          ))
        )
  }
   
  //Fonction Detail Color
  let detailListColor = () =>{

    if (detailColor){
      return(
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Color :</Form.Label>
            <Form.Control as="select" custom>
              <option selected></option>
              {funcColor()}
            </Form.Control>
          </Form.Group>
      </Form>
      )
    }else{
      return(<div></div>)
    }
  }

    return (
        <>
            <div className="group-detail">
                      <div className="img-detail">
                        <img src={detail.image} alt={detail.title} />
                      </div>
                      <div className="text-detail">
                        <p>{detail.title}</p>
                        <p>{detail.description}</p>
                        <span>{detail.price} € </span>

                        <div className="select-detail">
                          {detailListSize()}
                          {detailListColor()}
                          
                        </div>
                        <div className="button-panier">
                          <Link to="/"> Ajouter au panier </Link>
                        </div>
                      </div>
                  </div>
        </>
    )
}

export default ComProduitTemplate
