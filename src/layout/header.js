import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import {Navbar, Nav, Container} from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => (
    <>
        <header>
            <nav className="nav-bar">
                <div className="logo">
                    <Link to ="">E. SHOP</Link>
                </div>
                <div className ="nav-item">
                    <ul>
                        <li><Link to ="">Home</Link></li>
                        <li><Link to ="">Categories</Link></li>
                        <li><Link to ="">Contact</Link></li>
                    </ul>
                </div>
                <div className="nav-achat">
                    <ul>
                        <li><Link to ="">Connexion</Link></li>
                        <li><Link to =""><i class="fas fa-shopping-cart"></i></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>  
)

export default Header