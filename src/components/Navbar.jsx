// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de que el archivo CSS esté en la carpeta correcta

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">MatematicasPrimaria</Link>
        </li>
        <li>
          <Link to="/teoria" className="navbar-link">Teoría</Link>
        </li>
        <li>
          <Link to="/ejercicios" className="navbar-link">Ejercicios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
