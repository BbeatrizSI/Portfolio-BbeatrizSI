import React from 'react';
import '../stylesheets/layout/Menu.scss';


const Menu = () => {
    return (
        <nav className="menu_aside">
            <a href="tel:+34650199270" title="Llámame"><i className="fas fa-phone-alt"></i></a>
            <a href="mailto:bbeatriz@gmail.com" title="Escríbeme"><i className="fas fa-at"></i></a>
            <i className="fas fa-globe js-language-btn"></i>       
        </nav>      
    );
};

export default Menu;