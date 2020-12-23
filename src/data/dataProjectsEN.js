import heroes from '../assets/images/heroes.jpg';
import black from '../assets/images/black.jpg';
import rick from '../assets/images/rick.jpg';
import cards from '../assets/images/cards.jpg';
import drum from '../assets/images/drum.jpg';
import pokemon from '../assets/images/pokemon.jpg';
import series from '../assets/images/series.jpg';
import tareas from '../assets/images/tareas.jpg';

const dataProjectsEN = [
  {
    id: 1,
    title: 'Heroes App',
    description:
      'Heroes directory with browser. False "login" to make the difference between public and private routes.',
    githubLink: 'https://github.com/BbeatrizSI/Heroes-App',
    webLink: 'https://bbeatrizsi.github.io/Heroes-App/',
    img: heroes,
    skills: ['HTML', 'Bootstrap', 'React', 'React-Router'],
  },
  {
    id: 2,
    title: 'Rick and Morty',
    description:
      'Rick & Morty characters searcher. It has filters (death or alive, etc.)and can show characters in more detail',
    githubLink:
      'https://github.com/BbeatrizSI/                 Rick-and-Morty-Characters',
    webLink: 'https://bbeatrizsi.github.io/Rick-and-Morty-Characters/#/',
    img: rick,
    skills: ['HTML', 'SASS', 'React'],
  },
  {
    id: 3,
    title: 'Blackjack',
    description:
      'Simple BlackJack game made in JavaScript Vanilla and designed with Bootstrap help. You know, get 21!',
    githubLink: 'https://github.com/BbeatrizSI/BlackJack',
    webLink: 'https://bbeatrizsi.github.io/BlackJack/',
    img: black,
    skills: ['HTML', 'Bootstrap', 'JS Vanilla'],
  },
  {
    id: 4,
    title: 'Card Generator',
    description:
      'Business card generator, with use of local storage Once finished it is easily shared on Twitter.',
    githubLink:
      'https://github.com/BbeatrizSI/Maniac-Coders-Awesome-Profile-Cards',
    webLink:
      'https://bbeatrizsi.github.io/Maniac-Coders-Awesome-Profile-Cards/',
    img: cards,
    skills: ['HTML', 'CSS', 'SASS', 'JavaScript'],
  },
  {
    id: 5,
    title: 'Drum-Kit',
    description:
      'Simple drum set made with JavaScript Vanilla. Responsive and actionable both with keys and by pressing!',
    githubLink: 'https://github.com/BbeatrizSI/Drum-Kit',
    webLink: 'https://bbeatrizsi.github.io/Drum-Kit/',
    img: drum,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    title: 'Pokemon List',
    description:
      'List of Pokemons made with React, selectable and with a nice (but simple) design.',
    githubLink: 'https://github.com/BbeatrizSI/Pokemon-List',
    webLink: 'https://bbeatrizsi.github.io/Pokemon-List/',
    img: pokemon,
    skills: ['HTML', 'SASS', 'React'],
  },
  {
    id: 7,
    title: 'Buscador de Series',
    description:
      'Search by name via API. It contains a list of favourites and the info is stored in the local storage.',
    githubLink:
      'https://github.com/BbeatrizSI/modulo-2-evaluacion-final-BbeatrizSI',
    webLink:
      'https://bbeatrizsi.github.io/modulo-2-evaluacion-final-BbeatrizSI/',
    img: series,
    skills: ['HTML', 'SASS', 'JavaScript'],
  },
  {
    id: 8,
    title: 'ToDo App',
    description:
      'Web application to manage pending tasks. It has a filter to know what you have left to do.',
    githubLink: 'https://github.com/BbeatrizSI/ToDo-App',
    webLink: 'https://bbeatrizsi.github.io/ToDo-App/',
    img: tareas,
    skills: ['HTML', 'SASS', 'JavaScript', 'Webpack'],
  },
];

export default dataProjectsEN;
