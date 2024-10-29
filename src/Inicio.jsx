import React from 'react';
import Navbar from './navbar';
import Footer from './footer';


const Inicio = () => {
  return (
    <div>
      {/*Exportar el navbar*/}
      <Navbar />

      {/*divs para el subtitulo*/}
      <div className="main-container">
        {/* Contenedor del título con las dos clases */}
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
          <a href="/calculadora" className="opcion">Calculadora</a>
          <a href="/ejercicios-interactivos" className="opcion">Ejercicios</a>
        </div>
      </div>

      {/*Exportar el footer*/}
      <Footer />
    </div>
  );
};

export default Inicio;
