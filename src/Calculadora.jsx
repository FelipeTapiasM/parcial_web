
import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Calculadora = () => {
    // Estados para almacenar los valores de los numeros ingresados
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState("");

    // Funcion para realizar las operaciones
    const calcular = (operacion) => {
    let res;

    switch (operacion) {
        case 'suma':
          res = numero1 + numero2;
          break;
        case 'resta':
          res = numero1 - numero2;
          break;
        case 'multiplicacion':
          res = numero1 * numero2;
          break;
        case 'division':
          res = numero2 !== 0 ? numero1 / numero2 : "Error: Division por cero";
          break;
        default:
          break;
        }

        setResultado(res);
    };

    return (
        <div>
            {/*Sirve para exportar el navbar*/}
            <Navbar />

            <div className="calculadora-container">
                {/* Titulo y descripcion */}
                <h2>Calculadora</h2>
                <p>Ingrese dos numeros y seleccione la operacion.</p>
                
                <div className="input-numeros">
                    {/* Div para el primer numero */}
                    <input
                    type="number"
                    value={numero1}
                    onChange={(e) => setNumero1(parseFloat(e.target.value))}
                    placeholder="Numero 1"
                    />
                    
                    {/* Div para el segundo numero */}
                    <input
                    type="number"
                    value={numero2}
                    onChange={(e) => setNumero2(parseFloat(e.target.value))}
                    placeholder="Numero 2"
                    />
                </div>
            
                <div className="botones-operacion">
                    {/* Botones para las operaciones */}
                    <button onClick={() => calcular('suma')}>Suma</button>
                    <button onClick={() => calcular('resta')}>Resta</button>
                    <button onClick={() => calcular('multiplicacion')}>Multiplicacion</button>
                    <button onClick={() => calcular('division')}>Division</button>
                </div>
            
                <div className="resultado">
                    {/* Resultado de la operacion */}
                    <h3>Resultado:</h3>
                    <p>{resultado}</p>
                </div>
            </div>
        {/*Sirve para exportar el footer*/}
        <Footer />
        </div>
    );
};

export default Calculadora;