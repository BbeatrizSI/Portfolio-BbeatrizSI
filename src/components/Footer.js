import React from 'react';
import '../stylesheets/layout/Footer.scss';

const Footer = () => {
    return (
        <nav className="footer">
            <a href="phone:+34650199270" title="Llámame"><i className="fas fa-phone-alt"></i></a>
            <a href="mailto:bbeatriz@gmail.com" title="Escríbeme"><i className="fas fa-at"></i></a>
            <i className="fas fa-globe js-language-btn"></i>
            <a href="#top" title="Vuelta al inicio!"><i className="fas fa-arrow-circle-up"></i></a>            
        </nav>
    );
};

export default Footer;