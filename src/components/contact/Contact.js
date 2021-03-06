import React, { useEffect, useState } from 'react';
import './Contact.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [stateForm, setStateForm] = useState('');

  const [values, setValues] = useState({ name: '', email: '', message: '' });

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
    if (target.value !== '') {
      setStateForm('');
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStateForm('SUCCESS');
      } else {
        setStateForm('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <section className='contact' id='contact' data-aos='slide-up'>
      <h2 className='contact_title'>
        {t('contact.title1')}{' '}
        <span className='contact_title-secondary'>{t('contact.title2')}</span>
      </h2>
      <form
        className='contact_form'
        action='https://formspree.io/f/xzbkjqky'
        method='POST'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='name'
          placeholder={t('contact.name')}
          required
          className='input'
          value={values.values}
          onChange={handleInputChange}
        />
        <input
          type='email'
          name='email'
          placeholder='e-mail'
          required
          className='input'
          value={values.values}
          onChange={handleInputChange}
        />
        <textarea
          name='message'
          placeholder={t('contact.message')}
          required
          className='input'
          value={values.values}
          onChange={handleInputChange}
        ></textarea>
        <button type='submit' className='contact_form-btn'>
          {t('contact.btn')}
        </button>
        {stateForm === '' && <div className='submit_response'></div>}
        {stateForm === 'SUCCESS' && (
          <div className='submit_response'>
            <i className='fas fa-check'></i>
            <p className='thankyou_text'>{t('contact.success')}</p>
          </div>
        )}
        {stateForm === 'ERROR' && (
          <div className='submit_response'>
            <i className='fas fa-times'></i>
            <p className='thankyou_text'>{t('contact.error')}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
