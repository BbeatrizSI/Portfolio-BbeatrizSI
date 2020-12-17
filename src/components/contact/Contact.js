import React, { useEffect, useState } from 'react';
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

  return (
    <section className='contact' data-aos='slide-up'>
      <h2 className='contact_title'>
        Tienes alguna pregunta{' '}
        <span className='contact_title-secondary'>
          o quieres trabajar conmigo?
        </span>
      </h2>
      {/* <Form stateForm={ stateForm } setStateForm={ setStateForm }/> */}
      {/* <SuccessSubmit /> */}
      <ErrorSubmit />
      {/* {stateForm === "SUCCESS" ? 
                <>
                <p className="thankyou_text">Gracias! Muy pronto obtendrás respuesta! ✔️</p> 
                <button type="submit" className="contact_form-btn">Enviar</button>
                </> : 
                <button type="submit" className="contact_form-btn">Enviar</button>} */}
      {/* {stateForm === "ERROR" && <p className="thankyou_text">Ooops! Algo salió mal, vuelve a intentarlo. ❌</p>} */}
    </section>
  );
};

export default Contact;
