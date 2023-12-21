
import './App.scss';
import NavBar from "./components/nav/navBar";
import Hero from './pages/hero/hero';
import AboutMe from './pages/aboutMe/aboutMe';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';
import { useState } from 'react';

function App() {

  const [showMenu,setShowMenu] = useState(false)
  return (
    <div className="App">
      <div className="frame">
        <NavBar 
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <Hero />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
