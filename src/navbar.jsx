// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#4CAF50',
      padding: '1rem',
      textAlign: 'center',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
    }}>
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        margin: 0,
        padding: 0,
      }}>
        <li>
          <Link to="/" style={linkStyle}>MatematicasPrimaria</Link>
        </li>
        <li>
          <Link to="/calculadora" style={linkStyle}>Calculadora</Link>
        </li>
        <li>
          <Link to="/teoria" style={linkStyle}>Teoría</Link>
        </li>
        <li>
          <Link to="/ejercicios" style={linkStyle}>Ejercicios</Link>
        </li>
      </ul>
    </nav>
  );
};

// Estilos para los enlaces
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#4CAF50',
  borderRadius: '8px',
  transition: 'background-color 0.3s',
};

// Estilo para el hover de los enlaces
linkStyle[':hover'] = {
  backgroundColor: '#388e3c',
};

export default Navbar;
