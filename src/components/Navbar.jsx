import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="logo-header">
                <span className="logo-icon">🦷</span>
                <span className="logo-text">SmileCare Dentistry</span>
            </div>
            <div className="nav-wrap">
                <div className="bubble active"></div>
                <div className="bubble hover"></div>
                <nav className="nav">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/booking">Book</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/designer">Designer</NavLink>
                </nav>
            </div>
        </>
    );
};

export default Navbar;