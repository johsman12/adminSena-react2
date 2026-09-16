import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Aprendices
import AprendicesList from './pages/AprendicesList';
import AprendizCreate from './pages/AprendizCreate';

// Cursos
import CursosList from './pages/CursosList';
import CursoCreate from './pages/CursoCreate';

// Instructores
import InstructoresList from './pages/InstructoresList';
import InstructorCreate from './pages/InstructorCreate';

// Ambientes
import AmbientesList from './pages/AmbientesList';
import AmbienteCreate from './pages/AmbienteCreate';

// Computadores y Centros (Agregados para solucionar las páginas en blanco)
import Computadores from './pages/Computadores';
import Centros from './pages/Centros';

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta Principal */}
                <Route path="/" element={<Home />} />

                {/* Rutas de Aprendices */}
                <Route path="/aprendices" element={<AprendicesList />} />
                <Route path="/aprendices/create" element={<AprendizCreate />} />

                {/* Rutas de Cursos */}
                <Route path="/cursos" element={<CursosList />} />
                <Route path="/cursos/create" element={<CursoCreate />} />

                {/* Rutas de Instructores */}
                <Route path="/instructores" element={<InstructoresList />} />
                <Route path="/instructores/create" element={<InstructorCreate />} />

                {/* Rutas de Ambientes */}
                <Route path="/ambientes" element={<AmbientesList />} />
                <Route path="/ambientes/create" element={<AmbienteCreate />} />

                {/* Rutas de Computadores y Centros */}
                <Route path="/computadores" element={<Computadores />} />
                <Route path="/centros" element={<Centros />} />
            </Routes>
        </Router>
    );
}