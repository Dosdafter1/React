import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/counter">Counter</NavLink>
           <NavLink to="/users">Users</NavLink>
           <NavLink to="/films">Films</NavLink>
           <NavLink to="/film-api">FilmsAPI</NavLink>
        </header>
    );
}

export default Header;
