import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../form/Form';
import SuccessSubmit from '../success/SuccessSubmit';
import ErrorSubmit from '../errorsubmit/ErrorSubmit';
import './Contact.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [stateForm, setStateForm] = useState('');

  const resultFormSubmit = () => {
    if (stateForm === 'SUCCESS') {
      <SuccessSubmit />;
    } else if (stateForm === 'ERROR') {
      <ErrorSubmit />;
    }
  };

  return (
    <section className='contact' data-aos='slide-up'>
      <h2 className='contact_title'>
        Tienes alguna pregunta{' '}
        <span className='contact_title-secondary'>
          o quieres trabajar conmigo?
        </span>
      </h2>
      <Switch>
        <Route exact path='/'>
          <Form stateForm={stateForm} setStateForm={setStateForm} />
        </Route>
        <Route path='/resultsubmit' render={resultFormSubmit()} />
      </Switch>
    </section>
  );
};

export default Contact;
