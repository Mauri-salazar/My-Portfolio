import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { NavBar } from './componetes/NavBar/NavBar';
import { Banner } from './componetes/Banner/Banner';
import { Skills } from './componetes/Skills/Skills';
import { Projects } from './componetes/Projects/Projects';
import { Contact } from './componetes/Contact/Contact';
import { Curriculum } from './componetes/Curriculum/Curriculum';
import './App.css';


function App() {
  return (
    <div>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Curriculum />
        <Contact />
    </div>
  );
}

export default App;
