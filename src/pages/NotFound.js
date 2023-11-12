import React from 'react';
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <h3>Désolé cette page n'existe pas! 😒</h3>
                <NavLink exact to="/">
                    <i className="bi bi-house-door-fill"></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
            
        </div>
    );
};

export default NotFound;