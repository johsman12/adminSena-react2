import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ComputadoresList() {
    const [computadores, setComputadores] = useState([
        { id: 1, serie: '12654', marca: 'HP' },
        { id: 2, serie: '1334', marca: 'Lenovo' },
        { id: 3, serie: '1234', marca: 'Dell' },
        { id: 4, serie: '2456', marca: 'ASUS' }
    ]);

    const eliminarComputador = (id) => {
        setComputadores(computadores.filter(c => c.id !== id));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-laptop"></i> Listado de Computadores</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Link to="/computadores/create" style={{ background: '#39A900', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                            <i className="fas fa-plus"></i> Nuevo Computador
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
                                <th style={{ padding: '12px 15px' }}>ID</th>
                                <th style={{ padding: '12px 15px' }}>Número de Serie</th>
                                <th style={{ padding: '12px 15px' }}>Marca</th>
                                <th style={{ padding: '12px 15px', textAlign: 'center' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {computadores.map((comp) => (
                                <tr key={comp.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px 15px' }}>{comp.id}</td>
                                    <td style={{ padding: '12px 15px', fontWeight: '600' }}>{comp.serie}</td>
                                    <td style={{ padding: '12px 15px', color: '#64748b' }}>{comp.marca}</td>
                                    <td style={{ padding: '12px 15px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        <button onClick={() => alert(`Editar equipo ID: ${comp.id}`)} style={{ background: '#0dcaf0', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <i className="fas fa-edit"></i> Editar
                                        </button>
                                        <button onClick={() => eliminarComputador(comp.id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
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