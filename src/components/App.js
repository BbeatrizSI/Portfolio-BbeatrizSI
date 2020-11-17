import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Projects from './Projects';
import dataProjects from '../data/dataProjects';
import '../stylesheets/layout/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
      <Projects data={ dataProjects } />
    </div>
  );
}

export default App;
