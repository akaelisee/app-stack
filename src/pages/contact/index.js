import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import {Form, Button} from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'gatsby'


const Index = () => {
  
    return (
        <>
        <Header /> 
        <div className="container">
            <div className='group-contact'>
                <div className="breadcrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to="/">
                            Accueil
                        </Link>
                        <Link color="inherit" to="/blog">
                            Blog
                        </Link>
                        <Typography color="textPrimary">Breadcrumb</Typography>
                    </Breadcrumbs>
                </div>
                <div className="title-contact">
                    <h3> Contactez nous </h3>
                </div>
                <div className="contact-item">
                    <div className="form-contact">
                        <Form action="/success" name="contact" method="POST" data-netlify="true">
                            <Form.Group  controlId="formGridEmail">
                                <Form.Label>Nom Complét</Form.Label>
                                <Form.Control type="text" name="firstName" placeholder="Albert Jean" />
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Adresse mail</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Exemple@mail.co" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Commentaire</Form.Label>
                                <Form.Control as="textarea" rows="3" name="description"/>
                            </Form.Group>

                            <input type="hidden" name="form-name" value="contact"/>

                            <Button variant="" type="submit" style={{background: "teal", color: "#fff"}} >
                                Envoyer
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Index