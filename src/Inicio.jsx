import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';


const Inicio = () => {
  return (
    <div>
      {/*Sirve para exportar el navbar*/}
      <Navbar />

      {/*divs para el subtitulo*/}
      <div className="main-container">
        {/* Contenedor del titulo con las dos clases */}
        <div className="nivel0">
          <div className="nivel0X">
            <p align= "center">
              <font size="+1">Teoría y ejercicios resueltos de matemáticas</font>
            </p>
          </div>
        </div>
      </div>

     {/* Contenedor de opciones (cuadro general) */}
     <div className="contenedor-opciones">
        {/* Contenedor de botones */}
        <div className="botones-container">
          <Link to="/calculadora" className="opcion">Calculadora</Link>
          <Link to="/teoria" className="opcion">Teoría</Link>
          <Link to="/ejercicios-interactivos" className="opcion">Ejercicios</Link>
        </div>
      </div>

      {/*Sirve para exportar el footer*/}
      <Footer />
    </div>
  );
};

export default Inicio;
