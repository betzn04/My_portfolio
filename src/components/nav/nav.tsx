import React, { useEffect, useState } from 'react';
import './nav.css';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        setIsVisible(true);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const animationDuration = `5s`;
    const toggleNav = () => {
        console.log('Nav toggle clicked');
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="nav-toggle" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className="nav-link">
                <div className={`shiny-text nav-links ${isOpen ? 'open' : ''}`} style={{ animationDuration }}>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#home">Home</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;