import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'bg-success text-white shadow-sm' : 'text-dark hover-bg-light';

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-white border-end" style={{ width: '260px', minHeight: '100vh' }}>
            {/* Logo superior */}
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none px-2 py-1">
                <span className="fs-4 fw-bold text-success d-flex align-items-center">
                    <i className="fas fa-shapes me-2 bg-success text-white p-2 rounded"></i> Admin-SENA
                </span>
            </Link>
            <hr className="text-muted" />

            {/* Enlaces de Navegación Lateral */}
            <ul className="nav nav-pills flex-column mb-auto gap-2">
                <li>
                    <Link to="/" className={`nav-link py-2 px-3 rounded-3 fw-semibold ${isActive('/')}`}>
                        <i className="fas fa-home me-3"></i> Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/ambientes" className={`nav-link py-2 px-3 rounded-3 fw-semibold ${isActive('/ambientes')}`}>
                        <i className="fas fa-desktop me-3"></i> Ambientes
                    </Link>
                </li>
                <li>
                    <Link to="/computadores" className={`nav-link py-2 px-3 rounded-3 fw-semibold ${isActive('/computadores')}`}>
                        <i className="fas fa-laptop me-3"></i> Computadores
                    </Link>
                </li>
                <li>
                    <Link to="/centros" className={`nav-link py-2 px-3 rounded-3 fw-semibold ${isActive('/centros')}`}>
                        <i className="fas fa-building me-3"></i> Centros
                    </Link>
                </li>
                <li>
                    <Link to="/cursos" className={`nav-link py-2 px-3 rounded-3 fw-semibold ${isActive('/cursos')}`}>
                        <i className="fas fa-book me-3"></i> Cursos
                    </Link>
                </li>
                <li>
                    <Link to="/instructores" className={`nav-link py-2 px-3 rounded-3 fw-semibold ${isActive('/instructores')}`}>
                        <i className="fas fa-chalkboard-teacher me-3"></i> Instructores
                    </Link>
                </li>
                <li>
                    <Link to="/aprendices" className={`nav-link py-2 px-3 rounded-3 fw-semibold ${isActive('/aprendices')}`}>
                        <i className="fas fa-user-graduate me-3"></i> Aprendices
                    </Link>
                </li>
            </ul>
        </div>
    );
}