import React, { useEffect } from 'react';
import '../stylesheets/layout/AboutMe.scss';
import imageOfMe from '../assets/images/yo.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';



const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 1500});
    }, []);
    return (
        <section className="aboutme">
             <div className="transparent_div-am" id="aboutme"></div>
             <div className="aboutme_container">
                <h2 className="aboutme_title">Y ahora un poco sobre mí...</h2>         
                <div className="aboutme_img_animation-container"data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-delay="250">
                    <div className="aboutme_img-container">
                        <img
                            className="aboutme_img"
                            src={imageOfMe}
                            alt="Foto de Bárbara"
                            title="Foto de Bárbara"
                        />
                    </div>
                    <span className="aboutme_animation">
                        <div className="large circle one"></div>
                        <div className="large circle two"></div>
                        <div className="large circle three"></div>
                        <div className="large circle four"></div>
                        <div className="large circle five"></div>
                        <div className="large circle six"></div>
                        <div className="large circle seven"></div>
                        <div className="large circle eight"></div>
                    </span>
                </div>
                
                <div className="aboutme_sm" data-aos="zoom-out" data-aos-delay="1000">
                    <a className="ico_container ico1" href="https://www.linkedin.com/in/barbarabsacristan/" target="_blank" rel="noopener noreferrer" title="Enlace al perfil de LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="ico_container ico2" href="https://twitter.com/bbeatrizsi" target="_blank" rel="noopener noreferrer" title="Enlace al perfil de Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="ico_container ico3" href="https://github.com/BbeatrizSI" target="_blank" rel="noopener noreferrer" title="Enlace al perfil de GitHub">
                    <i className="fab fa-github-alt"></i>
                    </a>
                </div>
                
                <div className="aboutme_info">
                    <p>Cuento con <span className="bold">más de 10 años de experiencia</span> en gestión de información, control de calidad y atención al cliente en ambientes de trabajo multiculturales.</p>
                    <p>Hace relativamente poco decidí darle un giro a mi carrera profesional y convertirme en <span className="bold">desarrolladora front-end</span>, algo que combino con mis <span className="bold">estudios musicales</span>.</p>
                    <p>La <span className="bold">creatividad</span>, la <span className="bold">curiosidad</span> y la <span className="bold">motivación</span> para seguir aprendiendo día a día, así como las capacidades <span className="bold">analítica</span> y de <span className="bold">comunicación</span>, son algunas de las características que mejor me definen.</p>
                    <p>¿Quieres conocerme más? Pásate por mi LinkedIn, Twitter, GitHub o directamente escríbeme un correo electrónico! 😉</p>
                </div>
            </div>
            
        </section>
    );
};

export default AboutMe;