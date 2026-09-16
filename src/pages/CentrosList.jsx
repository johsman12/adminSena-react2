import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CentrosList() {
    const [centros, setCentros] = useState([
        { id: 1, codigo: '9101', nombre: 'Centro de Comercio y Servicios', regional: 'Cauca' },
        { id: 2, codigo: '9102', nombre: 'Centro Agropecuario', regional: 'Cauca' },
        { id: 3, codigo: '9103', nombre: 'Centro de Teleinformática y Producción Industrial', regional: 'Cauca' }
    ]);

    const eliminarCentro = (id) => {
        setCentros(centros.filter(c => c.id !== id));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-building"></i> Listado de Centros de Formación</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Link to="/centros/create" style={{ background: '#39A900', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                            <i className="fas fa-plus"></i> Nuevo Centro
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
                                <th style={{ padding: '12px 15px' }}>Código</th>
                                <th style={{ padding: '12px 15px' }}>Nombre del Centro</th>
                                <th style={{ padding: '12px 15px' }}>Regional</th>
                                <th style={{ padding: '12px 15px', textAlign: 'center' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {centros.map((centro) => (
                                <tr key={centro.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px 15px', fontWeight: '600' }}>{centro.codigo}</td>
                                    <td style={{ padding: '12px 15px' }}>{centro.nombre}</td>
                                    <td style={{ padding: '12px 15px', color: '#64748b' }}>{centro.regional}</td>
                                    <td style={{ padding: '12px 15px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        <button onClick={() => alert(`Editar centro: ${centro.nombre}`)} style={{ background: '#0dcaf0', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <i className="fas fa-edit"></i> Editar
                                        </button>
                                        <button onClick={() => eliminarCentro(centro.id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
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