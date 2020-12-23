import React, { useState } from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import AboutMe from './aboutme/AboutMe';
import Contact from './contact/Contact';
import dataProjectsES from '../data/dataProjectsES';
import dataProjectsEN from '../data/dataProjectsEN';
import './App.scss';

function App({ history }) {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div className='App'>
      <Header
        menuVisibility={menuVisibility}
        setMenuVisibility={setMenuVisibility}
      />
      <Hero />
      <Projects dataEs={dataProjectsES} dataEn={dataProjectsEN} />
      <AboutMe />
      <Contact history={history} />
      <Footer />
    </div>
  );
}

export default App;
