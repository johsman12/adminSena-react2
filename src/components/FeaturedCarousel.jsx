import React, { useRef } from 'react';

export default function FeaturedCarousel() {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const cardWidth = 300 + 20;
            carouselRef.current.scrollBy({
                left: direction * cardWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={{ position: 'relative', marginTop: '1rem' }}>
            <div 
                ref={carouselRef}
                style={{
                    display: 'flex',
                    gap: '20px',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    padding: '1rem 0'
                }}
            >
                <div style={{ flex: '0 0 calc(33.333% - 14px)', background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', minWidth: '280px' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>Control de Aprendices</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Gestiona la información, reportes y asistencia de los aprendices de forma centralizada.</p>
                </div>
                <div style={{ flex: '0 0 calc(33.333% - 14px)', background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', minWidth: '280px' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>Asignación de Cursos</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Organiza las materias, instructores y cupos disponibles por cada programa formativo.</p>
                </div>
                <div style={{ flex: '0 0 calc(33.333% - 14px)', background: '#fff', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', minWidth: '280px' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>Reportes y Estadísticas</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Visualiza métricas del rendimiento general y el estado del sistema en tiempo real.</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                <button onClick={() => scroll(-1)} style={{ background: '#39A900', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 12px', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={() => scroll(1)} style={{ background: '#39A900', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 12px', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}