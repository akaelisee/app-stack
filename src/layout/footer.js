import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className = "footer-downl">
            <div className="footer-logo">
                <p className="logo"><Link to ="/">Ak<span>Shop</span> </Link></p>
            </div>
            <div className="copy">
                <ul>
                    <li className="item"><Link to ="/" >Accueil</Link></li>.
                    <li className="item"><Link to ="/catologue">Produits</Link></li>.
                    <li className="item"><Link to ="/blog">Blog</Link></li>.
                    <li className="item"><Link to ="/contact">Contact</Link></li>
                </ul>
            </div>
                
        </footer>
    )
}

export default Footer