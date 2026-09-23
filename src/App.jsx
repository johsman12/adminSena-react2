import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; // <-- ¡IMPORTANTE: Importar la página de Login!

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

// Computadores y Centros
import Computadores from './pages/Computadores';
import ComputadorCreate from './pages/ComputadorCreate'; 
import Centros from './pages/Centros';
import CentroCreate from './pages/CentroCreate';        

// Páginas del Footer / Enlaces adicionales
import QuienesSomos from './pages/QuienesSomos';
import Soporte from './pages/Soporte';
import Terminos from './pages/Terminos';

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta Principal */}
                <Route path="/" element={<Home />} />

                {/* Ruta de Login (¡Añadida aquí para que no de error!) */}
                <Route path="/login" element={<Login />} />

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
                <Route path="/computadores/create" element={<ComputadorCreate />} /> 
                <Route path="/centros" element={<Centros />} />
                <Route path="/centros/create" element={<CentroCreate />} />        

                {/* Nuevas Rutas añadidas para el Footer */}
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/soporte" element={<Soporte />} />
                <Route path="/terminos" element={<Terminos />} />
            </Routes>
        </Router>
    );
}