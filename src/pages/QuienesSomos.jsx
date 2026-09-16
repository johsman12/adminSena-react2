import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function QuienesSomos() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
                <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ color: '#2d8600', marginBottom: '1rem' }}>Nuestra Institución</h2>
                    <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '2rem' }}>
                        El Servicio Nacional de Aprendizaje (SENA) se encarga de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral.
                    </p>

                    <h3 style={{ color: '#2d8600', marginBottom: '1rem' }}>Sobre AdminSENA</h3>
                    <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '2rem' }}>
                        AdminSENA es un sistema de gestión académica y administrativa desarrollado para optimizar el control de áreas, centros de formación, equipos de cómputo, cursos, instructores y aprendices.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #39A900' }}>
                            <h4 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Misión</h4>
                            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Brindar formación profesional integral incorporando nuevas tecnologías para el desarrollo productivo del país.</p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '6px', borderLeft: '4px solid #39A900' }}>
                            <h4 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Visión</h4>
                            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Consolidarnos como una entidad líder en educación, impulsando la innovación tecnológica y el talento humano.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}