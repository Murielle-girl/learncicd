import React from 'react';
import './navbar.css';
import {  NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <NavLink to="/">
                    <div className="default-logo">LD</div>
                </NavLink>
            </div>
            <div className="navbar__links">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
