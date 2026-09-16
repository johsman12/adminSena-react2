import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
            <div className="container-fluid px-4">
                <div className="row g-4 justify-content-between">
                    
                    {/* Columna 1: Información institucional */}
                    <div className="col-md-5">
                        <h6 className="fw-bold text-uppercase mb-2 text-success">Servicio Nacional de Aprendizaje (SENA)</h6>
                        <p className="text-light small mb-2">
                            Sistema Admin-SENA — Gestión y Control Académico. Plataforma institucional orientada al soporte de aprendices, instructores y recursos físicos.
                        </p>
                        <small className="text-secondary">&copy; 2026 SENA - Todos los derechos reservados.</small>
                    </div>

                    {/* Columna 2: Enlaces Útiles */}
                    <div className="col-md-3">
                        <h6 className="fw-bold text-uppercase mb-3 text-success">Enlaces Útiles</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><Link to="/quienes-somos" className="text-decoration-none text-light hover-success">Quiénes Somos</Link></li>
                            <li className="mb-2"><a href="https://oferta.senasofiaplus.edu.co" target="_blank" rel="noreferrer" className="text-decoration-none text-light">Sofía Plus</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Soporte */}
                    <div className="col-md-3">
                        <h6 className="fw-bold text-uppercase mb-3 text-success">Soporte</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><Link to="/soporte" className="text-decoration-none text-light">Mesa de Ayuda</Link></li>
                            <li className="mb-2"><Link to="/terminos" className="text-decoration-none text-light">Términos y Condiciones</Link></li>
                        </ul>
                        <div className="mt-3 text-secondary" style={{ fontSize: '0.75rem' }}>
                            Desarrollado para Gestión Académica
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}