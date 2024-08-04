import React from 'react';
import '../styles.css';

function Footer(){
    const currentYear = new Date().getFullYear()
    return(<footer className="footer">
        <p className="footer-text">
            © {currentYear} Moviedux, All rights reserved.
        </p>
    </footer>)
}

export default Footer;