// Teoria.jsx
import React from 'react';

const Teoria = () => {
    return (
        <div className="teoria-container">
            <h2>Teoría de las Operaciones Matemáticas</h2>
            <p>Aprende los conceptos básicos de las operaciones matemáticas utilizadas en esta calculadora.</p>

            <section className="operacion-teoria">
                <h3>Suma</h3>
                <p>La suma es una operación matemática que representa el total de agregar dos o más cantidades. Es una de las operaciones básicas de la aritmética.</p>
                <p><strong>Ejemplo:</strong> Si tienes 3 manzanas y luego obtienes 2 más, el total será 3 + 2 = 5.</p>
            </section>

            <section className="operacion-teoria">
                <h3>Resta</h3>
                <p>La resta implica quitar una cantidad de otra, y se utiliza para encontrar la diferencia entre dos números.</p>
                <p><strong>Ejemplo:</strong> Si tienes 5 manzanas y das 2, te quedarás con 5 - 2 = 3.</p>
            </section>

            <section className="operacion-teoria">
                <h3>Multiplicación</h3>
                <p>La multiplicación es una operación que representa sumar un número repetidamente. Se utiliza para calcular cuántos grupos de una cantidad se obtienen.</p>
                <p><strong>Ejemplo:</strong> Si tienes 3 grupos de 4 manzanas, el total es 3 × 4 = 12.</p>
            </section>

            <section className="operacion-teoria">
                <h3>División</h3>
                <p>La división distribuye un número en partes iguales, permitiendo conocer cuántos grupos iguales se pueden formar con un número dado.</p>
                <p><strong>Ejemplo:</strong> Si tienes 12 manzanas y las divides en 4 grupos iguales, cada grupo recibirá 12 ÷ 4 = 3 manzanas.</p>
            </section>
        </div>
    );
};

export default Teoria;
