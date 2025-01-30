import React from 'react';
import { FaCode, FaEnvelope } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Nav from '../nav/nav';
import './home.css';
import content from '../../content.json';
import Parallax from '../../parallax';

const Home = () => {
    return (
        <>
            <Nav />
            <section className="home">
                <div className="home-content">
                    <Parallax speed={0.5}>
                    <h3 className="home-header">I'm {content.personalInfo.name}</h3>
                    <h1 className="home-title">Welcome to My Portfolio</h1>
                        <p className="home-subtitle">A Passionate Developer & Creative Thinker</p>
                    <div className="home-buttons">
                        {/* <Link to="#projects" className="btn-primary"> */}
                        <FaCode /> View My Work
                        {/* </Link> */}
                        {/* <Link to="#contact" className="btn-secondary"> */}
                        <FaEnvelope /> Get in Touch
                        {/* </Link> */}
                    </div>
                    </Parallax>
                </div>
                <div className="home-image">
                    <img src="public\assets\Passport size.jpg" alt="Your Name" />
                </div>
            </section>
        </>
    );
};

export default Home;