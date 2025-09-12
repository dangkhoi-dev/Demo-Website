import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from '../Image/Logo.png';

const Navbar = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="navbar">
            <Link to="/" className="logo">
                <img src={LogoImage} alt="Logo" className="logo-image" />
                <span className="logo-text">ML&IoT Lab</span>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link 
                            to="/" 
                            className={isActive('/') ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={isActive('/about') ? 'active' : ''}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/project" 
                            className={isActive('/project') ? 'active' : ''}
                        >
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/demo" 
                            className={isActive('/demo') ? 'active' : ''}
                        >
                            Demo
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;