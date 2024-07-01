import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMobileNavigation = () => {
        setMobileNavActive(!mobileNavActive);
    };
  
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    const handleNavClick = (path) => {
        navigate(path);
        setMobileNavActive(false);
        scrollToTop();
    };


    return (
        <div className="navigation w3-black w3-container">
            <nav className="nav-container">
                <div className="logo">
                    <Link to="/" onClick={() => handleNavClick('/')}>TALENTED<span>Tenth</span></Link>
                </div>
                <div className="mobile-button">
                    <span style={{ float: 'right' }} onClick={toggleMobileNavigation}>&#9776;</span>
                </div>
                <div className="links">
                    <Link to="/" onClick={() => handleNavClick('/')}>Home</Link>
                    <Link to="/#about" onClick={() => handleNavClick('/#about')}>About</Link>
                    <Link to="/#events" onClick={() => handleNavClick('/#events')}>Events</Link>
                    <Link to="/support" onClick={() => handleNavClick('/support')}>Support</Link>
                    <Link to="/contact" onClick={() => handleNavClick('/contact')}>Contact</Link>
                </div>
                <div id="mobile-sidenav" className={`mobile-links w3-black ${mobileNavActive ? 'mobile-links-active' : ''}`}>
                    <div className="mobile-logo" style={{ display: 'inline' }}>
                        <Link to="/" className="logo" onClick={() => handleNavClick('/')}>TALENTED<span>Tenth</span></Link>
                        <span style={{ width: '100%' }}></span>
                        <button className="closebtn" onClick={toggleMobileNavigation}>&times;</button> {/* Replaced anchor with button */}
                    </div>
                    <Link to="/#about" onClick={toggleMobileNavigation}>About Us</Link>
                    <Link to="/#events" onClick={toggleMobileNavigation}>Events</Link>
                    <Link to="/support" onClick={toggleMobileNavigation}>Support</Link>
                    <Link to="/contact" onClick={toggleMobileNavigation}>Contact</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;

