import React from 'react';
import { Link } from 'react-router-dom';

export default function Terminos() {
    return (
        <div className="container mt-5">
            <h2>Términos y Condiciones</h2>
            <p>Plataforma institucional orientada al soporte de gestión académica y control de recursos físicos.</p>
            <Link to="/" className="btn btn-success mt-3">Volver al Inicio</Link>
        </div>
    );
}