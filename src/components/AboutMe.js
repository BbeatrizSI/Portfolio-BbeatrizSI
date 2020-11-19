import React from 'react';
import '../stylesheets/layout/AboutMe.scss';
import imageOfMe from '../assets/images/yo.jpg';


const AboutMe = () => {
    return (
        <section className="aboutme">
             <div className="transparent_div-am" id="aboutme"></div>
             <div className="aboutme_container">
                 <div className="aboutme_img-container">
                    <img
                        className="aboutme_img"
                        src={imageOfMe}
                        alt="Foto de Bárbara"
                        title="Foto de Bárbara"
                    />
                 </div>
                <h2 className="aboutme_title">Y ahora un poco sobre mí...</h2>
                <div className="aboutme_info">
                    <p>Cuento con <span className="bold">más de 10 años de experiencia</span> en gestión de información, control de calidad y atención al cliente en ambientes de trabajo multiculturales.</p>
                    <p>Hace relativamente poco decidí darle un giro a mi carrera profesional y convertirme en <span className="bold">desarrolladora front-end!</span></p>
                    <p>La <span className="bold">creatividad</span> y la <span className="bold">motivación</span> para seguir aprendiendo día a día, así como las capacidades <span className="bold">analítica</span> y de <span className="bold">comunicación</span>, son algunas de las características que mejor me definen.</p>
                </div>
            </div>
            
        </section>
    );
};

export default AboutMe;