import React, { useState, useEffect } from 'react';
import { FaAppleAlt } from 'react-icons/fa';
import { FaMedal, FaTrophy } from 'react-icons/fa';
import '../styles/EjerciciosInteractivos.css';

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
    case 'division':
      const divisor = Math.max(1, Math.floor(Math.random() * 5) + 1);
      respuestaCorrecta = Math.floor(cantidad1 / divisor);
      return { cantidad1: respuestaCorrecta * divisor, cantidad2: divisor, respuestaCorrecta, tipo: 'division' };
    default:
      const operaciones = ['suma', 'resta', 'multiplicacion', 'division'];
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
  const [vidas, setVidas] = useState(3);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [opciones, setOpciones] = useState([]);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState(0);

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

  useEffect(() => {
    if (ejerciciosCompletados >= 10 || vidas <= 0) {
      setJuegoTerminado(true);
    }
  }, [ejerciciosCompletados, vidas]);

  const manejarRespuesta = (respuesta) => {
    setRespuestaSeleccionada(respuesta);
    setMostrarExplicacion(true);

    if (respuesta === respuestaCorrecta) {
      setPuntaje(puntaje + 1);
      setEjerciciosCompletados(ejerciciosCompletados + 1);
    } else {
      setVidas(vidas - 1);
      if (vidas - 1 <= 0) {
        setJuegoTerminado(true);
      }
    }
  };

  const siguienteEjercicio = () => {
    setEjercicio(generarEjercicio(tipoJuego));
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  const reiniciarJuego = () => {
    setPuntaje(0);
    setVidas(3);
    setEjerciciosCompletados(0);
    setJuegoTerminado(false);
    setEjercicio(generarEjercicio(tipoJuego));
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  const seleccionarTipoJuego = (tipo) => {
    setTipoJuego(tipo);
    setEjercicio(generarEjercicio(tipo));
    setPuntaje(0);
    setVidas(3);
    setEjerciciosCompletados(0);
    setJuegoTerminado(false);
  };

  const volverASeleccionarTipo = () => {
    setTipoJuego(null);
    setPuntaje(0);
    setVidas(3);
    setEjerciciosCompletados(0);
    setJuegoTerminado(false);
    setRespuestaSeleccionada(null);
    setMostrarExplicacion(false);
  };

  const renderizarManzanas = () => {
    return (
      <div className="manzanas-horizontal">
        <div className="grupo-manzanas">
          {[...Array(cantidad1)].map((_, index) => (
            <FaAppleAlt key={`manzana1-${index}`} className="manzana-icon" />
          ))}
        </div>
        <span className="operador-simbolo">
          {tipo === 'suma' ? '+' : tipo === 'resta' ? '-' : tipo === 'multiplicacion' ? '×' : '÷'}
        </span>
        <div className="grupo-manzanas">
          {[...Array(cantidad2)].map((_, index) => (
            <FaAppleAlt key={`manzana2-${index}`} className="manzana-icon" />
          ))}
        </div>
      </div>
    );
  };

  const obtenerExplicacion = () => {
    switch (tipo) {
      case 'suma':
        return `Estamos sumando. Empezamos con ${cantidad1} manzanas y añadimos ${cantidad2} más. Total: ${cantidad1 + cantidad2}.`;
      case 'resta':
        return `Estamos restando. Empezamos con ${cantidad1} manzanas y quitamos ${cantidad2}. Resultado: ${cantidad1 - cantidad2}.`;
      case 'multiplicacion':
        return `Estamos multiplicando. ${cantidad1} grupos de ${cantidad2} manzanas cada uno. Total: ${cantidad1 * cantidad2}.`;
      case 'division':
        return `Estamos dividiendo. Repartimos ${cantidad1} manzanas en ${cantidad2} grupos iguales. Resultado: ${respuestaCorrecta} manzanas por grupo.`;
      default:
        return '';
    }
  };

  const renderizarMedalla = () => {
    if (puntaje === 10 && vidas === 3) {
      return (
        <div className="medalla">
          <FaTrophy style={{ color: 'gold', fontSize: '2rem' }} />
          <p>¡Increíble! Medalla de oro y trofeo por completar sin perder vidas.</p>
        </div>
      );
    } else if (puntaje >= 8) {
      return (
        <div className="medalla">
          <FaMedal style={{ color: 'gold', fontSize: '2rem' }} />
          <p>¡Felicidades! Medalla de oro.</p>
        </div>
      );
    } else if (puntaje >= 5) {
      return (
        <div className="medalla">
          <FaMedal style={{ color: 'silver', fontSize: '2rem' }} />
          <p>¡Bien hecho! Medalla de plata.</p>
        </div>
      );
    } else if (puntaje >= 3) {
      return (
        <div className="medalla">
          <FaMedal style={{ color: '#cd7f32', fontSize: '2rem' }} />
          <p>¡Sigue practicando! Medalla de bronce.</p>
        </div>
      );
    } else {
      return <p>¡Sigue intentándolo para obtener una medalla!</p>;
    }
  };

  return (
    <div className="ejercicios-container">
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
          <button onClick={() => seleccionarTipoJuego('division')} className="boton-seleccion">División</button>
          <button onClick={() => seleccionarTipoJuego('todos')} className="boton-seleccion">Todos</button>
        </div>
      ) : (
        <>
          <div className="marcadores">
            <p className="puntaje">Puntaje: {puntaje}</p>
            <p className="vidas">Vidas: {vidas}</p>
          </div>

          <div className="manzanas-container">
            <h3>{`${cantidad1} ${tipo === 'suma' ? '+' : tipo === 'resta' ? '-' : tipo === 'multiplicacion' ? '×' : '÷'} ${cantidad2}`}</h3>
            {renderizarManzanas()}
          </div>

          <div className="opciones">
            {opciones.map((opcion) => {
              let claseOpcion = 'opcion';
              if (respuestaSeleccionada !== null) {
                if (opcion === respuestaCorrecta) {
                  claseOpcion += ' correcto';
                } else if (opcion === respuestaSeleccionada) {
                  claseOpcion += ' incorrecto';
                } else {
                  claseOpcion += ' neutro';
                }
              }

              return (
                <button
                  key={opcion}
                  onClick={() => manejarRespuesta(opcion)}
                  className={claseOpcion}
                  disabled={respuestaSeleccionada !== null}
                >
                  {opcion}
                </button>
              );
            })}
          </div>

          {mostrarExplicacion && (
            <div className="explicacion">
              <h3>{respuestaSeleccionada === respuestaCorrecta ? "¡Correcto! 🎉" : "Incorrecto 😞"}</h3>
              <pre className="explicacion-pasos">{obtenerExplicacion()}</pre>
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
              <p>Tu puntaje final es: {puntaje}</p>
              {renderizarMedalla()}
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
