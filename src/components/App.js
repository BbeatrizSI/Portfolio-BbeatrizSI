import React, { useState } from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import AboutMe from './aboutme/AboutMe';
import Contact from './contact/Contact';
import dataProjects from '../data/dataProjects';
import './App.scss';


function App() {

  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div className="App">
      <Header menuVisibility={menuVisibility} setMenuVisibility= {setMenuVisibility}/>
      <Hero />
      <Projects data={ dataProjects } />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
