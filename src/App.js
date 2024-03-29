//React
import React from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Pages
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Personas from './components/Opciones/Personas';
import CentrosDeSalud from './components/Opciones/CentrosDeSalud';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Vacuna from './components/Opciones/Vacuna';
import Vacunada from './components/Opciones/Vacunada';
import Sintoma from './components/Opciones/Sintoma';

import Consulta1 from './../src/components/Opciones/Consulta1';
import Consulta2 from './../src/components/Opciones/Consulta2';
import Consulta3 from './components/Opciones/Consulta3';
import Consulta4 from './components/Opciones/Consulta4';
import Consulta5 from './components/Opciones/Consulta5';
import Consulta6 from './../src/components/Opciones/Consulta6';
import Consulta7 from './../src/components/Opciones/Consulta7';
import Consulta8 from './../src/components/Opciones/Consulta8';
import Consulta9 from './../src/components/Opciones/Consulta9';
import PersonalSalud from './../src/components/Opciones/PersonalDeSalud';
import Municipios from './components/Opciones/Municipio';
import Estado from './components/Opciones/Estado';
import Pais from './components/Opciones/Pais';
import Tratamiento from './components/Opciones/Tratamiento';
import Medicamento from './components/Opciones/Medicamento';
import Variante from './components/Opciones/Variante';
import Pacientes from './components/Opciones/Pacientes';
import Consiste from './components/Relaciones/Consiste';
import Eficacia from './components/Relaciones/Eficacia';
import Asignado from './components/Relaciones/Asignado';
import Tiene from './components/Relaciones/Tiene';
import Presenta from './components/Relaciones/Presenta';
import Reside from './components/Relaciones/Reside';
import Hospitalizado from './components/Relaciones/Hospitalizado';
import Contagio from './components/Relaciones/Contagio';
import Requiere from './components/Relaciones/Requiere';




function App() {

  return (
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route index element={<HomePage/>}/>
          <Route path="/personas" element={<Personas/>}/>
          <Route path="/pacientes" element={<Pacientes/>}/>
          <Route path="/personalSalud" element={<PersonalSalud/>}/>
          <Route path="/cs" element={<CentrosDeSalud/>}/>
          <Route path="/vacunas" element={<Vacuna/>}/>
          <Route path="/vacunados" element={<Vacunada/>}/>
          <Route path="/municipios" element={<Municipios/>}/>
          <Route path="/estado" element={<Estado/>}/>
          <Route path="/pais" element={<Pais/>}/>
          <Route path="/tratamientos" element={<Tratamiento/>}/>
          <Route path="/medicamentos" element={<Medicamento/>}/>
          <Route path="/variante" element={<Variante/>}/>
          <Route path="/sintoma" element={<Sintoma/>}/>
          {/* ------------RELACIONES-------------- */}

          <Route path="/consiste/:id" element={<Consiste/>}/>
          <Route path="/eficacia/:id" element={<Eficacia/>}/>
          <Route path="/asignado/:id" element={<Asignado/>}/>
          <Route path="/tiene/:id" element={<Tiene/>}/>
          <Route path="/presenta/:id" element={<Presenta/>}/>
          <Route path="/reside/:id" element={<Reside/>}/>
          <Route path="/hospitalizado/:id" element={<Hospitalizado/>}/>
          <Route path="/contagio/:id" element={<Contagio/>}/>
          <Route path="/requiere/:id" element={<Requiere/>}/>



          <Route path="/consulta1" element={<Consulta1/>}/>
          <Route path="/consulta2" element={<Consulta2/>}/>
          <Route path="/consulta3" element={<Consulta3/>}/>
          <Route path="/consulta4" element={<Consulta4/>}/>
          <Route path="/consulta5" element={<Consulta5/>}/>
          <Route path="/consulta6" element={<Consulta6/>}/>
          <Route path="/consulta7" element={<Consulta7/>}/>
          <Route path="/consulta8" element={<Consulta8/>}/>
          <Route path="/consulta9" element={<Consulta9/>}/>


          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;
