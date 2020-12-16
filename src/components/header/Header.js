import React from 'react';
import Menu from '../menu/Menu';
import './Header.scss';


const Header = ({menuVisibility, setMenuVisibility}) => {
    const handleMenu = () => {
        setMenuVisibility(!menuVisibility);
    }


    return (
        <header className="header">
            <nav className="nav_container">
                <ul className="nav">
                    <li className="menu_icon js-menu" onClick={handleMenu}>{menuVisibility === false ? <i className="fas fa-bars"></i> : <i className="far fas fa-times-circle"></i>}</li>
                    <li className="projects_icon"><a href="#projects" title="Vamos a ver qué he hecho hasta ahora"><i className="fas fa-briefcase"></i></a></li>
                    <li className="me_icon"><a href="#aboutme" title="Quieres conocerme?"><i className="fas fa-user-alt"></i></a></li>
                    {/* <li><a href="#contact" title="Déjame un comentario">Sugerencias?</a></li> */}
                </ul>
                {menuVisibility === true ? <Menu /> : ''}
            </nav>
        </header>
    );
};

export default Header;