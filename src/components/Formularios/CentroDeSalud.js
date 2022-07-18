import React, {useState} from 'react';
import {Typography} from '@material-ui/core';

const CentroDeSalud = () => {
   const [aux, setAux] = useState();
   const [centroSalud, setCentroSalud] = useState({
      name: '',
      address: '',
      id_medico: '',
      code_municipio: '',
      manager_date: '',

   });

   const handleInputChange = (e) => {

      setCentroSalud({
         ...centroSalud,
         [e.target.name]: e.target.value,

      });
   };
   const handleTipo = (e) => {
      setAux(e.target.value);
      console.log('auxiliar: ' + aux);
   };

   async function cargarDatos(e) {
      e.preventDefault();
      console.log(centroSalud);
      let url = 'http://localhost:4000/' + aux;
      try {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(centroSalud),
         });
         const data = await response.json();
         console.log('Success: ', data);
         return data;
      } catch (e) {
         console.error(e);
      }
   }

   return (
       <>
          <div className="body">
             <div className="formulario">
                <form className="form" id="reg-form" onSubmit={cargarDatos}>
                   <div className="form-header">
                      <h1 className="form-tittle">R<span>egistro de Centro Salud</span>
                      </h1>
                   </div>

                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="Name">Nombre</label>
                      <input className="form-input" type="text" id="name"
                             spellCheck="false"
                             placeholder="Escriba el nombre del centro de salud"
                             onChange={handleInputChange} name="name"/>
                   </div>


                   <div className="form-header" onChange={handleTipo}>
                      <h4 className="form-label">Tipo</h4>
                      <input type="radio" value="ch" name="Tipo"/> Hospitalizacion
                      <br/>
                      <input type="radio" value="cv" name="Tipo"/> Vacunacion
                      <br/>
                   </div>

                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="Address">Direccion</label>
                      <input className="form-input"
                             type="text" id="address" spellCheck="false"
                             placeholder="Escriba Direccion"
                             onChange={handleInputChange} name="address"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="id_medico">Cedula
                         del Medico
                         Encargado</label>
                      <input className="form-input"
                             type="text" id="id_medico" spellCheck="false"
                             placeholder="Escriba la cedula del Medico"
                             onChange={handleInputChange} name="id_medico"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="code_municipio">Codigo
                         del
                         municipio</label>
                      <input className="form-input"
                             type="text" id="code_municipio"
                             spellCheck="false"
                             placeholder="Codigo Municipio"
                             onChange={handleInputChange}
                             name="code_municipio"/>
                   </div>
                   <div className="form-header">
                      <h4 className="form-label">Fecha de Asignacion</h4>
                      <input className="form-input"
                             type="date" id="manager_date" min="1900-01-01"
                             max="2022-08-31" onChange={handleInputChange}
                             name="manager_date"/>
                   </div>
                   <input type="submit"
                          value="Registrar" id="create-account"
                          className="button"/>
                </form>
             </div>
          </div>
       </>
   );
};

export default CentroDeSalud;