import React, { useState } from 'react';
import './nav.css';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const animationDuration = `5s`;
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className={`shiny-text nav-links ${isOpen ? 'open' : ''}`} style={{ animationDuration }}>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#home">Home</a>
            </div>
            <div className="nav-toggle" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Nav;