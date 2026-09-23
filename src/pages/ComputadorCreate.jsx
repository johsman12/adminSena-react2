import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ComputadorCreate() {
    const navigate = useNavigate();
    const [serial, setSerial] = useState('');
    const [marca, setMarca] = useState('');
    const [ambiente, setAmbiente] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Obtener computadores existentes de localStorage
        const computadoresGuardados = JSON.parse(localStorage.getItem('admin_sena_computadores')) || [];

        // 2. Crear el nuevo objeto computador
        const nuevoComputador = {
            id: computadoresGuardados.length > 0 ? computadoresGuardados[computadoresGuardados.length - 1].id + 1 : 1,
            serial,
            marca,
            ambiente,
            estado: 'Disponible' // Estado por defecto para que aparezca en la tabla
        };

        // 3. Guardar en localStorage
        computadoresGuardados.push(nuevoComputador);
        localStorage.setItem('admin_sena_computadores', JSON.stringify(computadoresGuardados));

        alert(`¡Computador con serial "${serial}" registrado con éxito!`);
        
        // 4. Redirigir a la lista de computadores
        navigate('/computadores');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: '#2d8600' }}><i className="fas fa-plus-circle"></i> Registrar Nuevo Computador</h2>
                    <Link to="/computadores" style={{ background: '#e2e8f0', color: '#334155', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '600' }}>
                        Volver
                    </Link>
                </div>

                <div style={{ background: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Serial / Placa:</label>
                            <input 
                                type="text" 
                                value={serial} 
                                onChange={(e) => setSerial(e.target.value)} 
                                required 
                                placeholder="Ej. PC-SENA-302"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Marca / Modelo:</label>
                            <input 
                                type="text" 
                                value={marca} 
                                onChange={(e) => setMarca(e.target.value)} 
                                required 
                                placeholder="Ej. HP ProDesk"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Ambiente Asignado:</label>
                            <input 
                                type="text" 
                                value={ambiente} 
                                onChange={(e) => setAmbiente(e.target.value)} 
                                required 
                                placeholder="Ej. Laboratorio de Software 1"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <button type="submit" style={{ width: '100%', background: '#39A900', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
                            Guardar Computador
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}