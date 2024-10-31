import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Calculadora = () => {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState("");
    const [pasos, setPasos] = useState(""); // Estado para los pasos desglosados

    const calcular = (operacion) => {
        let res;
        let pasosOperacion = "";

        switch (operacion) {
            case 'suma':
                res = numero1 + numero2;
                pasosOperacion = `Primero, contamos el número ${numero1}. Luego, añadimos ${numero2} uno por uno:\n`;
                for (let i = 1; i <= numero2; i++) {
                    pasosOperacion += `${numero1} + ${i} = ${numero1 + i}\n`;
                }
                pasosOperacion += `Así, el resultado final es ${res}.`;
                break;

            case 'resta':
                res = numero1 - numero2;
                pasosOperacion = `Empezamos con ${numero1}. Luego, quitamos ${numero2} uno por uno:\n`;
                for (let i = 1; i <= numero2; i++) {
                    pasosOperacion += `${numero1} - ${i} = ${numero1 - i}\n`;
                }
                pasosOperacion += `Por lo tanto, el resultado es ${res}.`;
                break;

            case 'multiplicacion':
                res = numero1 * numero2;
                pasosOperacion = `Multiplicar es como sumar varias veces. Sumamos ${numero1}, ${numero2} veces:\n`;
                let sum = 0;
                for (let i = 1; i <= numero2; i++) {
                    sum += numero1;
                    pasosOperacion += `${numero1} × ${i} = ${sum}\n`;
                }
                pasosOperacion += `Entonces, el resultado es ${res}.`;
                break;

            case 'division':
                if (numero2 !== 0) {
                    res = (numero1 / numero2).toFixed(2);
                    pasosOperacion = `Queremos repartir ${numero1} en ${numero2} grupos iguales.\n`;

                    let elementosPorGrupo = Math.floor(numero1 / numero2);
                    let sobrante = numero1 % numero2;
                    
                    pasosOperacion += `Cada grupo recibe ${elementosPorGrupo}.\n`;

                    if (sobrante > 0) {
                        pasosOperacion += `Nos sobran ${sobrante} que no se pueden repartir equitativamente.\n`;
                    }

                    pasosOperacion += `Así, cada grupo tiene ${elementosPorGrupo} y el resultado es aproximadamente ${res}.`;
                } else {
                    res = "Error: División por cero";
                    pasosOperacion = "No se puede dividir entre 0.";
                }
                break;

            default:
                break;
        }

        setResultado(res);
        setPasos(pasosOperacion); // Actualiza los pasos detallados
    };

    return (
        <div>
            <Navbar />

            <div className="calculadora-container">
                <h2>Calculadora</h2>
                <p>Ingrese dos números y seleccione la operación.</p>
                
                <div className="input-numeros">
                    <input
                        type="number"
                        value={numero1}
                        onChange={(e) => setNumero1(parseFloat(e.target.value))}
                        placeholder="Número 1"
                    />
                    <input
                        type="number"
                        value={numero2}
                        onChange={(e) => setNumero2(parseFloat(e.target.value))}
                        placeholder="Número 2"
                    />
                </div>
            
                <div className="botones-operacion">
                    <button onClick={() => calcular('suma')}>Suma</button>
                    <button onClick={() => calcular('resta')}>Resta</button>
                    <button onClick={() => calcular('multiplicacion')}>Multiplicación</button>
                    <button onClick={() => calcular('division')}>División</button>
                </div>
            
                <div className="resultado">
                    <h3>Resultado:</h3>
                    <p>{resultado}</p>
                    <h3>Pasos:</h3>
                    <pre>{pasos}</pre>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Calculadora;
