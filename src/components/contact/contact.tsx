import React, { useState } from 'react';
import './contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out. You can contact me through the options below or fill out the form to send a message directly.</p>
                    <br />
                    <div style={{ display: 'flex', flexDirection:'column', alignContent: 'flex-end', paddingTop: '19px' }}>
                        <p>
                            <FaLinkedin /> <a href="https://www.linkedin.com/in/betsin-kuruvila-mekkat/">LinkedIn</a>
                        </p>
                        <p>
                            <FaGithub /> <a href="https://github.com/betzn04/">GitHub</a>
                        </p>
                        <p>
                            <FaEnvelope /> <a href="mailto:betsingmr@gmail.com">betsingmr@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;