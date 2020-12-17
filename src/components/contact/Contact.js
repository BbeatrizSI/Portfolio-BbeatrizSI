import React, { useEffect, useState } from 'react';
import './Contact.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { useForm } from '../../hooks/useForm';


const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000});
    }, []);

    const [values, setValues] = useState({name: '', email: '', message: ''});

    const [stateForm, setStateForm] = useState('');

    
    const handleInputChange = ({ target }) => {
        setValues({
          ...values,
          [target.name]: target.value,
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.target;
         const data = new FormData(form);
         const xhr = new XMLHttpRequest();
         xhr.open(form.method, form.action);
         xhr.setRequestHeader("Accept", "application/json");
         xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
               form.reset();
               setStateForm("SUCCESS");
             } else {
                setStateForm("ERROR");
             }
          };
         xhr.send(data);
    }
    
       
   
    return (
        <section className="contact" data-aos="slide-up">
            <h2 className="contact_title">Tienes alguna pregunta <span className="contact_title-secondary">o quieres trabajar conmigo?</span></h2>
            <form className="contact_form"  action="https://formspree.io/f/xzbkjqky" method="POST" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" required className="input" value={ values.values } onChange={ handleInputChange }/>
                <input type="email" name="email" placeholder="e-mail" required className="input" value={ values.values } onChange={ handleInputChange }/>
                <textarea name="message" placeholder="Tu mensaje" required className="input" value={ values.values } onChange={ handleInputChange }></textarea>
                {stateForm === "SUCCESS" ? 
                <>
                <p className="thankyou_text">Gracias! Muy pronto obtendrás respuesta! ✔️</p> 
                <button type="submit" className="contact_form-btn">Enviar</button>
                </> : 
                <button type="submit" className="contact_form-btn">Enviar</button>}
                {stateForm === "ERROR" && <p className="thankyou_text">Ooops! Algo salió mal, vuelve a intentarlo. ❌</p>}
            </form>
        </section>
    );
};

export default Contact;