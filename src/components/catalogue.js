import React from 'react';
import {Link} from 'gatsby';

const Catalogue = (props) => {
    console.log(props);

    const categories = props.children.allMarkdownRemark;

    return (
        <div className="group-cataloge">
            <h3> Catégories </h3>
            <div className="cataloge-item">
                <ul>
                    {
                        categories.edges.map(({node}, index) => (
                            <li key={index}>
                                <Link to="">  
                                    <i className="fas fa-chevron-right"></i>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


export default Catalogue