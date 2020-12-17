import React, {useState} from 'react';
import './Form.scss';


const Form = ({stateForm, setStateForm}) => {

    const [values, setValues] = useState({name: '', email: '', message: ''});

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
        <form className="contact_form"  action="https://formspree.io/f/xzbkjqky" method="POST" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" required className="input" value={ values.values } onChange={ handleInputChange }/>
                <input type="email" name="email" placeholder="e-mail" required className="input" value={ values.values } onChange={ handleInputChange }/>
                <textarea name="message" placeholder="Tu mensaje" required className="input" value={ values.values } onChange={ handleInputChange }></textarea>
                <button type="submit" className="contact_form-btn">Enviar</button>
        </form>
    );
};

export default Form;