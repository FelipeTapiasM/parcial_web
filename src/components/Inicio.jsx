// Inicio.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css'; // Asegúrate de que Inicio.css esté en la carpeta styles

const Inicio = () => {
  return (
    <div>
      {/* Contenedor para el subtítulo */}
      <div className="main-container">
        <div className="nivel0">
          <div className="nivel0X">
            <p align="center" className="titulo-principal">
              Teoría y ejercicios resueltos de matemáticas
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor de opciones (cuadro general) */}
      <div className="contenedor-opciones">
        <div className="botones-container">
          <Link to="/teoria" className="opcion">Teoría</Link>
          <Link to="/ejercicios" className="opcion">Ejercicios</Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
