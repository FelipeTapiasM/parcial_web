import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#4CAF50',
      padding: '2rem',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      position: 'fixed', // Fijar en la parte superior
      top: 0,
      width: '100%', // Ancho completo de la pantalla
      zIndex: 1000
    }}>
      MatematicasPrimaria
    </nav>
  );
};

export default Navbar;
