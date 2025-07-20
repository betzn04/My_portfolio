import React, { useEffect, useState, useCallback } from 'react';
import './nav.css';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 70) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [controlNavbar]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className={`navbar ${isVisible ? 'visible' : 'hidden'}`}
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="nav-toggle"
        onClick={toggleNav}
        role="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="nav-link">
        <div className={`shiny-text nav-links ${isOpen ? 'open' : 'closed'}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/assets/doc/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <div
          className="dark-toggle-btn"
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{ marginRight: 10, background: 'none', border: 'none', cursor: 'pointer', fontSize: 18 }}
        >
          {darkMode ? <FaSun color="#FFD600" /> : <FaMoon color="#3a86ff" />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;