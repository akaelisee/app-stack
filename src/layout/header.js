import React from "react";
import { Link } from "gatsby";
import {useState} from "react";
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";


const Header = () => {

    // initNetlifyIdentity()

    const identity = useIdentityContext();
    const [dialog, setDialog] = useState(false);
    
    const funcIdentity = () =>{

        if(identity.user) {

            return identity && identity.user ?(
                <ul>
                    <li>
                        <a onClick={() => setDialog(true)}>Bonjour, {identity.user.user_metadata.full_name} !</a>
                        <ul>
                            <li><Link to="/account">Mon Compte</Link></li>
                        </ul>
                    </li>
                    <li>
                        <a className="snipcart-checkout">   
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            ): null
        }else{
            return (
                <ul>
                    <li>
                        <a onClick={() => setDialog(true)}>Connexion</a>
                        <ul>
                            <li><a onClick={() => setDialog(true)}>Inscrivez-vous</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="snipcart-checkout">   
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            )
        }
    }

    return(
        <>
            <header>
                {/* <NetlifyIdentity /> */}
                <nav className="nav-bar">
                    <div className="logo">
                        <Link to ="">E. SHOP</Link>
                    </div>
                    <div className ="nav-item">
                        <ul>
                            <li><Link to ="/">Accueil</Link></li>
                            <li><Link to ="/catologue">Nos produits</Link></li>
                            <li><Link to ="/blog">Blog</Link></li>
                            <li><Link to ="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    {/* <Identify /> */}
                    <div className="nav-achat">
                        {funcIdentity()}   
                    </div>
                </nav>
            </header>
            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        </>  
    )
}

export default Header