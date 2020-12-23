import React from 'react';
import './Menu.scss';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const [t, i18n] = useTranslation('global');

  const toggleLanguage = () => {
    i18n.language === 'es'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('es');
  };

  return (
    <nav className='menu_aside'>
      <a href='tel:+34650199270' title='Llámame'>
        <i className='fas fa-phone-alt'></i>
      </a>

      <button className='menu_btn-language' onClick={toggleLanguage}>
        <i className='fas fa-globe'></i>
      </button>
    </nav>
  );
};

export default Menu;
