import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Centros() {
    const [centros, setCentros] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('admin_sena_centros')) || [
            { id: 1, nombre: 'Centro de Teleinformática y Producción Industrial', regional: 'Cauca - Popayán' }
        ];
        setCentros(stored);
    }, []);

    const eliminarCentro = (id) => {
        const actualizados = centros.filter(c => c.id !== id);
        setCentros(actualizados);
        localStorage.setItem('admin_sena_centros', JSON.stringify(actualizados));
    };

    return (
        <div className="d-flex min-vh-100 bg-light w-100 m-0 p-0">
            <Sidebar />
            <div className="flex-grow-1 d-flex flex-column min-vw-0">
                <Navbar />
                <main className="p-4 flex-grow-1 container-fluid w-100">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-bold text-dark">
                            <i className="fas fa-building text-success me-2"></i> Centros de Formación
                        </h3>
                        <div className="d-flex gap-2">
                            <Link to="/centros/create" className="btn btn-success btn-sm fw-semibold text-decoration-none">
                                <i className="fas fa-plus me-1"></i> Nuevo Centro
                            </Link>
                            <Link to="/" className="btn btn-outline-secondary btn-sm fw-semibold">Volver al Inicio</Link>
                        </div>
                    </div>
                    <div className="card border-0 shadow-sm w-100">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre del Centro</th>
                                            <th>Ciudad / Regional</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {centros.length > 0 ? (
                                            centros.map((centro) => (
                                                <tr key={centro.id}>
                                                    <td>{centro.id}</td>
                                                    <td>{centro.nombre}</td>
                                                    <td>{centro.regional}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-primary me-1">Editar</button>
                                                        <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarCentro(centro.id)}>Borrar</button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center text-muted py-4">No hay centros registrados.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}