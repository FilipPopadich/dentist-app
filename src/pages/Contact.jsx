import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="hero contact-hero">
                    <h1>Contact Us</h1>
                    <p>We're here to help with all your dental needs</p>
                </div>

                <div className="section">
                    <div className="grid-2">
                        <div>
                            <div className="card">
                                <h3>📍 Visit Our Office</h3>
                                <p>123 Road Street<br /> Suite 200<br />Ottawa, ON K1S 1A1</p>
                                <h3 className="contact-subheading">📞 Call Us</h3>
                                <p>Phone: <strong>(613) 456-7890</strong><br />Fax: (613) 222-3333</p>
                                <h3 className="contact-subheading">✉️ Email</h3>
                                <p>General Inquiries: smilecare@gmail.com<br />Appointments: booksmilecare@gmail.com</p>
                                <h3 className="contact-subheading">🕒 Hours of Operation</h3>
                                <p>Monday - Friday: 9:00 AM - 7:00 PM<br />Saturday: 9:00 AM - 3:00 PM<br />Sunday: Closed (Emergency only)</p>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <h3>Send us a Message</h3>
                                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! We\'ll get back to you within 24 hours.'); e.target.reset(); }}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" placeholder="Your name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="your@email.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea rows="5" placeholder="How can we help you?" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary contact-send-btn">Send Message →</button>
                                </form>
                            </div>

                            <div className="card contact-parking-card">
                                <h3>🚗 Parking & Transit</h3>
                                <p>Free parking available behind the building. Accessible via OC Transpo bus #123 (stop at Smyth & Main).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-emergency-section">
                    <h3>Emergency Dental Care?</h3>
                    <p>For after-hours emergencies, call our emergency line: <strong>(613) 888-9999</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;