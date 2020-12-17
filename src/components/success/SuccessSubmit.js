import React from 'react';
import './SuccessSubmit.scss';

const SuccessSubmit = () => {
  return (
    <div className='result success'>
      <i className='fas fa-check'></i>
      <p className='thankyou_text'>Gracias! Muy pronto obtendrás respuesta!</p>
      <button type='submit' className='contact_form-btn'>
        Algo más?
      </button>
    </div>
  );
};

export default SuccessSubmit;
