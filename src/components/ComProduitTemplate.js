import React, {useState} from 'react';
import {Form, Modal} from 'react-bootstrap';
import { useIdentityContext } from "react-netlify-identity-widget";;



const ComProduitTemplate = (props) => {

    //Variable
  let detail = props.children.markdownRemark;
  let detailSize = props.children.markdownRemark.frontmatter.size;
  let detailColor = props.children.markdownRemark.frontmatter.color;

  // Funcion map size
  const funcSize = () => {
    return (
          detailSize.map((item, i) => (
            <option key={i}>{item}</option>
          ))
          
        )
  }
  // Funcion map color
  const funcColor = () => {
    return (
          detailColor.map((item, i) => (
            <option key={i}>{item}</option>
          ))
        )
  }


  //Fonction Detail size
  let detailListSize = () =>{

    if (detailSize){
      return(
        <Form>
          <Form.Group controlId="exampleForm">
            <Form.Label>Taille :</Form.Label>
            <Form.Control as="select" custom>
              {funcSize()}
            </Form.Control>
          </Form.Group>
      </Form>
      )
    }else{
      return(<div></div>)
    }
  }

  //Fonction Detail Color
  let detailListColor = () =>{

    if (detailColor){
      return(
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Color :</Form.Label>
            <Form.Control as="select" custom>
              {funcColor()}
            </Form.Control>
          </Form.Group>
      </Form>
      )
    }else{
      return(<div></div>)
    }
  }


  // identity
  const identity = useIdentityContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Button = () => {
    if(identity.user){
      return(
        <button
          className='snipcart-add-item'
          data-item-id="1"
          data-item-price={detail.frontmatter.price}
          data-item-name={detail.frontmatter.title}
          data-item-description={detail.frontmatter.description}
          data-item-image={detail.frontmatter.image}
          data-item-url={"https://inspiring-visvesvaraya-f559ca.netlify.app/" + detail.frontmatter.path} 
      > Ajouter au panier </button> 
      )
    }
    else{
      return(
          <button onClick={handleShow}> Ajouter au panier </button>
      )
    }
  };

  console.log(detail.frontmatter.price)

    return (
        <>
            <div className="group-detail">
                <div className="img-detail">
                  <img src={detail.frontmatter.image} alt={detail.frontmatter.title} />
                </div>
                <div className="text-detail">
                  <p>{detail.frontmatter.title}</p>
                  <p>{detail.frontmatter.description}</p>
                  <span>{detail.frontmatter.price} € </span>

                  <div className="select-detail">
                    {detailListSize()}
                    {detailListColor()}     
                  </div>
                  <div className="button-panier">
                    <Button />
                    <hr></hr>
                    <button
                      className='snipcart-add-item'
                      data-item-id= {detail.id}
                      data-item-price={detail.frontmatter.price}
                      data-item-name={detail.frontmatter.title}
                      data-item-description={detail.frontmatter.description}
                      data-item-image={detail.frontmatter.image}
                      data-item-url={"https://inspiring-visvesvaraya-f559ca.netlify.app/" + detail.frontmatter.path} 
                  > Ajouter au panier 2 </button> 
                  </div>
                  <div className="button-panier">
                    <Button />
                  </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Connexion</Modal.Title>
              </Modal.Header>
              <Modal.Body>Veuillez créer <strong>un compte</strong> avant la suite du processus &#128515;.</Modal.Body>
            </Modal>
        </>
    )
}

export default ComProduitTemplate