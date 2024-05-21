import './App.css';
import Landing from './components/landing';
import Projects from './components/projects';
import Aboutus from './components/aboutus';
import Fourthcomponent from './components/fourthcomponent';
import Oursponser_footer from './components/oursponser_footer';

function App() {
  return (
    <div className="App">
      <Landing />
      <Projects />
      <Aboutus />
      <Fourthcomponent />
      <Oursponser_footer />
    </div>
  );
}

export default App;
