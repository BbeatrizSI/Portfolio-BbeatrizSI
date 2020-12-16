import React from 'react';
import '../stylesheets/layout/Contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <h2 className="contact_title">Tienes alguna pregunta <span className="contact_title-secondary">o quieres trabajar conmigo?</span></h2>
            <form className="contact_form" action="https://formspree.io/f/xzbkjqky" method="POST">
                <input type="text" name="name" placeholder="Nombre" required/>
                <input type="email" name="email" placeholder="e-mail" required/>
                <input type="text" name="message" placeholder="Tu mensaje" required/>
                <button type="submit" className="contact_form-btn">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;