import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AprendicesList() {
    const [aprendices, setAprendices] = useState([
        { id: 1, documento: '1006543210', nombre: 'Johsman Pérez', ficha: '2875120' },
        { id: 2, documento: '1006987123', nombre: 'María Camila Rojas', ficha: '2875120' },
        { id: 3, documento: '1004567890', nombre: 'Andrés Felipe Morales', ficha: '2901234' }
    ]);

    const eliminarAprendiz = (id) => {
        setAprendices(aprendices.filter(a => a.id !== id));
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
                            {aprendices.map((ap) => (
                                <tr key={ap.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px 15px', fontWeight: '600' }}>{ap.documento}</td>
                                    <td style={{ padding: '12px 15px' }}>{ap.nombre}</td>
                                    <td style={{ padding: '12px 15px', color: '#64748b' }}>{ap.ficha}</td>
                                    <td style={{ padding: '12px 15px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        <button onClick={() => alert(`Editar aprendiz: ${ap.nombre}`)} style={{ background: '#0dcaf0', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <i className="fas fa-edit"></i> Editar
                                        </button>
                                        <button onClick={() => eliminarAprendiz(ap.id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <i className="fas fa-trash"></i> Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}