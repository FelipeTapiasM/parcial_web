// Inicio.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      {/* Contenedor para el subtítulo */}
      <div className="main-container">
        <div className="nivel0">
          <div className="nivel0X">
            <p align="center">
              <font size="+1">Teoría y ejercicios resueltos de matemáticas</font>
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor de opciones (cuadro general) */}
      <div className="contenedor-opciones">
        <div className="botones-container">
          <Link to="/calculadora" className="opcion">Calculadora</Link>
          <Link to="/teoria" className="opcion">Teoría</Link>
          <Link to="/ejercicios" className="opcion">Ejercicios</Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
