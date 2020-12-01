import React from 'react';
import '../stylesheets/layout/Hero.scss';


const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero_title animate__animated animate__fadeIn animate__delay-1s">Hola!  Soy <span className="hero_title-name animate__animated animate__fadeInLeft animate__delay-2s">Bárbara B. Sacristán</span></h1>
            <h2 className="hero_description animate__animated animate__fadeInRight animate__delay-3s">Desarrolladora Front-End Jr.</h2>
            <p>Sigue bajando o ataja por los links para saber un poco más de mí!</p>
            <a className="arrow_down" href="#projects" title="Sigue avanzando!"><i class="fas fa-chevron-down"></i></a>
        </div>
    );
};

export default Hero;