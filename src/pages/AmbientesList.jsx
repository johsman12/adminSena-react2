import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AmbientesList() {
    const [ambientes, setAmbientes] = useState(() => {
        const saved = localStorage.getItem('admin_sena_ambientes');
        return saved ? JSON.parse(saved) : [
            { id: 1, nombre: 'Laboratorio de Multimedia', ubicacion: 'Bloque C - Piso 3', estado: 'Disponible' },
            { id: 2, nombre: 'Taller de Redes', ubicacion: 'Bloque A - Piso 1', estado: 'Ocupado' }
        ];
    });

    useEffect(() => {
        localStorage.setItem('admin_sena_ambientes', JSON.stringify(ambientes));
    }, [ambientes]);

    const eliminarAmbiente = (id) => {
        if (confirm('¿Estás seguro de eliminar este ambiente?')) {
            setAmbientes(ambientes.filter(a => a.id !== id));
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-door-open"></i> Listado de Ambientes</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Link to="/ambientes/create" style={{ background: '#39A900', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                            <i className="fas fa-plus"></i> Nuevo Ambiente
                        </Link>
                        <Link to="/" style={{ background: '#e2e8f0', color: '#334155', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                            Volver al Inicio
                        </Link>
                    </div>
                </div>

                <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: '#39A900', color: '#fff' }}>
                                <th style={{ padding: '12px 15px' }}>ID</th>
                                <th style={{ padding: '12px 15px' }}>Nombre del Ambiente</th>
                                <th style={{ padding: '12px 15px' }}>Ubicación / Torre</th>
                                <th style={{ padding: '12px 15px' }}>Estado</th>
                                <th style={{ padding: '12px 15px', textAlign: 'center' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ambientes.map((amb) => (
                                <tr key={amb.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px 15px', fontWeight: '600' }}>{amb.id}</td>
                                    <td style={{ padding: '12px 15px' }}>{amb.nombre}</td>
                                    <td style={{ padding: '12px 15px', color: '#64748b' }}>{amb.ubicacion}</td>
                                    <td style={{ padding: '12px 15px' }}>
                                        <span style={{ 
                                            background: amb.estado === 'Disponible' ? '#d1e7dd' : '#f8d7da', 
                                            color: amb.estado === 'Disponible' ? '#0f5132' : '#842029',
                                            padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600'
                                        }}>
                                            {amb.estado}
                                        </span>
                                    </td>
                                    <td style={{ padding: '12px 15px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        <button onClick={() => alert(`Editar ambiente ID: ${amb.id}`)} style={{ background: '#0dcaf0', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <i className="fas fa-edit"></i> Editar
                                        </button>
                                        <button onClick={() => eliminarAmbiente(amb.id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
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