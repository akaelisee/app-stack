import React, {useState} from 'react';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { Card } from 'react-bootstrap';
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget";
import { navigate } from "gatsby";


const Index = () => {

    const identity = useIdentityContext();
    const [dialog, setDialog] = useState(false);

    const funcAccount = () => {

        if(identity.user){
            return(
                <>
                    <div className="paramettre">
                        <p> {identity.user.user_metadata.full_name.toUpperCase().substr(0,1)} </p>
                        <span>
                            {
                                identity.user.user_metadata.full_name.charAt(0).toUpperCase() + identity.user.user_metadata.full_name.substring(1).toLowerCase()
                            }
                        </span>
                        <p> {identity.user.email} </p>
                    </div>
                </>
            )
        }
        else{
            return navigate("/")
        }
    }

    return (
        <div className="account">
            <Header/>
            <div className="group-account">
                <div className="account-item">
                    <Card style={{margin: "50px 0 100px 0"}} >
                        <Card.Header style={{fontSize: "30px"}}>Mon Compte</Card.Header>
                        <Card.Body>
                            <div className="content-account">
                                <Card  className="first-card">
                                    <Card.Body>
                                        <Card.Title>INFORMATIONS PERSONNELLES</Card.Title>
                                        <hr />
                                        <Card.Text>
                                            {funcAccount()}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />

            <Footer />
        </div>
    )
}

export default Index
