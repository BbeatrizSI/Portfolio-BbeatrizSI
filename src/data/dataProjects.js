import black from '../assets/images/black.jpg';
import rick from '../assets/images/rick.jpg';
import cards from '../assets/images/cards.jpg';
import drum from '../assets/images/drum.jpg';
import pokemon from '../assets/images/pokemon.jpg';
import series from '../assets/images/series.jpg';
import tareas from '../assets/images/tareas.jpg';



const dataProjects = [
    {
        title: 'Rick and Morty',
        description:
            'Buscador de personajes de la serie Rick y Morty. Dispone de filtros y puedes ver en detalle cada personaje.',
        githubLink: 'https://github.com/BbeatrizSI/                 Rick-and-Morty-Characters',
        webLink: 'https://bbeatrizsi.github.io/Rick-and-Morty-Characters/#/',
        img: rick,
        skills: ['HTML', 'SASS', 'React'],
    },
    {
        title: 'Blackjack',
        description:
            'Sencillo juego de Blackjack hecho en JS Vanilla. Ya sabéis, a por 21!',
        githubLink: 'https://github.com/BbeatrizSI/BlackJack',
        webLink: 'https://bbeatrizsi.github.io/BlackJack/',
        img: black,
        skills: ['HTML', 'Bootstrap', 'JS Vanilla'],
    },
    {
        title: 'Maniac Coders Card Generator',
         description:
            'Generador de tarjetas de visita personalizables, con uso de local storage. Una vez terminada se comparte en Twitter fácilmente.',
        githubLink: 'https://github.com/BbeatrizSI/Maniac-Coders-Awesome-Profile-Cards',
        webLink: 'https://bbeatrizsi.github.io/Maniac-Coders-Awesome-Profile-Cards/',
         img: cards,
        skills: ['HTML', 'CSS', 'SASS', 'JavaScript'],
    },
    {
        title: 'Drum-Kit',
        description:
            'Sencillo juego de batería hecho con JavaScript Vanilla',
        githubLink:
            'https://github.com/BbeatrizSI/Drum-Kit',
         webLink: 'https://bbeatrizsi.github.io/Drum-Kit/',
        img: drum,
         skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Pokemon List',
        description:
            'Listado de Pokemons hecho con React, seleccionables y con un bonito (aunque sencillo) diseño',
        githubLink:
            'https://github.com/BbeatrizSI/Pokemon-List',
        webLink: 'https://bbeatrizsi.github.io/Pokemon-List/',
        img: pokemon,
        skills: ['HTML', 'SASS', 'React'],
    },
    {
        title: 'Buscador de Series',
        description:
            'Buscador de series por nombre a través de una API. Contiene un listado de favoritos y la información se almacena en el local storage.',
        githubLink:
            'https://github.com/BbeatrizSI/modulo-2-evaluacion-final-BbeatrizSI',
        webLink: 'https://bbeatrizsi.github.io/modulo-2-evaluacion-final-BbeatrizSI/',
        img: series,
        skills: ['HTML', 'SASS', 'JavaScript'],
    },
    {
        title: 'ToDo App',
        description:
            'Aplicación web para gestionar tareas pendientes. Tiene filtro para saber las que te quedan por realizar',
        githubLink:
            'https://github.com/BbeatrizSI/ToDo-App',
        webLink: 'https://bbeatrizsi.github.io/ToDo-App/',
        img: tareas,
        skills: ['HTML', 'SASS', 'JavaScript', 'Webpack'],
    },
  ];
  
  export default dataProjects;