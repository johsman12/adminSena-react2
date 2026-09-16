import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InstructorCreate() {
    const [nombre, setNombre] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const saved = localStorage.getItem('admin_sena_instructores');
        const instructores = saved ? JSON.parse(saved) : [];
        
        const nuevoId = instructores.length > 0 ? instructores[instructores.length - 1].id + 1 : 1;
        const nuevosInstructores = [...instructores, { id: nuevoId, nombre, especialidad, correo }];
        
        localStorage.setItem('admin_sena_instructores', JSON.stringify(nuevosInstructores));
        navigate('/instructores');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-plus-circle"></i> Registrar Nuevo Instructor</h2>
                    <Link to="/instructores" style={{ background: '#e2e8f0', color: '#334155', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                        Volver
                    </Link>
                </div>

                <div style={{ background: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Nombre Completo:</label>
                            <input 
                                type="text" 
                                value={nombre} 
                                onChange={(e) => setNombre(e.target.value)} 
                                required 
                                placeholder="Ej. Carlos Pérez"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Especialidad:</label>
                            <input 
                                type="text" 
                                value={especialidad} 
                                onChange={(e) => setEspecialidad(e.target.value)} 
                                required 
                                placeholder="Ej. Desarrollo Software"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Correo Electrónico:</label>
                            <input 
                                type="email" 
                                value={correo} 
                                onChange={(e) => setCorreo(e.target.value)} 
                                required 
                                placeholder="Ej. cperez@sena.edu.co"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <button type="submit" style={{ width: '100%', background: '#39A900', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                            Guardar Instructor
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}