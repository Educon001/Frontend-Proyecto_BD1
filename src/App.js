//React
import React, { useContext } from 'react';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Pages
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Personas from './components/Opciones/Personas';
import CentrosDeSalud from './components/Opciones/CentrosDeSalud'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import OpcionesPage from './pages/OpcionesPage'
import Vacuna from './components/Opciones/Vacuna'
import Vacunada from './components/Opciones/Vacunada'
function App() {



  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route index element={<HomePage />} />
        <Route path="/opciones" element={<OpcionesPage />} />
        <Route path="/opciones/personas" element={<Personas />} />
        <Route path="/opciones/cs" element={<CentrosDeSalud />} />
        <Route path="/opciones/vacuna" element={<Vacuna />} />
        <Route path="/opciones/vacunada" element={<Vacunada />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
