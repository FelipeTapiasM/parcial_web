import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Calculadora from './components/Calculadora';
import EjerciciosInteractivos from './components/EjerciciosInteractivos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/ejercicios-interactivos" element={<EjerciciosInteractivos />} />
      </Routes>
    </Router>
  );
}

export default App;
