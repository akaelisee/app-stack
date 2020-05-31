import React from "react";
import { Link } from "gatsby";
import {useState} from "react";
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import {BuyButton} from 'gatsby-plugin-snipcart'


const Header = () => {

    // initNetlifyIdentity()

    const identity = useIdentityContext();
    const [dialog, setDialog] = useState(false);
    const name = ` (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name)
            || (identity.user.user_metadata.full_name) || "NoName";`
           

            
    console.log(JSON.stringify(identity));
    const isLoggedIn = identity && identity.isLoggedIn;
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
                    <div className="nav-achat">
                        <ul>
                            <li>
                                <a onClick={() => setDialog(true)}> 
                                    {isLoggedIn ? `Bonjour ${name} !` : "Connexion"}
                                </a>
                            </li>
                            <li>
                                <a className="snipcart-checkout">   
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        </>  
    )
}

export default Header