import './App.css';
import NavBar from './components/NavBar';
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/Inicio';
import Lentes from './paginas/Lentes';
import Contactos from './paginas/Contactos';

function App() {
  return (
  
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Lentes' element={<Lentes/>}/>
          <Route path='/Contactos' element={<Contactos/>}/>
        </Routes>
      </Router>    
  
  );
}

export default App;
