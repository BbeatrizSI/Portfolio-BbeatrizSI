import React from 'react';
import '../stylesheets/layout/Hero.scss';


const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-title">Hola!  Soy <span className="hero-title_name">Bárbara B. Sacristán</span></h1>
            <p className="hero-description">Desarrolladora Front-End Jr.</p>
        </div>
    );
};

export default Hero;