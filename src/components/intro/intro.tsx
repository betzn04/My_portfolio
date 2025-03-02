import React, { useState, useEffect } from 'react';
import './intro.css'; 
import Dashboard from '../dashboard/dashboard';

const Intro: React.FC = () => {
  const [showHome, setShowHome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const fadeOutTimer = setTimeout(() => {
        setShowHome(true);
      }, 2000); 

      return () => clearTimeout(fadeOutTimer);
    }, 2100); 

    return () => clearTimeout(timer);
  }, []);

  if (showHome) {
    return <Dashboard/>;
  }

  const text = "Hi, I'm Betsin!";
  const splitText = text.split("").map((char, index) => (
    <span key={index} style={{ display: 'inline-block', fontWeight:'bold'}}>{char === ' ' ? '\u00A0' : char}</span>
  ));

  return (
    <div className={`intro ${fadeOut ? 'fade-out' : ''}`}>
      <div className="split-text">
        {splitText}
      </div>
    </div>
  );
};

export default Intro;