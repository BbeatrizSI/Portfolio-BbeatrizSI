import React from 'react';
import './ErrorSubmit.scss';

const ErrorSubmit = () => {
  return (
    <div className='result error'>
      <i class='fas fa-times'></i>
      <p className='thankyou_text'>
        Ooops! Algo salió mal, vuelve a intentarlo.
      </p>
      <button type='submit' className='contact_form-btn'>
        Volver a intentar
      </button>
    </div>
  );
};

export default ErrorSubmit;
