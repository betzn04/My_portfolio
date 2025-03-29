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
            const formData = new FormData(e.currentTarget);
            const data = {
                name: formData.get('name')?.toString().trim(),
                email: formData.get('email')?.toString().trim(),
                message: formData.get('message')?.toString().trim()
            };
    
            if (!data.name || !data.email || !data.message) {
                throw new Error('All fields are required');
            }
    
            if (!isValidEmail(data.email)) {
                throw new Error('Invalid email format');
            }
    
            const apiUrl = process.env.REACT_APP_API_URL || '/api';
            const response = await fetch(`${apiUrl}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
            const contentType = response.headers.get('content-type');
            let errorMessage = 'Network response was not ok';
    
            if (!response.ok) {
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } else {
                    errorMessage = await response.text() || errorMessage;
                }
                throw new Error(errorMessage);
            }
    
            setIsSubmitted(true);
        } catch (error) {
            console.error('Form submission error:', error);
            alert(error instanceof Error ? error.message : 'An error occurred while sending the message');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isValidEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" value="contact" />
                            <input type="hidden" />
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