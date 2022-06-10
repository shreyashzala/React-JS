import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';



function App() {

  return (
    <>
      <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route exact path="/about" element={<About/>} />
         <Route exact path="/contact" element={<Contact/>} />
         <Route exact path="/projects" element={<Project />} />
      </Routes>
    </>
  )
}

export default App;
