import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import {Form, Col, Button} from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import {Link} from 'gatsby'


const Index = () => {
  
    return (
        <div className="contact">
            <Header /> 
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
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Prénom</Form.Label>
                                    <Form.Control type="text" name="firstName" placeholder="Prénom" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" name="lastName" placeholder="Nom" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                            <input type="hidden" name="form-name" value="contact"/>

                            <Button variant="primary" type="submit">
                                Envoyer
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index