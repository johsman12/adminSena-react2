import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AprendizCreate() {
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [ficha, setFicha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const saved = localStorage.getItem('admin_sena_aprendices');
        const aprendices = saved ? JSON.parse(saved) : [];
        
        const nuevoId = aprendices.length > 0 ? aprendices[aprendices.length - 1].id + 1 : 1;
        const nuevosAprendices = [...aprendices, { id: nuevoId, nombre, documento, ficha }];
        
        localStorage.setItem('admin_sena_aprendices', JSON.stringify(nuevosAprendices));
        navigate('/aprendices');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-plus-circle"></i> Registrar Nuevo Aprendiz</h2>
                    <Link to="/aprendices" style={{ background: '#e2e8f0', color: '#334155', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
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
                                placeholder="Ej. Johsman"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Documento de Identidad:</label>
                            <input 
                                type="text" 
                                value={documento} 
                                onChange={(e) => setDocumento(e.target.value)} 
                                required 
                                placeholder="Ej. 1001234567"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Número de Ficha:</label>
                            <input 
                                type="text" 
                                value={ficha} 
                                onChange={(e) => setFicha(e.target.value)} 
                                required 
                                placeholder="Ej. 2875310"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <button type="submit" style={{ width: '100%', background: '#39A900', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                            Guardar Aprendiz
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}