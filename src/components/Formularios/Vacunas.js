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
          <Typography id="modal-modal-title" variant="h6" component="h2">
             <h3>REGISTRE VACUNA</h3>
             <form id="reg-form" onSubmit={cargarDatos}>

                <div>
                   <label htmlFor="Name">Nombre</label>
                   <input type="text" id="name" spellCheck="false"
                          placeholder="Escriba su nombre"
                          onChange={handleInputChange} name="name"/>
                </div>


                <div>
                   <label htmlFor="Lote">Lote</label>
                   <input type="text" id="lote" spellCheck="false"
                          placeholder="Escriba lote"
                          onChange={handleInputChange}
                          name="lote"/>
                </div>
                <div>
                   <label htmlFor="cantdosis">cantidad dosis</label>
                   <input type="text" id="cantdosis" spellCheck="false"
                          placeholder="Escriba cantidad dosis"
                          onChange={handleInputChange} name="cantdosis"/>
                </div>
                <div onChange={handleInputChange}>
                   <h4>Tipo</h4>
                   <input type="radio" value="ARNm" name="type"/> ARNm
                   <input type="radio" value="Vector viral"
                          name="type"/> Vector
                   viral
                   <input type="radio" value="Subunidades proteicas"
                          name="type"/> ARNm

                </div>
                <div>
                   <label htmlFor="laboratory">Laboratorio</label>
                   <input type="text" id="laboratory" spellCheck="false"
                          placeholder="Escriba Laboratorio"
                          onChange={handleInputChange} name="laboratory"/>
                </div>
                <div>
                   <label htmlFor="code_pais">Codigo Pais</label>
                   <input type="text" id="code_pais" spellCheck="false"
                          placeholder="Escriba Codigo del Pais"
                          onChange={handleInputChange} name="code_pais"/>
                </div>


                <input type="submit"
                       value="Create Account" id="create-account"
                       className="button"/>

             </form>
          </Typography>
       </>
   );
};

export default Vacunas;