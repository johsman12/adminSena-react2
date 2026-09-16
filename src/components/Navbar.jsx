import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [userSession, setUserSession] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem('user_session'));
        if (session) setUserSession(session);

        const handleClickOutside = (event) => {
            if (!event.target.closest('#loginDropdown')) {
                setDropdownOpen(false);
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, []);

    const logoutWelcomeSession = () => {
        localStorage.removeItem('user_session');
        localStorage.removeItem('user_role');
        setUserSession(null);
        window.location.reload();
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header style={{
            background: '#ffffff',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-seedling" style={{ fontSize: '1.8rem', color: '#39A900' }}></i>
                <Link to="/" style={{ fontSize: '1.5rem', color: '#39A900', textDecoration: 'none', fontWeight: 'bold' }}>Admin Sena</Link>
            </div>

            <div>
                {userSession ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b' }}>
                                {userSession.name ? userSession.name.charAt(0) : 'U'}
                            </div>
                            <div>
                                <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem' }}>{userSession.name}</span>
                                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>{userSession.role || 'Usuario'}</span>
                            </div>
                        </div>
                        <button onClick={logoutWelcomeSession} style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fas fa-right-from-bracket"></i> Cerrar Sesión
                        </button>
                    </div>
                ) : (
                    <div className="dropdown" id="loginDropdown" style={{ position: 'relative', display: 'inline-block' }}>
                        <button onClick={toggleDropdown} style={{ backgroundColor: '#39A900', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fas fa-right-to-bracket"></i> Iniciar Sesión <i className="fas fa-caret-down"></i>
                        </button>
                        
                        {dropdownOpen && (
                            <div style={{
                                display: 'block',
                                position: 'absolute',
                                right: 0,
                                top: '100%',
                                marginTop: '5px',
                                backgroundColor: '#ffffff',
                                minWidth: '180px',
                                boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
                                borderRadius: '5px',
                                overflow: 'hidden',
                                zIndex: 10
                            }}>
                                <a href="/login?role=aprendiz" style={{ color: '#333', padding: '12px 16px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                                    <i className="fas fa-user-graduate" style={{ color: '#39A900' }}></i> Como Aprendiz
                                </a>
                                <a href="/login?role=administrador" style={{ color: '#333', padding: '12px 16px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                                    <i className="fas fa-user-shield" style={{ color: '#39A900' }}></i> Como Administrador
                                </a>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}