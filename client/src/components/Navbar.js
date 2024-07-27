import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ cartItemCount }) => {
    return (
        <nav className={'navbar'}>
            <h1 className={'navbar-title'}>COZY THREADS</h1>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/cart'}>Cart ({cartItemCount})</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;