import React, { useState, useEffect } from 'react';
import Home from '../home/home';
import './intro.css'; // Import the CSS file

const Intro: React.FC = () => {
  const [showHome, setShowHome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowHome(true);
      }, 1900); // Match this duration with the CSS transition duration
    }, 2100); // 600ms for initial display + 300ms for fade-out

    return () => clearTimeout(timer);
  }, []);

  if (showHome) {
    return <Home />;
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