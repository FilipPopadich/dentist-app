import { Link } from 'react-router-dom';
import { mdiToothOutline, mdiCalendarMonth, mdiMapMarker } from '@mdi/js';
import Icon from '../components/Icon';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="container">
                <div className="hero split-hero">
                    <div className="hero-left">
                        <h1>Your Smile, Our Priority</h1>
                        <p className="home-subtitle">
                            Experience exceptional dental care in a comfortable, modern environment.
                            Book your appointment today!
                        </p>
                        <Link to="/booking" className="btn btn-primary">Book Appointment →</Link>
                    </div>
                    <div className="hero-right">
                        <div className="smiley-card">
                            <span className="smiley-emoji">😁</span>
                        </div>
                    </div>
                </div>

                <h2 className="subtitle">Why Choose SmileCare?</h2>
                <div className="section">
                    <div className="grid-3">
                        <div className="card">
                            <Icon path={mdiToothOutline} size={48} color="#030213" className="home-icon" />
                            <h3>Expert Dentists</h3>
                            <p>Experienced professionals using latest techniques for gentle, effective care.</p>
                        </div>
                        <div className="card">
                            <Icon path={mdiCalendarMonth} size={48} color="#030213" className="home-icon" />
                            <h3>Easy Booking</h3>
                            <p>Schedule appointments online 24/7 with instant confirmation.</p>
                        </div>
                        <div className="card">
                            <Icon path={mdiMapMarker} size={48} color="#030213" className="home-icon" />
                            <h3>Convenient Location</h3>
                            <p>Central location with ample parking and public transit access.</p>
                        </div>
                    </div>
                </div>

                <h2 className="subtitle">Our Popular Services</h2>
                <div className="section">
                    <div className="grid-2">
                        <div className="card">
                            <h3>🦷 Professional Teeth Cleaning</h3>
                            <p>Preventive care to keep your smile bright and healthy. Includes plaque removal and polishing.</p>
                            <p className="home-price-tag">$100 - $200</p>
                            <span className="popular-tag card-btn-bottom">Most Popular</span>
                        </div>
                        <div className="card">
                            <h3>🦷 Root Canal Therapy</h3>
                            <p>Save your natural tooth and relieve pain with our gentle root canal treatment.</p>
                            <p className="home-price-tag">$600 - $900</p>
                            <Link to="/services#root-canal" className="btn btn-outline card-btn-bottom">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="view-service">
                    <Link to="/services" className="btn btn-outline">View All Services →</Link>
                </div>
                <div className="home-cta-section">
                    <div className="home-cta-content">
                        <h2>Ready for a healthier smile?</h2>
                        <p>Join thousands of satisfied patients who trust us with their dental health.</p>
                        <Link to="/booking" className="btn btn-primary">Book Your Visit →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;