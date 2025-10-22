import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a separate CSS file for Navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">EduRPG Dashboard</Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/missions">Misión</Link></li>
                <li><Link to="/progress">Progreso</Link></li>
                <li><Link to="/intervention">Intervención</Link></li>
                <li><Link to="/gamification">Gamificación</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;