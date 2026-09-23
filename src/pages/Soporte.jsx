import React from 'react';
import { Link } from 'react-router-dom';

export default function Soporte() {
    return (
        <div className="container mt-5">
            <h2>Mesa de Ayuda - Soporte SENA</h2>
            <p>Si presentas inconvenientes con la plataforma, comunícate con el administrador del sistema.</p>
            <Link to="/" className="btn btn-success mt-3">Volver al Inicio</Link>
        </div>
    );
}