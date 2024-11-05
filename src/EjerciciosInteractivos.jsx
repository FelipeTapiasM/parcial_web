// EjerciciosInteractivos.jsx
import React, { useState, useEffect } from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const generarEjercicio = (tipo) => {
  const cantidad1 = Math.floor(Math.random() * 10) + 1;
  const cantidad2 = Math.floor(Math.random() * 10) + 1;
  let respuestaCorrecta;

  switch (tipo) {
    case 'suma':
      respuestaCorrecta = cantidad1 + cantidad2;
      break;
    case 'resta':
      respuestaCorrecta = cantidad1 - cantidad2;
      break;
    case 'multiplicacion':
      respuestaCorrecta = cantidad1 * cantidad2;
      break;
    default:
      const operaciones = ['suma', 'resta', 'multiplicacion'];
      return generarEjercicio(operaciones[Math.floor(Math.random() * operaciones.length)]);
  }

  return { cantidad1, cantidad2, respuestaCorrecta, tipo };
};

const EjerciciosInteractivos = () => {
  const [tipoJuego, setTipoJuego] = useState(null);
  const [ejercicio, setEjercicio] = useState(generarEjercicio(tipoJuego));
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [opciones, setOpciones] = useState([]);

  const { cantidad1, cantidad2, respuestaCorrecta, tipo } = ejercicio;

  useEffect(() => {
    const nuevasOpciones = [
      respuestaCorrecta,
      respuestaCorrecta + 1,
      respuestaCorrecta - 1,
      respuestaCorrecta + 2,
    ].sort(() => Math.random() - 0.5);
    setOpciones(nuevasOpciones);
  }, [ejercicio]);

  const manejarRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
    setMostrarExplicacion(true);

    if (respuesta === respuestaCorrecta) {
      setPuntaje(puntaje + 1);
    } else {
      setJuegoTerminado(true);
    }
  };

  const siguienteEjercicio = () => {
    setEjercicio(generarEjercicio(tipoJuego));
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  const reiniciarJuego = () => {
    setPuntaje(0);
    setJuegoTerminado(false);
    setEjercicio(generarEjercicio(tipoJuego));
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  const seleccionarTipoJuego = (tipo) => {
    setTipoJuego(tipo);
    setEjercicio(generarEjercicio(tipo));
    setPuntaje(0);
    setJuegoTerminado(false);
  };

  const volverASeleccionarTipo = () => {
    setTipoJuego(null);
    setPuntaje(0);
    setJuegoTerminado(false);
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  return (
    <div className="ejercicios-container">
      {/* Botón de volver en la parte superior izquierda */}
      {tipoJuego !== null && (
        <button onClick={volverASeleccionarTipo} className="boton-volver">
          Volver
        </button>
      )}
      
      <h2>Ejercicio de Operaciones</h2>
      {tipoJuego === null ? (
        <div className="seleccion-juego">
          <h3>Selecciona el tipo de juego:</h3>
          <button onClick={() => seleccionarTipoJuego('suma')} className="boton-seleccion">Suma</button>
          <button onClick={() => seleccionarTipoJuego('resta')} className="boton-seleccion">Resta</button>
          <button onClick={() => seleccionarTipoJuego('multiplicacion')} className="boton-seleccion">Multiplicación</button>
          <button onClick={() => seleccionarTipoJuego('todos')} className="boton-seleccion">Todos</button>
        </div>
      ) : (
        <>
          <p className="puntaje">Puntaje: {puntaje}</p>

          <div className="manzanas-container">
            <h3>
              {tipo === 'suma'
                ? 'Cuenta las manzanas y selecciona la respuesta correcta:'
                : `Resuelve: ${cantidad1} ${
                    tipo === 'suma' ? '+' : tipo === 'resta' ? '-' : '×'
                  } ${cantidad2}`}
            </h3>

            {tipo === 'suma' && (
              <>
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
              </>
            )}
          </div>

          <div className="opciones">
            {opciones.map((opcion) => (
              <button
                key={opcion}
                onClick={() => manejarRespuesta(opcion)}
                className={`opcion ${respuestaSeleccionada === opcion ? (opcion === respuestaCorrecta ? 'correcto' : 'incorrecto') : ''}`}
                disabled={respuestaSeleccionada !== null}
              >
                {opcion}
              </button>
            ))}
          </div>

          {mostrarExplicacion && (
            <div className="explicacion">
              <h3>{respuestaSeleccionada === respuestaCorrecta ? "¡Correcto! 🎉" : "Incorrecto 😞"}</h3>
              <p>Explicación:</p>
              <pre className="explicacion-pasos">
                {tipo === 'suma'
                  ? `Empezamos con ${cantidad1} manzanas y añadimos ${cantidad2} más.\nTotal: ${cantidad1 + cantidad2}.`
                  : `Operación: ${cantidad1} ${tipo === 'resta' ? '-' : '×'} ${cantidad2} = ${respuestaCorrecta}`}
              </pre>
              {!juegoTerminado && (
                <button onClick={siguienteEjercicio} className="boton-siguiente">
                  Siguiente Ejercicio
                </button>
              )}
            </div>
          )}

          {juegoTerminado && (
            <div className="juego-terminado">
              <h3>Juego Terminado</h3>
              <p>Has cometido un error. Tu puntaje final es: {puntaje}</p>
              <button onClick={reiniciarJuego} className="boton-reiniciar">
                Reiniciar
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EjerciciosInteractivos;
