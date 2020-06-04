import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'gatsby';

const Success = () => {
    return (
        <div className="success">
            <Card className="text-center">
                <Card.Header>Newletter E.Shop</Card.Header>
                <Card.Body>
                    <Card.Title>Souscription Reussie</Card.Title>
                    <Card.Text>
                        Salut,
                         Nous sommes heureux que vous soyez ici. Nous vous tiendrons au courant de nos dernières nouvelles et offres spéciales
                    </Card.Text>
                    <div className="btn">
                        <Link to='/' className="btn-home">Retour à l'acceuil </Link>
                        <Link to='/blog' className="btn-blog">Retour au Blog </Link>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted"><a href="https://mailchimp.com" target="_blank" rel="noopener noreferrer">MailChimp</a></Card.Footer>
            </Card>
        </div>
    )
}

export default Success
