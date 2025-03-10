import React, { useState } from 'react';
import './contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString()
            });

            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="contact" id='contact'>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>I'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out. You can contact me through the options below or fill out the form to send a message directly.</p>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-end', paddingTop: '19px' }}>
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
                    {isSubmitted ? (
                        <div className="success-message">
                            Thanks for reaching out! I'll get back to you soon.
                        </div>
                    ) : (
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;