import React, { useEffect, useState, useCallback } from 'react';
import './nav.css';
import { motion } from 'framer-motion';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    let timeoutId: NodeJS.Timeout;
    
    const debounceScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(controlNavbar, 100);
    };

    window.addEventListener('scroll', debounceScroll);
    return () => {
      window.removeEventListener('scroll', debounceScroll);
      clearTimeout(timeoutId);
    };
  }, [controlNavbar]);

  const animationDuration = `5s`;
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className={`navbar ${isVisible ? 'visible' : 'hidden'}`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <>
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
          <div className={`shiny-text nav-links ${isOpen ? 'open' : 'closed'}`} style={{ animationDuration }}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href='/assets/doc/resume.pdf' target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </>
    </motion.nav>
  );
};

export default Nav;