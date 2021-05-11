import React from 'react';

import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light main-elevation">
            <NavLink 
                className="navbar-brand"
                to="/">
                Logo
            </NavLink>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo01" 
                aria-controls="navbarTogglerDemo01" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">   
                    <i className="material-icons burguer-icon">menu</i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {/* main navLinks here */}
                </ul>
            </div>
        </nav>
    )
}
