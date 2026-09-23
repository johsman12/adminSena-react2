import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function QuienesSomos() {
    return (
        <div className="d-flex min-vh-100 bg-light w-100 m-0 p-0 overflow-hidden position-relative">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenedor principal */}
            <div className="flex-grow-1 d-flex flex-column min-vw-0">
                <Navbar />

                <main className="p-4 flex-grow-1 w-100" style={{ maxWidth: '100%' }}>
                    <div className="card shadow-sm border-0 rounded-3 p-4 bg-white">
                        <div className="border-bottom pb-3 mb-4">
                            <span className="badge bg-success mb-1">Información Institucional</span>
                            <h2 className="fw-bold text-dark">¿Quiénes Somos?</h2>
                        </div>

                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="p-4 rounded bg-light border-start border-4 border-success h-100 shadow-sm">
                                    <h4 className="fw-bold text-success mb-3">Misión</h4>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.6' }}>
                                        El Servicio Nacional de Aprendizaje (SENA) se encarga de cumplir la función que le corresponde al estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral para la incorporación y desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="p-4 rounded bg-light border-start border-4 border-success h-100 shadow-sm">
                                    <h4 className="fw-bold text-success mb-3">Visión</h4>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.6' }}>
                                        Consolidarnos como una entidad líder en educación, impulsando la innovación tecnológica y el talento humano para el desarrollo productivo del país.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-3">
                            <Link to="/" className="btn btn-success px-4 fw-semibold">
                                <i className="fas fa-arrow-left me-2"></i> Volver al Inicio
                            </Link>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}