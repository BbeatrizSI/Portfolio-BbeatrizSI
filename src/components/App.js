import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Projects from './Projects';
import dataProjects from '../data/dataProjects';
import AboutMe from './AboutMe';
import { useState } from 'react';
import '../stylesheets/layout/App.scss';
import Contact from './Contact';


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
