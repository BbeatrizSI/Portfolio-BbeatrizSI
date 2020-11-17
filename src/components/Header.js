import React from 'react';
import '../stylesheets/layout/Header.scss';


const Header = () => {
    return (
        <nav className="nav_container">
            <ul className="nav">
                <li><a href="#projects" title="Vamos a ver qué he hecho hasta ahora">Proyectos</a></li>
                <li><a href="#aboutme" title="Quieres conocerme?">Sobre mí</a></li>
                <li><a href="#contact" title="Déjame un comentario">Sugerencias?</a></li>
            </ul>
        </nav>
        
    );
};

export default Header;