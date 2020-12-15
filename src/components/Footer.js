import React, { useEffect } from 'react';
import '../stylesheets/layout/Footer.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
        <footer className="footer">
            <a href="mailto:bbeatriz@gmail.com" title="Escríbeme"><i className="fas fa-at"></i></a>
            <div className="smalls_container" data-aos="zoom-in">
                <small className="small">Made with <i className="fas fa-heart"></i></small>
                <small className="small">by BbeatrizSI ©2020</small>
            </div>
            <a href="#top" title="Vuelta al inicio!"><i className="fas fa-arrow-circle-up"></i></a>            
        </footer>
    );
};

export default Footer;