import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid-2 footer-grid">
                    <div>
                        <h3>SmileCare Dentistry</h3>
                        <p>Your trusted partner for dental health</p>
                        <p className="footer-contact">
                            📍 123 Road Street, Suite 200<br />
                            📞 (613) 123-4567<br />
                            ✉️ smilecare@gmail.com
                        </p>
                    </div>
                    <div className="footer-quick-links">
                        <h3>Quick Links</h3>
                        <Link to="/services" className="footer-link">Services</Link>
                        <Link to="/booking" className="footer-link">Book Appointment</Link>
                        <Link to="/contact" className="footer-link">Contact</Link>
                        <Link to="/designer" className="footer-link">About Designer</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Designed by <strong>Filip Popadich</strong> | SEG3125 Assignment 2</p>
                    <p className="footer-credits">
                        <a href="https://filippopadich.github.io/Portfolio/" className="footer-accent-link">View Portfolio</a> |
                        <a href="https://github.com/FilipPopadich" className="footer-accent-link footer-github-link">GitHub Repository</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;