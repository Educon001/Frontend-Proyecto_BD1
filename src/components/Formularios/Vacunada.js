import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import '../../css/Formulario.css';
import swet from 'sweetalert';

const Vacunas = () => {
   const [vacuna, setvacuna] = useState({
      idpersona: '',
      codevacuna: '',
      codecv: '',
      idpersonal: '',
      datevacuna: '',
      dosis: '',
   });

   const handleInputChange = (e) => {

      setvacuna({
         ...vacuna,
         [e.target.name]: e.target.value,

      });
   };

   async function cargarDatos(e) {
      e.preventDefault();
      console.log(vacuna);
      let url = 'http://localhost:4000/vacunada';
      try {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(vacuna),

         });
         const data = await response.json();
         console.log('Success: ', data);
         console.log('Success: ', response.status);
         if (response.status == 400) {
            swet({
               title: 'Warning',
               text: 'No se ha podido registrar Vacunacion',
               icon: 'warning',
               dangerMode: true,
            });
         } else if (200) {
            swet({
               title: 'Registrado',
               text: 'La vacunacion fue registrada exitosamente',
               icon: 'success',
               dangerMode: true,
            }).then(()=>window.location.reload())
         }
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
                      <h1 className="form-tittle">R<span>egistro de vacunación</span>
                      </h1>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="idpersona">Cedula
                         Vacunado</label>
                      <input className="form-input" type="text" id="name"
                             spellCheck="false"
                             placeholder="Escriba cédula"
                             onChange={handleInputChange} name="idpersona"/>
                   </div>


                   <div className="form-header">
                      <label className="form-label" htmlFor="codevacuna">Codigo
                         Vacuna</label>
                      <input className="form-input" type="text" id="codevacuna"
                             spellCheck="false"
                             placeholder="Escriba Codigo de Vacuna"
                             onChange={handleInputChange}
                             name="codevacuna"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="codecentrov">Codigo
                         centro de vacunacion</label>
                      <input className="form-input" type="text" id="codecentrov"
                             spellCheck="false"
                             placeholder="Escriba codigo del centro de vacunacion"
                             onChange={handleInputChange} name="codecv"/>
                   </div>


                   <div className="form-header">
                      <label className="form-label" htmlFor="idpersonal">Cedula
                         Personal Salud</label>
                      <input className="form-input" type="text" id="idpersonal"
                             spellCheck="false"
                             placeholder="Escriba Escriba cedula del Personal"
                             onChange={handleInputChange} name="idpersonal"/>
                   </div>
                   <div className="form-header">
                      <h4 className="form-label">Fecha de Vacunacion</h4>
                      <input className="form-input" type="date" id="datevacuna"
                             min="1900-01-01"
                             max="now" onChange={handleInputChange}
                             name="datevacuna"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="dosis">Dosis</label>
                      <input className="form-input" type="text" id="dosis"
                             spellCheck="false"
                             placeholder="Dosis"
                             onChange={handleInputChange} name="dosis"/>
                   </div>


                   <input type="submit"
                          value="Registrar vacunado" id="create-account"
                          className="button"/>
                </form>
             </div>
          </div>
       </>
   );
};

export default Vacunas;