import React from 'react';
import './header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__content">
                <h1 className="header__title">My Portfolio</h1>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item"><a href="#about">About</a></li>
                        <li className="header__nav-item"><a href="#projects">Projects</a></li>
                        <li className="header__nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;