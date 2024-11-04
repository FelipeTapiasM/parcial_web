// Calculadora.jsx
import React, { useState } from 'react';

const Calculadora = () => {
  const [pantalla, setPantalla] = useState("");
  const [resultado, setResultado] = useState("");
  const [pasos, setPasos] = useState("");

  const agregarValor = (valor) => {
    setPantalla(pantalla + valor);
  };

  const calcularResultado = () => {
    try {
      const res = eval(pantalla);
      let pasosOperacion = "";

      // Genera explicación de los pasos según la operación
      if (pantalla.includes("+")) {
        const [num1, num2] = pantalla.split("+").map(Number);
        pasosOperacion = `Para sumar ${num1} y ${num2}, sumamos cada número:\n`;
        for (let i = 1; i <= num2; i++) {
          pasosOperacion += `${num1} + ${i} = ${num1 + i}\n`;
        }
        pasosOperacion += `Resultado final: ${res}`;
      } else if (pantalla.includes("-")) {
        const [num1, num2] = pantalla.split("-").map(Number);
        pasosOperacion = `Para restar ${num2} de ${num1}, quitamos uno a uno:\n`;
        for (let i = 1; i <= num2; i++) {
          pasosOperacion += `${num1} - ${i} = ${num1 - i}\n`;
        }
        pasosOperacion += `Resultado final: ${res}`;
      } else if (pantalla.includes("*")) {
        const [num1, num2] = pantalla.split("*").map(Number);
        pasosOperacion = `Multiplicar ${num1} por ${num2} es como sumar ${num1}, ${num2} veces:\n`;
        let sum = 0;
        for (let i = 1; i <= num2; i++) {
          sum += num1;
          pasosOperacion += `${num1} × ${i} = ${sum}\n`;
        }
        pasosOperacion += `Resultado final: ${res}`;
      } else if (pantalla.includes("/")) {
        const [num1, num2] = pantalla.split("/").map(Number);
        if (num2 !== 0) {
          const cociente = Math.floor(num1 / num2);
          const residuo = num1 % num2;
          pasosOperacion = `Dividimos ${num1} en ${num2} partes iguales:\n`;
          pasosOperacion += `Cada parte recibe ${cociente}.\n`;
          if (residuo > 0) {
            pasosOperacion += `Sobra ${residuo} que no se puede dividir.\n`;
          }
          pasosOperacion += `Resultado final: ${res}`;
        } else {
          pasosOperacion = "No se puede dividir entre 0.";
          setResultado("Error");
        }
      }

      setResultado(res);
      setPasos(pasosOperacion);
      setPantalla(res.toString());
    } catch (error) {
      setResultado("Error");
      setPasos("Hubo un error en el cálculo.");
    }
  };

  const limpiarPantalla = () => {
    setPantalla("");
    setResultado("");
    setPasos("");
  };

  return (
    <div className="calculadora-container">
      <div className="pantalla">{pantalla || "0"}</div>
      <div className="botones-grid">
        <button onClick={limpiarPantalla} className="boton-funcion">C</button>
        <button onClick={() => agregarValor("/")} className="boton-operador">÷</button>

        <button onClick={() => agregarValor("7")}>7</button>
        <button onClick={() => agregarValor("8")}>8</button>
        <button onClick={() => agregarValor("9")}>9</button>
        <button onClick={() => agregarValor("*")} className="boton-operador">×</button>


        <button onClick={() => agregarValor("4")}>4</button>
        <button onClick={() => agregarValor("5")}>5</button>
        <button onClick={() => agregarValor("6")}>6</button>
        <button onClick={() => agregarValor("+")} className="boton-operador">+</button>

        <button onClick={() => agregarValor("1")}>1</button>
        <button onClick={() => agregarValor("2")}>2</button>
        <button onClick={() => agregarValor("3")}>3</button>
        <button onClick={() => agregarValor("-")} className="boton-operador">−</button>

        <button onClick={() => agregarValor("0")} className="boton-cero">0</button>
        <button onClick={() => agregarValor(".")}>.</button>
        <button onClick={calcularResultado} className="boton-igual">=</button>
      </div>
      <div className="resultado">
        <h3>Resultado: {resultado}</h3>
        <h4>Explicación de los pasos:</h4>
        <pre>{pasos}</pre>
      </div>
    </div>
  );
};

export default Calculadora;
