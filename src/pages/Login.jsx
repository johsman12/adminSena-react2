import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Obtener el rol de los parámetros de la URL (ej: ?role=administrador)
    const queryParams = new URLSearchParams(location.search);
    const roleParam = queryParams.get('role') || 'aprendiz';
    const roleTitle = roleParam.charAt(0).toUpperCase() + roleParam.slice(1);

    const handleLogin = (e) => {
        e.preventDefault();
        const sessionData = {
            name: nombre || 'Usuario SENA',
            email: correo,
            role: roleTitle
        };
        localStorage.setItem('user_session', JSON.stringify(sessionData));
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', width: '100%', maxWidth: '450px' }}>
                    <h2 style={{ color: '#2d8600', marginBottom: '0.5rem', textAlign: 'center' }}>
                        <i className="fas fa-user-shield"></i> Iniciar Sesión ({roleTitle})
                    </h2>
                    <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Ingrese sus credenciales de acceso</p>

                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '1.2rem' }}>
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

                        <div style={{ marginBottom: '1.2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Correo Electrónico:</label>
                            <input 
                                type="email" 
                                value={correo} 
                                onChange={(e) => setCorreo(e.target.value)} 
                                required 
                                placeholder="ejemplo@sena.edu.co"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#334155' }}>Contraseña:</label>
                            <input 
                                type="password" 
                                required 
                                placeholder="********"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                            />
                        </div>

                        <button type="submit" style={{ width: '100%', background: '#39A900', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', fontWeight: '600', cursor: 'pointer', marginBottom: '1rem' }}>
                            Ingresar
                        </button>
                    </form>

                    <div style={{ textAlign: 'center' }}>
                        <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem' }}>
                            <i className="fas fa-arrow-left"></i> Volver al Inicio
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}