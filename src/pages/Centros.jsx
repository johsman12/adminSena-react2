import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Centros() {
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
                            <button className="btn btn-success btn-sm fw-semibold"><i className="fas fa-plus me-1"></i> Nuevo Centro</button>
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
                                        <tr>
                                            <td>1</td>
                                            <td>Centro de Teleinformática y Producción Industrial</td>
                                            <td>Cauca - Popayán</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">Editar</button>
                                                <button className="btn btn-sm btn-outline-danger">Borrar</button>
                                            </td>
                                        </tr>
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