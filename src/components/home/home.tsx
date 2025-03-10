import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaCode, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Nav from '../nav/nav';
import './home.css';
import content from '../../content.json';
import Parallax from '../../common/parallax';
import DecryptedText from '../../common/DecryptedText';
import { SiNotion } from 'react-icons/si';

const Home = () => {
    return (
        <>
            <section className="home" id='home'>
                <div className="home-content">
                    <Parallax speed={0.3}>
                        <div className='home-header'>
                            <DecryptedText text={`${content.personalInfo.name}.`} speed={100} maxIterations={20} />
                        </div>
                        <p>I build things for the web.</p>
                        <p className="home-subtitle">I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
                        <div className="home-buttons">
                            <a href="#projects" className="btn-secondary">
                                <FaCode /> View My Work
                            </a>
                            <a href="#contact" className="btn-secondary">
                                <FaEnvelope /> Get in Touch
                            </a>
                        </div>
                        <br />
                    </Parallax>
                </div>
            </section>
            <div className="vertical-buttons">
                <a href="https://glen-beef-cd1.notion.site/Betsin-Kuruvila-Mekkat-Front-end-Developer-1adb4ec4942a800ba712de7843b78e2c" target='_blank' className="btn buttons">
                    <SiNotion />
                </a>
                <a href="https://www.linkedin.com/in/betsin-kuruvila-mekkat/" target='_blank' className="btn buttons">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/betzn04" target='_blank' className="btn buttons">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/b3tx_n/" target='_blank' className="btn buttons">
                    <FaInstagram />
                </a>
                <p className='line'></p>
            </div>
            <div className="scroll-down" onClick={() => { window.scrollTo({ top: 750, behavior: "smooth" }) }}>
                <FaChevronDown />
            </div >
        </>
    );
};

export default Home;