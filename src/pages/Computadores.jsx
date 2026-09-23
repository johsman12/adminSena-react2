import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Computadores() {
    const [computadores, setComputadores] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('admin_sena_computadores')) || [
            { id: 1, serial: 'PC-SENA-301', ambiente: 'Laboratorio de Software 1', estado: 'Disponible' }
        ];
        setComputadores(stored);
    }, []);

    const eliminarComputador = (id) => {
        const actualizados = computadores.filter(c => c.id !== id);
        setComputadores(actualizados);
        localStorage.setItem('admin_sena_computadores', JSON.stringify(actualizados));
    };

    return (
        <div className="d-flex min-vh-100 bg-light w-100 m-0 p-0">
            <Sidebar />
            <div className="flex-grow-1 d-flex flex-column min-vw-0">
                <Navbar />
                <main className="p-4 flex-grow-1 container-fluid w-100">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-bold text-dark">
                            <i className="fas fa-laptop text-success me-2"></i> Listado de Computadores
                        </h3>
                        <div className="d-flex gap-2">
                            <Link to="/computadores/create" className="btn btn-success btn-sm fw-semibold text-decoration-none">
                                <i className="fas fa-plus me-1"></i> Nuevo Computador
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
                                            <th>Serial / Placa</th>
                                            <th>Ambiente Asignado</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {computadores.length > 0 ? (
                                            computadores.map((comp) => (
                                                <tr key={comp.id}>
                                                    <td>{comp.id}</td>
                                                    <td>{comp.serial}</td>
                                                    <td>{comp.ambiente}</td>
                                                    <td><span className="badge bg-success">{comp.estado || 'Disponible'}</span></td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-primary me-1">Editar</button>
                                                        <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarComputador(comp.id)}>Borrar</button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center text-muted py-4">No hay computadores registrados.</td>
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