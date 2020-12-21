import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='smalls_container'>
        <small className='small'>
          Made with <i className='fas fa-heart'></i>
        </small>
        <small className='small'>by BbeatrizSI ©2020</small>
      </div>
      <a href='#top' title='Vuelta al inicio!'>
        <i className='fas fa-arrow-circle-up'></i>
      </a>
    </footer>
  );
};

export default Footer;
