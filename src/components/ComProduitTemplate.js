import React from 'react';
import {Form, Popover, OverlayTrigger} from 'react-bootstrap';
import { useIdentityContext } from "react-netlify-identity-widget";;



const ComProduitTemplate = (props) => {

    //Variable
  let detail = props.children.markdownRemark;
  let detailSize = props.children.markdownRemark.frontmatter.size;
  let detailColor = props.children.markdownRemark.frontmatter.color;

  // Funcion map size
  const funcSize = () => {
    // return (
    //       // detailSize.map((item, i) => (
    //       //   <option key={i}>{item.name}</option>
    //       // ))
          
    //     )
  }

  //Fonction Detail size
  let detailListSize = () =>{

    if (detailSize){
      return(
        <Form>
          <Form.Group controlId="exampleForm">
            <Form.Label>Taille :</Form.Label>
            {/* <Form.Control as="select" custom>
              <option selected></option>
              {funcSize()}
            </Form.Control> */}
          </Form.Group>
      </Form>
      )
    }else{
      return(<div></div>)
    }
  }


  
  // Funcion map color
  const funcColor = () => {
    // return (
    //       detailColor.map((item, i) => (
    //         <option key={i}>{item.name}</option>
    //       ))
    //     )
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
              {/* {funcColor()} */}
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

  // Modal
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Connexion</Popover.Title>
      <Popover.Content>
        Veuillez créer <strong>un compte</strong> avant la suite du processus &#128515;.
      </Popover.Content>
    </Popover>
  );

  const Button = () => {
    if(identity.user){
      return(
        <button
          className='snipcart-add-item'
          data-item-id={detail.id}
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
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <button> Ajouter au panier </button>
        </OverlayTrigger>
      )
    }
  };



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
                  </div>
                  {
                    console.log(detail.id)
                  }
                </div>
            </div>
        </>
    )
}

export default ComProduitTemplate
