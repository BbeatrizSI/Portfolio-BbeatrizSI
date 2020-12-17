import React, { useEffect } from 'react';
import './Contact.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000});
    }, []);

    return (
        <section className="contact" data-aos="slide-up">
            <h2 className="contact_title">Tienes alguna pregunta <span className="contact_title-secondary">o quieres trabajar conmigo?</span></h2>
            <form className="contact_form" action="https://formspree.io/f/xzbkjqky" method="POST">
                <input type="text" name="name" placeholder="Nombre" required className="input"/>
                <input type="email" name="email" placeholder="e-mail" required className="input"/>
                <textarea name="message" placeholder="Tu mensaje" required className="input"></textarea>
                <button type="submit" className="contact_form-btn">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;