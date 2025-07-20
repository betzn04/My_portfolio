import React from 'react';
import { FaChevronDown, FaCode, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './home.css';
import content from '../../content.json';
import Parallax from '../../common/parallax';
import DecryptedText from '../../common/DecryptedText';
import { SiNotion } from 'react-icons/si';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://glen-beef-cd1.notion.site/Betsin-Kuruvila-Mekkat-Front-end-Developer-1adb4ec4942a800ba712de7843b78e2c',
    icon: <SiNotion />
  },
  {
    href: 'https://www.linkedin.com/in/betsin-kuruvila-mekkat/',
    icon: <FaLinkedin />
  },
  {
    href: 'https://github.com/betzn04',
    icon: <FaGithub />
  },
  {
    href: 'https://www.instagram.com/b3tx_n/',
    icon: <FaInstagram />
  }
];

const Home = () => {
    return (
        <>
            <section className="home" id='home'>
                <div className="home-content">
                    <Parallax speed={0.3}>
            <motion.div
              className='home-header'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 500 }}>
                Hi, I'm
              </span>
              <DecryptedText text={` ${content.personalInfo.name}.`} speed={100} maxIterations={20} />
            </motion.div>
            <motion.p
              className="home-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', fontWeight: 500 }}
            >
              I build things for the web.
            </motion.p>
            <motion.p
              className="home-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            >
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </motion.p>
            <motion.div
              className="home-buttons"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.7 }
                }
              }}
            >
              <motion.a
                href="#projects"
                className="btn-secondary"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaCode style={{ marginRight: 8 }} /> View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaEnvelope style={{ marginRight: 8 }} /> Get in Touch
              </motion.a>
            </motion.div>
                        <br />
                    </Parallax>
                </div>
        <motion.div
          className="vertical-buttons"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 1.1 }
            }
          }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="buttons"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.18, color: 'var(--color-primary)' }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ color: 'var(--color-text)', background: 'none', border: 'none', boxShadow: 'none', fontSize: '1.7rem', padding: 0 }}
            >
              {link.icon}
            </motion.a>
          ))}
          <div className="line"></div>
        </motion.div>
        <motion.div
          className="scroll-down"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          onClick={() => { window.scrollTo({ top: 750, behavior: "smooth" }) }}
        >
          <FaChevronDown />
        </motion.div>
            </section>
      <div className="home-fade-bottom" />
        </>
    );
};

export default Home;