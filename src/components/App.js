import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Projects from './Projects';
import dataProjects from '../data/dataProjects';
import '../stylesheets/layout/App.scss';
import { useState } from 'react';

function App() {

  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div className="App">
      <Header menuVisibility={menuVisibility} setMenuVisibility= {setMenuVisibility}/>
      <Hero />
      <Projects data={ dataProjects } />
      <Footer />
    </div>
  );
}

export default App;
