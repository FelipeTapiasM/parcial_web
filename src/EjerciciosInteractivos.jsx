// EjerciciosInteractivos.jsx
import React, { useState } from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const ejercicios = [
  { cantidad1: 3, cantidad2: 2, respuestaCorrecta: 5 },
  { cantidad1: 4, cantidad2: 4, respuestaCorrecta: 8 },
  { cantidad1: 2, cantidad2: 5, respuestaCorrecta: 7 },
  { cantidad1: 6, cantidad2: 3, respuestaCorrecta: 9 },
];

const EjerciciosInteractivos = () => {
  const [indiceEjercicio, setIndiceEjercicio] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  const { cantidad1, cantidad2, respuestaCorrecta } = ejercicios[indiceEjercicio];
  const totalManzanas = cantidad1 + cantidad2;

  const opciones = [
    respuestaCorrecta,
    respuestaCorrecta + 1,
    respuestaCorrecta - 1,
    respuestaCorrecta + 2,
  ].sort(() => Math.random() - 0.5); // Mezcla las opciones

  const manejarRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
    setMostrarExplicacion(true);

    if (respuesta === respuestaCorrecta) {
      setPuntaje(puntaje + 1);
    }
  };

  const siguienteEjercicio = () => {
    setIndiceEjercicio((prevIndice) => (prevIndice + 1) % ejercicios.length);
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  const reiniciarEjercicio = () => {
    setIndiceEjercicio(0);
    setPuntaje(0);
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  return (
    <div className="ejercicios-container">
      <h2>Ejercicio de Conteo</h2>
      <p className="puntaje">Puntaje: {puntaje}</p>
      
      {/* Sección de manzanas */}
      <div className="manzanas-container">
        <h3>Cuenta las manzanas y selecciona la respuesta correcta:</h3>
        
        <div className="grupo-manzanas">
          <span className="contador-manzanas">{cantidad1} manzanas</span>
          <div className="iconos-manzanas">
            {[...Array(cantidad1)].map((_, index) => (
              <FaAppleAlt key={`manzana1-${index}`} className="manzana-icon" />
            ))}
          </div>
        </div>
        
        <span className="mas-simbolo">+</span>
        
        <div className="grupo-manzanas">
          <span className="contador-manzanas">{cantidad2} manzanas</span>
          <div className="iconos-manzanas">
            {[...Array(cantidad2)].map((_, index) => (
              <FaAppleAlt key={`manzana2-${index}`} className="manzana-icon" />
            ))}
          </div>
        </div>
      </div>

      <div className="opciones">
        {opciones.map((opcion) => (
          <button
            key={opcion}
            onClick={() => manejarRespuesta(opcion)}
            className={`opcion ${respuestaSeleccionada === opcion ? (opcion === respuestaCorrecta ? 'correcto' : 'incorrecto') : ''}`}
          >
            {opcion}
          </button>
        ))}
      </div>

      {/* Explicación paso a paso */}
      {mostrarExplicacion && (
        <div className="explicacion">
          <h3>{respuestaSeleccionada === respuestaCorrecta ? "¡Correcto! 🎉" : "Incorrecto 😞"}</h3>
          <p>Explicación:</p>
          <pre className="explicacion-pasos">
            {`Empezamos con ${cantidad1} manzanas y añadimos ${cantidad2} más.\nTotal: ${totalManzanas}.`}
          </pre>
          <button onClick={siguienteEjercicio} className="boton-siguiente">
            Siguiente Ejercicio
          </button>
          <button onClick={reiniciarEjercicio} className="boton-reiniciar">
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
};

export default EjerciciosInteractivos;
