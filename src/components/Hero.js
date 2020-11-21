import React from 'react';
import '../stylesheets/layout/Hero.scss';


const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero_title">Hola!  Soy <span className="hero_title-name">Bárbara B. Sacristán</span></h1>
            <h2 className="hero_description">Desarrolladora Front-End Jr.</h2>
            <p>Sigue bajando o ataja por los links para saber un poco más de mí!</p>
            <i class="fas fa-chevron-down"></i>
        </div>
    );
};

export default Hero;