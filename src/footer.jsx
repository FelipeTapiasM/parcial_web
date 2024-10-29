// Footer.jsx
import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
        {/* Información de contacto */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@matematicasprimaria.com</p>
          <p>Teléfono: +123 456 789</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <a href="/">Inicio</a>
          <a href="/calculadora">Calculadora</a>
          <a href="/ejercicios-interactivos">Ejercicios Interactivos</a>
        </div>

        {/* Redes Sociales */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 MatemáticasPrimaria. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
};

export default Footer;
