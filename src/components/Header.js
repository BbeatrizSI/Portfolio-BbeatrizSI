import React from 'react';
import Menu from './Menu';
import '../stylesheets/layout/Header.scss';


const Header = ({menuVisibility}) => {
    return (
        <nav className="nav_container">
            <ul className="nav">
                <li className="menu js-menu"><i class="fas fa-bars"></i></li>
                <li className="projects"><a href="#projects" title="Vamos a ver qué he hecho hasta ahora"><i class="fas fa-briefcase"></i></a></li>
                <li className="me"><a href="#aboutme" title="Quieres conocerme?"><i class="fas fa-user-alt"></i></a></li>
                {/* <li><a href="#contact" title="Déjame un comentario">Sugerencias?</a></li> */}
            </ul>
            {menuVisibility === true ? <Menu /> : ''}
        </nav>
        
    );
};

export default Header;