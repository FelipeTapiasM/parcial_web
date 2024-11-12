// App.js
import React from 'react';
import './styles/App.css'; // Ajusta la ruta si el CSS está en la carpeta styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Teoria from './components/Teoria';
import EjerciciosInteractivos from './components/EjerciciosInteractivos';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-content page-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
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
