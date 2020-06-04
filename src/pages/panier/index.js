import React from 'react';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import {Card} from 'react-bootstrap';
import { Link } from 'gatsby';

const Index = () => {
    return (
        <div className="panier">
           <Header /> 
           <div className="panier-group">
                <div className="panier-article"> 
                    <Card style={{ width: '40rem' }}>
                        <Card.Header as="h5">Articles dans le panier</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <div className="content-panier">
                                        <div className="panier-vide">
                                            <i className="fas fa-shopping-cart" />
                                            <p>Votre panier est vide !</p>
                                            <Link to="/"> Continuez vos achats </Link>
                                        </div>
                                    </div>
                                </blockquote>
                            </Card.Body>
                    </Card>
                </div>
                <div className="panier-paye">
                    <Card style={{ width: '19rem' }}>
                        <Card.Header>Résumé de la commande</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <span> Prix article(s) : </span>
                                </blockquote>
                                <div className="btn-cart">
                                    <Link to="/"> Passer la commande </Link>
                                </div>
                            </Card.Body>
                    </Card>
                </div>
           </div>
            <Footer />
        </div>
    )
}

export default Index
