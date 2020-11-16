import React from 'react';
import '../stylesheets/layout/Header.scss';


const Header = () => {
    return (
        <div>
            <nav className="nav-container">
                <ul className="nav">
                    <li>Proyectos</li>
                    <li>Un poco sobre mí</li>
                    <li>Alguna sugerencia?</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;