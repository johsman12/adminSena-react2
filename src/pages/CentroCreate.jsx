import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CentroCreate() {
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [regional, setRegional] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`¡Centro "${nombre}" registrado con éxito!`);
        setCodigo('');
        setNombre('');
        setRegional('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-plus-circle"></i> Registrar Nuevo Centro</h2>
                    <Link to="/centros" style={{ background: '#e2e8f0', color: '#334155', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                        Volver
                    </Link>
                </div>

                <div style={{ background: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Código del Centro:</label>
                            <input 
                                type="text" 
                                value={codigo} 
                                onChange={(e) => setCodigo(e.target.value)} 
                                required 
                                placeholder="Ej. 9101"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Nombre del Centro:</label>
                            <input 
                                type="text" 
                                value={nombre} 
                                onChange={(e) => setNombre(e.target.value)} 
                                required 
                                placeholder="Ej. Centro de Comercio y Servicios"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Regional:</label>
                            <input 
                                type="text" 
                                value={regional} 
                                onChange={(e) => setRegional(e.target.value)} 
                                required 
                                placeholder="Ej. Cauca"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <button type="submit" style={{ width: '100%', background: '#39A900', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                            Guardar Centro
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}