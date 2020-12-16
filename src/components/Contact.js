import React from 'react';
import '../stylesheets/layout/Contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <h2 className="contact_title">Tienes alguna pregunta <span className="contact_title-secondary">o quieres trabajar conmigo?</span></h2>
            <form className="contact_form" action="" name="telefonica">
                <input type="text" name="name" placeholder="Nombre"/>
                <input type="email" name="email" placeholder="e-mail"/>
                <input type="text" name="message" placeholder="Tu mensaje"/>
                <button type="submit" className="contact_form-btn">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;