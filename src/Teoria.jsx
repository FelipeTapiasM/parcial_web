// Teoria.jsx
import React from 'react';
import { FaAppleAlt } from 'react-icons/fa';

const Teoria = () => {
    return (
        <div className="teoria-container">
            <h2>Teoría de las Operaciones Matemáticas</h2>
            <p>Aprende los conceptos básicos de las operaciones matemáticas utilizadas en esta calculadora.</p>

            <section className="operacion-teoria">
                <h3>Suma</h3>
                <p>La suma es una operación matemática que representa el total de agregar dos o más cantidades.</p>
                <p>Es una de las operaciones básicas de la aritmética y se usa en diversas situaciones.</p>
                <p><strong>Ejemplo paso a paso:</strong></p>
                <div className="teoria-ejemplo">
                    <p>Si tienes 3 manzanas y obtienes 2 más, el proceso es el siguiente:</p>
                    <div className="iconos-manzanas">
                        {[...Array(3)].map((_, i) => <FaAppleAlt key={`suma1-${i}`} className="manzana-icon" />)}
                        <span> + </span>
                        {[...Array(2)].map((_, i) => <FaAppleAlt key={`suma2-${i}`} className="manzana-icon" />)}
                    </div>
                    <p>Total: 3 + 2 = 5 manzanas.</p>
                </div>
                <a href="https://www.youtube.com/watch?v=br4Z-HZtIQQ" target="_blank" rel="noopener noreferrer">
                    Ver video de Suma
                </a>
            </section>

            <section className="operacion-teoria">
                <h3>Resta</h3>
                <p>La resta implica quitar una cantidad de otra y se utiliza para encontrar la diferencia entre dos números.</p>
                <p><strong>Ejemplo paso a paso:</strong></p>
                <div className="teoria-ejemplo">
                    <p>Si tienes 5 manzanas y das 2, el proceso es el siguiente:</p>
                    <div className="iconos-manzanas">
                        {[...Array(5)].map((_, i) => <FaAppleAlt key={`resta1-${i}`} className="manzana-icon" />)}
                        <span> - </span>
                        {[...Array(2)].map((_, i) => <FaAppleAlt key={`resta2-${i}`} className="manzana-icon" />)}
                    </div>
                    <p>Resultado: 5 - 2 = 3 manzanas.</p>
                </div>
                <a href="https://www.youtube.com/watch?v=BuKpDUH9f3Q" target="_blank" rel="noopener noreferrer">
                    Ver video de Resta
                </a>
            </section>

            <section className="operacion-teoria">
                <h3>Multiplicación</h3>
                <p>La multiplicación representa sumar un número repetidamente. Se utiliza para calcular cuántos grupos de una cantidad se obtienen.</p>
                <p><strong>Ejemplo paso a paso:</strong></p>
                <div className="teoria-ejemplo">
                    <p>Si tienes 3 grupos de 4 manzanas cada uno, el proceso es el siguiente:</p>
                    <div className="iconos-manzanas">
                        {[...Array(3)].map((_, groupIndex) => (
                            <div key={`grupo-manzanas-${groupIndex}`} className="grupo-manzanas">
                                {[...Array(4)].map((_, i) => <FaAppleAlt key={`mult-${groupIndex}-${i}`} className="manzana-icon" />)}
                            </div>
                        ))}
                    </div>
                    <p>Total: 3 × 4 = 12 manzanas.</p>
                </div>
                <a href="https://www.youtube.com/watch?v=aEh9WnqiyAg" target="_blank" rel="noopener noreferrer">
                    Ver video de Multiplicación
                </a>
            </section>

            <section className="operacion-teoria">
                <h3>División</h3>
                <p>La división distribuye un número en partes iguales, permitiendo conocer cuántos grupos iguales se pueden formar.</p>
                <p><strong>Ejemplo paso a paso:</strong></p>
                <div className="teoria-ejemplo">
                    <p>Si tienes 12 manzanas y las divides en 4 grupos iguales, el proceso es el siguiente:</p>
                    <div className="iconos-manzanas">
                        {[...Array(4)].map((_, groupIndex) => (
                            <div key={`grupo-div-${groupIndex}`} className="grupo-manzanas">
                                {[...Array(3)].map((_, i) => <FaAppleAlt key={`div-${groupIndex}-${i}`} className="manzana-icon" />)}
                            </div>
                        ))}
                    </div>
                    <p>Resultado: 12 ÷ 4 = 3 manzanas por grupo.</p>
                </div>
                <a href="https://www.youtube.com/watch?v=EMGcZELKoss" target="_blank" rel="noopener noreferrer">
                    Ver video de División
                </a>
            </section>
        </div>
    );
};

export default Teoria;
