// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Calculadora from './Calculadora';
import Teoria from './Teoria';
import EjerciciosInteractivos from './EjerciciosInteractivos';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-content page-content"> {/* Aplica la clase aquí */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/teoria" element={<Teoria />} />
            <Route path="/ejercicios" element={<EjerciciosInteractivos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
