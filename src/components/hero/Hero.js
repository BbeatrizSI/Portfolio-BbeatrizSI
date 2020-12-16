import React, { useEffect } from 'react';
import './Hero.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
        <div className="hero">
            <h1 className="hero_title" data-aos="fade-right">Hola!  Soy <span className="hero_title-name" data-aos="fade-left" data-aos-delay="1000">Bárbara B. Sacristán</span></h1>
            <h2 className="hero_description" data-aos="fade-up" data-aos-delay="2000"><span>Desarrolladora</span> <span>Front-End Jr.</span></h2>
            <p>Sigue bajando o ataja por los links para saber un poco más de mí!</p>
            <a className="arrow_down" href="#projects" title="Sigue avanzando!"><i className="fas fa-chevron-down"></i></a>
        </div>
    );
};

export default Hero;