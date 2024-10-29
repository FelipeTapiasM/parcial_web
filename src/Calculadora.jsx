import React from 'react';

const CalculadoraBasica = () => {
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
    }
}