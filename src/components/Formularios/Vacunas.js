import React, {useState} from 'react';
import {Typography} from '@material-ui/core';

const Vacunas = () => {
   const [vacuna, setvacuna] = useState({
      name: '',
      lote: '',
      cantdosis: '',
      type: '',
      laboratory: '',
      code_pais: '',
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
      let url = 'http://localhost:4000/vacuna';
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
                   <h1 className="form-tittle" className="form-tittle">R<span>egistro de Vacuna</span></h1>
                </div>
                <div className="form-header">
                   <label className="form-label" htmlFor="Name">Nombre</label>
                   <input className="form-input" type="text" id="name" spellCheck="false"
                          placeholder="Escriba su nombre"
                          onChange={handleInputChange} name="name"/>
                </div>


                <div className="form-header">
                   <label className="form-label" htmlFor="Lote">Lote</label>
                   <input className="form-input" type="text" id="lote" spellCheck="false"
                          placeholder="Escriba lote"
                          onChange={handleInputChange}
                          name="lote"/>
                </div>
                <div className="form-header">
                   <label className="form-label" htmlFor="cantdosis">Cantidad de dosis</label>
                   <input className="form-input" type="text" id="cantdosis" spellCheck="false"
                          placeholder="Escriba cantidad dosis"
                          onChange={handleInputChange} name="cantdosis"/>
                </div>
                <div className="form-header" onChange={handleInputChange}>
                   <h4 className="form-label">Tipo de vacuna</h4>
                   <input className="form-input"  type="radio" value="ARNm" name="type"/> ARNm
                   <input className="form-input"  type="radio" value="Vector viral" name="type"/> Vector viral
                   <input className="form-input" type="radio" value="Subunidades proteicas" name="type"/> Subunidades proteicas
                </div>

                <div className="form-header">
                   <label className="form-label" htmlFor="laboratory">Laboratorio</label>
                   <input className="form-input" type="text" id="laboratory" spellCheck="false"
                          placeholder="Escriba Laboratorio"
                          onChange={handleInputChange} name="laboratory"/>
                </div>
                <div className="form-header">
                   <label className="form-label" htmlFor="code_pais">Codigo Pais</label>
                   <input className="form-input" type="text" id="code_pais" spellCheck="false"
                          placeholder="Escriba Codigo del Pais"
                          onChange={handleInputChange} name="code_pais"/>
                </div>


                <input className="form-input" type="submit"
                       value="Create Account" id="create-account"
                       className="button"/>

             </form>
           </div>
          </div>
       </>
   );
};

export default Vacunas;