import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Calculadora from './Calculadora';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Inicio />} /> {/* Ruta de inicio */}
            <Route path="/calculadora" element={<Calculadora />} /> {/* Ruta de calculadora */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
