import React, { useEffect } from 'react';
import './AboutMe.scss';
import imageOfMe from '../../assets/images/yo.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className='aboutme'>
      <div className='transparent_div-am' id='aboutme'></div>
      <div className='aboutme_container'>
        <h2 className='aboutme_title'>{t('aboutme.title')}</h2>
        <div
          className='aboutme_img_animation-container'
          data-aos='zoom-in'
          data-aos-easing='ease-in-out'
          data-aos-once='false'
          data-aos-delay='250'
        >
          <div className='aboutme_img-container'>
            <img
              className='aboutme_img'
              src={imageOfMe}
              alt='Foto de Bárbara'
              title='Foto de Bárbara'
            />
          </div>
          <span className='aboutme_animation'>
            <div className='large circle one'></div>
            <div className='large circle two'></div>
            <div className='large circle three'></div>
            <div className='large circle four'></div>
            <div className='large circle five'></div>
            <div className='large circle six'></div>
            <div className='large circle seven'></div>
            <div className='large circle eight'></div>
          </span>
        </div>

        <div className='aboutme_sm' data-aos='zoom-out' data-aos-delay='1000'>
          <a
            className='ico_container ico1'
            href='https://www.linkedin.com/in/barbarabsacristan/'
            target='_blank'
            rel='noopener noreferrer'
            title='Enlace al perfil de LinkedIn'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            className='ico_container ico2'
            href='https://twitter.com/bbeatrizsi'
            target='_blank'
            rel='noopener noreferrer'
            title='Enlace al perfil de Twitter'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            className='ico_container ico3'
            href='https://github.com/BbeatrizSI'
            target='_blank'
            rel='noopener noreferrer'
            title='Enlace al perfil de GitHub'
          >
            <i className='fab fa-github-alt'></i>
          </a>
        </div>

        <div className='aboutme_info'>
          <p>
            {t('aboutme.info1')}{' '}
            <span className='bold'>{t('aboutme.info2')}</span>
            {t('aboutme.info3')}
          </p>
          <p>
            {t('aboutme.info4')}{' '}
            <span className='bold'>{t('aboutme.info5')}</span>
            {t('aboutme.info6')}
            <span className='bold'>{t('aboutme.info7')}</span>.
          </p>
          <p>
            {t('aboutme.info8')}
            <span className='bold'>{t('aboutme.info9')}</span>
            {t('aboutme.info10')}{' '}
            <span className='bold'>{t('aboutme.info11')}</span>
            {t('aboutme.info12')}{' '}
            <span className='bold'>{t('aboutme.info13')}</span>
            {t('aboutme.info14')}{' '}
            <span className='bold'>{t('aboutme.info15')}</span>
            {t('aboutme.info16')}{' '}
            <span className='bold'>{t('aboutme.info17')}</span>
            {t('aboutme.info18')}
          </p>
          <p>{t('aboutme.info19')}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
