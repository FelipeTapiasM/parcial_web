// Footer.jsx
import React from 'react';
import '../styles/Footer.css'; // Asegúrate de que Footer.css esté en la carpeta styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@matematicasprimaria.com</p>
          <p>Teléfono: +123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
          <p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Útiles</h4>
          <p>
            <a href="/">Inicio</a>
          </p>
          <p>
            <a href="/teoria">Teoría</a>
          </p>
          <p>
            <a href="/ejercicios">Ejercicios</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MatematicasPrimaria. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
