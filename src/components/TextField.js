import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function TextField() {
    const [formData, setFormData] = useState({
        title: '',
        email: '',
        message: '',
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState('');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.init(publicKey);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus('');

        // Delete later
        console.log('Sending with:', { serviceID, templateID, formData });

        emailjs.send(serviceID, templateID, formData)
            .then((response) => {
                setStatus('Message sent successfully!');
                setFormData({ title: '', email: '', message: '' });
                setIsSending(false);
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                setStatus('Failed to send. Please try again.');
                setIsSending(false);
            });
    };

    return (
        <div className="text-field-container">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows="5"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {status && <p className="status-message">{status}</p>}
            </form>
        </div>
    );
}

export default TextField;