import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InstructoresList() {
    const [instructores, setInstructores] = useState(() => {
        const saved = localStorage.getItem('admin_sena_instructores');
        return saved ? JSON.parse(saved) : [
            { id: 1, nombre: 'Jorge Fernando Betancourth', especialidad: 'Programación Web', correo: 'jorge@sena.edu.co' },
            { id: 2, nombre: 'Juan Pablo Chamizo Vega', especialidad: 'Bases de Datos', correo: 'juan@sena.edu.co' }
        ];
    });

    useEffect(() => {
        localStorage.setItem('admin_sena_instructores', JSON.stringify(instructores));
    }, [instructores]);

    const eliminarInstructor = (id) => {
        if (confirm('¿Estás seguro de eliminar este instructor?')) {
            setInstructores(instructores.filter(i => i.id !== id));
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-chalkboard-teacher"></i> Listado de Instructores</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Link to="/instructores/create" style={{ background: '#39A900', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                            <i className="fas fa-plus"></i> Nuevo Instructor
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
                                <th style={{ padding: '12px 15px' }}>Nombre Completo</th>
                                <th style={{ padding: '12px 15px' }}>Especialidad</th>
                                <th style={{ padding: '12px 15px' }}>Correo</th>
                                <th style={{ padding: '12px 15px', textAlign: 'center' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instructores.map((ins) => (
                                <tr key={ins.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                    <td style={{ padding: '12px 15px', fontWeight: '600' }}>{ins.id}</td>
                                    <td style={{ padding: '12px 15px' }}>{ins.nombre}</td>
                                    <td style={{ padding: '12px 15px', color: '#64748b' }}>{ins.especialidad}</td>
                                    <td style={{ padding: '12px 15px', color: '#64748b' }}>{ins.correo}</td>
                                    <td style={{ padding: '12px 15px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        <button onClick={() => alert(`Editar instructor ID: ${ins.id}`)} style={{ background: '#0dcaf0', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
                                            <i className="fas fa-edit"></i> Editar
                                        </button>
                                        <button onClick={() => eliminarInstructor(ins.id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
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