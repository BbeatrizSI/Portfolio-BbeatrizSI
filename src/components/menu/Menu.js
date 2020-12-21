import React from 'react';
import './Menu.scss';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <nav className='menu_aside'>
      <a href='tel:+34650199270' title='Llámame'>
        <i className='fas fa-phone-alt'></i>
      </a>
      <a href='mailto:bbeatriz@gmail.com' title='Escríbeme'>
        <i className='fas fa-envelope'></i>
      </a>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </nav>
  );
};

export default Menu;
