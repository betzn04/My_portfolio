import React, { useState } from 'react';
import './contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    
            const response = await fetch('https://formspree.io/f/manbngvg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Failed to send message. Status: ${response.status}`);
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
        return /^[^\s@]+@[^ 0-9]+\.[^\s@]+$/.test(email);
    };

    return (
        <motion.div
            className="contact"
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                >
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
                </motion.div>
                <motion.div
                    className="contact-form"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                >
                    {isSubmitted ? (
                        <div className="success-message">
                            Thanks for reaching out! I'll get back to you soon.
                        </div>
                    ) : (
                        <form
                            name="contact"
                            onSubmit={handleSubmit}
                        >
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;