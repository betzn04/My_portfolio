import React from 'react';
import { FaCode, FaEnvelope } from 'react-icons/fa';
import Nav from '../nav/nav';
import './home.css';
import content from '../../content.json';
import Parallax from '../../common/parallax';
import DecryptedText from '../../common/DecryptedText'

const Home = () => {
    return (
        <>
            <Nav />
            <section className="home">
                <div className="home-content">
                    <Parallax speed={0.5}>
                        <div className='home-header'>
                            <DecryptedText text={`I'm ${content.personalInfo.name}`} speed={100} maxIterations={20} />
                        </div>
                        <h1 className="home-title">Welcome to My Portfolio</h1>
                        <p className="home-subtitle">A Passionate Developer & Creative Thinker</p>
                        <div className="home-buttons">
                            <a href="#projects" className="btn-secondary">
                                <FaCode /> View My Work
                            </a>
                            <a href="#contact" className="btn-secondary">
                                <FaEnvelope /> Get in Touch
                            </a>
                        </div>
                    </Parallax>
                </div>
                <div className="home-image">
                    <img src="/images/photo.jpg" alt="Betsin" loading='lazy' />
                </div>
            </section>
        </>
    );
};

export default Home;