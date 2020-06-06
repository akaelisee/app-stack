import React from "react";
import { Link } from "gatsby";
import {useState} from "react";
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";


const Header = () => {

    //Variable
    const identity = useIdentityContext();
    
    // Variable UseState
    const [dialog, setDialog] = useState(false);

   
        // Responsible NavBar
        const navBar = () => {
           let element = document.querySelectorAll(".item");
           let elementToggle = document.querySelector(".toggle");
           if(element){
               let li_array = Array.prototype.slice.call(element);
               li_array.forEach(element => {
                   element.classList.toggle("active")
               });
               elementToggle.classList.toggle("toggle-tab")
           } 
        }


    // initNetlifyIdentity()

    const funcIdentity = () =>{

        if(identity.user) {

            return identity && identity.user ?(

                    <li className="btne item account">
                         <a onClick={() => setDialog(true)}>Bonjour, {identity.user.user_metadata.full_name} !</a>
                         <ul className="show" >
                            <li><Link to="/account">Mon Compte</Link></li>
                        </ul>
                    </li>
            ): null
        }else{
            return (
                <li className="btne item account">
                    <a onClick={() => setDialog(true)}> Connexion </a>
                    <ul>
                        <li><a onClick={() => setDialog(true)}>Inscrivez-vous</a></li>
                    </ul>
                </li>
            )
        }
    }

    return(
        <>
            <header>
                {/* <NetlifyIdentity /> */}
                <nav className="nav-bar">
                    <ul className="menu">
                        <li className="logo"><Link to ="/">Ak<span>Shop</span> </Link></li>
                        <li className="item"><Link to ="/" >Accueil</Link></li>
                        <li className="item"><Link to ="/catologue">Nos produits</Link></li>
                        <li className="item"><Link to ="/blog">Blog</Link></li>
                        <li className="item"><Link to ="/contact">Contact</Link></li>
                            {
                                funcIdentity()
                            }
                        <li className="btne snipcart-checkout item "><a><i className="fas fa-shopping-cart"></i></a></li>
                        <li className="toggle" onClick={navBar}><i className="fas fa-bars"></i></li>
                    </ul>
                </nav>
            </header>
            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        </>  
    )
}

export default Header