import React from "react";
import { Link } from "gatsby";
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";

// Init netlifyIdentity
// function initNetlifyIdentity() {
//     console.log("initNet callet");
//     const script = document.createElement("script");
//     script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
//     script.async = true;
//     document.body.appendChild(script);
// }

//Open Modal netlifyIdentity
// function openNetlifyModal() {
//     const netlifyIdentity = window.netlifyIdentity;

//     if (netlifyIdentity) {
//         netlifyIdentity.open();
//     } else {
//         console.log('error')
//     }
// }

// class NetlifyIdentity extends Component {
//     componentDidMount() {

//     }
//     render() {
//         return (
//              <div></div>
//         );
//     }
// }
const Header = () => {

    // initNetlifyIdentity()

    const identity = useIdentityContext();
    const [dialog, setDialog] = React.useState(false);
    const name = (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName";
    console.log(JSON.stringify(identity))
    const isLoggedIn = identity && identity.isLoggedIn
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
                                <Link onClick={() => setDialog(true)}> 
                                    {isLoggedIn ? `Hello ${name}, Log out here!` : "Connexion"}
                                </Link>
                            </li>
                            <li><Link to ="/panier"><i className="fas fa-shopping-cart"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
        </>  
    )
}

export default Header