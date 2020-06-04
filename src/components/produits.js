import React from 'react';
import {Link} from 'gatsby';

const Produits = (props) => {
    
    let produit = props.node

    return (
        <>
            <div className="card-img" key={produit.index}>
                <Link to= {produit.path}>
                    <img src={produit.image} alt="imagea"/>
                    <div className="cards-title">
                        <p>{produit.title}</p>
                        <span>{produit.price}</span>
                    </div>
                </Link>
            </div>
        </>
    )
} 

export default Produits
