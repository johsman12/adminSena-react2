import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AprendicesList() {
    const [aprendices, setAprendices] = useState([]);

    // Cargar los aprendices desde el localStorage al abrir la vista
    useEffect(() => {
        const saved = localStorage.getItem('admin_sena_aprendices');
        if (saved) {
            try {
                setAprendices(JSON.parse(saved));
            } catch (e) {
                console.error("Error al analizar los aprendices del localStorage", e);
            }
        } else {
            // Datos iniciales por defecto si está vacío la primera vez
            const datosIniciales = [
                { id: 1, documento: '1001234567', nombre: 'Johsman', ficha: '2875310' },
                { id: 2, documento: '1009876543', nombre: 'María Gómez', ficha: '2875310' },
                { id: 3, documento: '124526255', nombre: 'jose', ficha: '123433' },
                { id: 4, documento: '1246787654', nombre: 'andres', ficha: '123433' },
                { id: 5, documento: '21345678765432', nombre: 'matias', ficha: '2343234' },
                { id: 6, documento: '2536789', nombre: 'gpg', ficha: '42366' },
                { id: 7, documento: '1234567898', nombre: 'julian', ficha: '1237652' }
            ];
            localStorage.setItem('admin_sena_aprendices', JSON.stringify(datosIniciales));
            setAprendices(datosIniciales);
        }
    }, []);

    const eliminarAprendiz = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este aprendiz?')) {
            const nuevosAprendices = aprendices.filter(a => a.id !== id);
            setAprendices(nuevosAprendices);
            // Actualizar también el localStorage para que persista el borrado
            localStorage.setItem('admin_sena_aprendices', JSON.stringify(nuevosAprendices));
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-user-graduate"></i> Listado de Aprendices</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Link to="/aprendices/create" style={{ background: '#39A900', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                            <i className="fas fa-plus"></i> Nuevo Aprendiz
                        </Link>
                        <Link to="/" style={{ background: '#e2e8f0', color: '#334155', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                            Volver
                        </Link>
                    </div>
                </div>

                <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: '#39A900', color: '#fff' }}>
                                <th style={{ padding: '12px 15px' }}>Documento</th>
                                <th style={{ padding: '12px 15px' }}>Nombre del Aprendiz</th>
                                <th style={{ padding: '12px 15px' }}>Ficha</th>
                                <th style={{ padding: '12px 15px', textAlign: 'center' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aprendices.length > 0 ? (
                                aprendices.map((ap) => (
                                    <tr key={ap.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '12px 15px', fontWeight: '600' }}>{ap.documento}</td>
                                        <td style={{ padding: '12px 15px' }}>{ap.nombre}</td>
                                        <td style={{ padding: '12px 15px', color: '#64748b' }}>{ap.ficha}</td>
                                        <td style={{ padding: '12px 15px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                            <button 
                                                onClick={() => alert(`Editar aprendiz: ${ap.nombre}`)} 
                                                style={{ background: '#0dcaf0', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                                            >
                                                <i className="fas fa-edit"></i> Editar
                                            </button>
                                            <button 
                                                onClick={() => eliminarAprendiz(ap.id)} 
                                                style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                                            >
                                                <i className="fas fa-trash"></i> Borrar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                                        No hay aprendices registrados.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}