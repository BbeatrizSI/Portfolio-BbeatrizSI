import React, { useEffect } from 'react';
import './Hero.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [t] = useTranslation('global');

  return (
    <div className='hero'>
      <h1 className='hero_title' data-aos='fade-right'>
        {t('hero.hi')}{' '}
        <span
          className='hero_title-name'
          data-aos='fade-left'
          data-aos-delay='1000'
        >
          Bárbara B. Sacristán
        </span>
      </h1>
      <h2 className='hero_description' data-aos='fade-up' data-aos-delay='2000'>
        <span>{t('hero.developer1')}</span> <span>{t('hero.developer2')}</span>
      </h2>
      <p>{t('hero.help')}</p>
      <a className='arrow_down' href='#projects' title='Sigue avanzando!'>
        <i className='fas fa-chevron-down'></i>
      </a>
    </div>
  );
};

export default Hero;
