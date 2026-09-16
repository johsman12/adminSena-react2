import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="d-flex min-vh-100 bg-light w-100 m-0 p-0 overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenedor derecho principal */}
            <div className="flex-grow-1 d-flex flex-column min-vw-0">
                <Navbar />

                {/* Contenido principal expandido al 100% */}
                <main className="p-4 flex-grow-1 w-100" style={{ maxWidth: '100%' }}>
                    
                    {/* Banner Principal Ancho Total */}
                    <div className="card text-white bg-success mb-4 shadow border-0 w-100" style={{ background: 'linear-gradient(135deg, #39A900 0%, #297a00 100%)', borderRadius: '12px' }}>
                        <div className="card-body p-4 p-md-4">
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                                <div>
                                    <span className="badge bg-white text-success mb-2 px-3 py-1 rounded-pill fw-bold" style={{ fontSize: '0.75rem' }}>Gestión Académica SENA</span>
                                    <h1 className="h3 fw-bold mb-1">Bienvenido Administrador</h1>
                                    <p className="mb-0 small opacity-90">Desde este panel podrás administrar cursos, aprendices, instructores, centros de formación y equipos de manera eficiente.</p>
                                </div>
                                <div className="d-flex gap-2">
                                    <Link to="/ambientes" className="btn btn-light text-success fw-semibold btn-sm shadow-sm px-3">
                                        <i className="fas fa-desktop me-1"></i> Ambientes
                                    </Link>
                                    <Link to="/cursos" className="btn btn-outline-light fw-semibold btn-sm px-3">
                                        <i className="fas fa-book me-1"></i> Cursos
                                    </Link>
                                </div>
                            </div>

                            {/* Contadores Estadísticos */}
                            <div className="row g-3 mt-3 w-100 m-0">
                                <div className="col-6 col-md-3 px-2">
                                    <div className="p-3 rounded bg-white bg-opacity-10 border-start border-4 border-white shadow-sm">
                                        <small className="opacity-75 text-uppercase fw-semibold" style={{ fontSize: '0.7rem' }}>Aprendices</small>
                                        <div className="fs-3 fw-bold">9</div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 px-2">
                                    <div className="p-3 rounded bg-white bg-opacity-10 border-start border-4 border-white shadow-sm">
                                        <small className="opacity-75 text-uppercase fw-semibold" style={{ fontSize: '0.7rem' }}>Instructores</small>
                                        <div className="fs-3 fw-bold">4</div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 px-2">
                                    <div className="p-3 rounded bg-white bg-opacity-10 border-start border-4 border-white shadow-sm">
                                        <small className="opacity-75 text-uppercase fw-semibold" style={{ fontSize: '0.7rem' }}>Cursos</small>
                                        <div className="fs-3 fw-bold">9</div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 px-2">
                                    <div className="p-3 rounded bg-white bg-opacity-10 border-start border-4 border-white shadow-sm">
                                        <small className="opacity-75 text-uppercase fw-semibold" style={{ fontSize: '0.7rem' }}>Equipos</small>
                                        <div className="fs-3 fw-bold">10</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección: Anuncios y Nuevas Ofertas */}
                    <div className="mb-5 w-100">
                        <h5 className="fw-bold text-dark mb-3 border-bottom pb-2">
                            <i className="fas fa-bullhorn text-success me-2"></i> Anuncios y Nuevas Ofertas
                        </h5>
                        <div className="row g-4 w-100 m-0">
                            <div className="col-md-4 px-2">
                                <div className="card h-100 border-0 shadow-sm border-top border-success border-4 rounded-3 w-100">
                                    <div className="card-body d-flex flex-column">
                                        <div className="text-success mb-2"><i className="fas fa-graduation-cap fa-2x"></i></div>
                                        <h6 className="card-title fw-bold text-dark">Convocatoria de Formación Titulada</h6>
                                        <p className="card-text text-muted small flex-grow-1">Entérate de las nuevas ofertas educativas disponibles para este trimestre y las inscripciones abiertas.</p>
                                        <button className="btn btn-success btn-sm mt-3 w-100 fw-semibold">Ver más</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 px-2">
                                <div className="card h-100 border-0 shadow-sm border-top border-success border-4 rounded-3 w-100">
                                    <div className="card-body d-flex flex-column">
                                        <div className="text-success mb-2"><i className="fas fa-tools fa-2x"></i></div>
                                        <h6 className="card-title fw-bold text-dark">Mantenimiento de Equipos</h6>
                                        <p className="card-text text-muted small flex-grow-1">Consulta el cronograma de revisión técnica y actualización de software para los computadores de las áreas.</p>
                                        <button className="btn btn-success btn-sm mt-3 w-100 fw-semibold">Ver más</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 px-2">
                                <div className="card h-100 border-0 shadow-sm border-top border-success border-4 rounded-3 w-100">
                                    <div className="card-body d-flex flex-column">
                                        <div className="text-success mb-2"><i className="fas fa-users fa-2x"></i></div>
                                        <h6 className="card-title fw-bold text-dark">Capacitaciones y Talleres</h6>
                                        <p className="card-text text-muted small flex-grow-1">Participa en las jornadas especiales de desarrollo, control de versiones y bases de datos organizadas por la institución.</p>
                                        <button className="btn btn-success btn-sm mt-3 w-100 fw-semibold">Ver más</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección: Nuevas Fichas y Eventos Destacados */}
                    <div className="mb-4 w-100">
                        <h5 className="fw-bold text-dark mb-3 border-bottom pb-2">
                            <i className="fas fa-calendar-check text-success me-2"></i> Nuevas Fichas y Eventos Destacados
                        </h5>
                        <div className="row g-4 w-100 m-0">
                            <div className="col-md-4 px-2">
                                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden w-100">
                                    <div className="bg-success text-white p-2 text-center small fw-bold">Fichas</div>
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title fw-bold text-dark">Ficha 2875310 - ADSO</h6>
                                        <p className="card-text text-muted small flex-grow-1">Inicio de trimestre para las nuevas tecnologías orientadas al diseño de arquitecturas web completas.</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                                            <small className="text-muted"><i className="fas fa-calendar-alt me-1"></i> Agosto 2026</small>
                                            <span className="badge bg-info text-dark">Mañana</span>
                                        </div>
                                        <button className="btn btn-outline-success btn-sm w-100 mt-3 fw-semibold"><i className="fas fa-eye me-1"></i> Ver Ficha</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 px-2">
                                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden w-100">
                                    <div className="bg-warning text-dark p-2 text-center small fw-bold">Inscripciones</div>
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title fw-bold text-dark">Nuevos Ambientes de Redes</h6>
                                        <p className="card-text text-muted small flex-grow-1">Habilitación de laboratorios optimizados con estaciones de trabajo de alto rendimiento para redes.</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                                            <small className="text-muted">Próximamente</small>
                                            <span className="badge bg-secondary">Bloque C</span>
                                        </div>
                                        <button className="btn btn-outline-success btn-sm w-100 mt-3 fw-semibold"><i className="fas fa-eye me-1"></i> Ver Ficha</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 px-2">
                                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden w-100">
                                    <div className="bg-primary text-white p-2 text-center small fw-bold">En Proceso</div>
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title fw-bold text-dark">Ficha 2901142 - Multimedia</h6>
                                        <p className="card-text text-muted small flex-grow-1">Diseño y montaje de interfaces gráficas interactivas orientadas a la experiencia de usuario móvil.</p>
                                        <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                                            <small className="text-muted"><i className="fas fa-calendar-alt me-1"></i> Septiembre 2026</small>
                                            <span className="badge bg-secondary">Tarde</span>
                                        </div>
                                        <button className="btn btn-outline-success btn-sm w-100 mt-3 fw-semibold"><i className="fas fa-eye me-1"></i> Ver Ficha</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
                <Footer />
            </div>
        </div>
    );
}