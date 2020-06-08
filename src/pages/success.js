import React from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header';
import { Alert } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'gatsby';

const success = () => {
    return (
        <>
            <Header />
                <div className="container">
                    <div className="breadcrumb">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to="/">
                                Accueil
                            </Link>
                            <Link color="inherit" to="/catologue">
                                Produit
                            </Link>
                            <Link color="inherit" to="/blog">
                                Blog
                            </Link>
                            <Typography color="textPrimary">Contact</Typography>
                        </Breadcrumbs>
                    </div>
                    <Alert variant="primary">
                        Message envoyé, nous vous remercions
                    </Alert>
                    
                </div>
            <Footer />
        </>
    )
}

export default success
