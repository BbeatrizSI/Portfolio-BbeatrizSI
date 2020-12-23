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

      <button
        className='menu_btn-language'
        onClick={() => i18n.changeLanguage('en')}
      >
        <i className='fas fa-globe'></i>
      </button>
    </nav>
  );
};

export default Menu;
