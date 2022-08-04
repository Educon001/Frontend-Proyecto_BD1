import React, {useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import swet from 'sweetalert';
import CBPais from './../ComboBox/ComboBoxPais'
import ComboBoxPais from '../ComboBox/ComboBoxPais';
const VacunasF = () => {
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
         console.log('Success: ', response.status);
         if (response.status == 400) {
            swet({
               title: 'Warning',
               text: 'No se ha podido registrar vacuna',
               icon: 'warning',
               dangerMode: true,
            });
         } else if (200) {
            swet({
               title: 'Registrado',
               text: 'La vacuna fue registrada exitosamente',
               icon: 'success',
               dangerMode: true,
            }).then(()=>window.location.reload())
         }
         return data;
      } catch (e) {
         console.error(e);
      }
   }
   const [pais,setPais]=useState(null)

   useEffect(
       ()=>{
          setvacuna({
             ...vacuna,
             code_pais:pais,

          });
          console.log(pais)


       },[pais]
   )
   return (
       <>
          <div className="body">
             <div className="formulario">
                <form className="form" id="reg-form" onSubmit={cargarDatos}>
                   <div className="form-header">
                      <h1 className="form-tittle"
                          className="form-tittle">R<span>egistro de Vacuna</span>
                      </h1>
                   </div>
                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="Name">Nombre</label>
                      <input className="form-input" type="text" id="name"
                             spellCheck="false"
                             placeholder="Nombre de Vacuna"
                             onChange={handleInputChange} name="name"/>
                   </div>


                   <div className="form-header">
                      <label className="form-label" htmlFor="Lote">Lote</label>
                      <input className="form-input" type="text" id="lote"
                             spellCheck="false"
                             placeholder="Escriba lote"
                             onChange={handleInputChange}
                             name="lote"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="cantdosis">Cantidad
                         de dosis</label>
                      <input className="form-input" type="text" id="cantdosis"
                             spellCheck="false"
                             placeholder="Cantidad de dosis recomendadas"
                             onChange={handleInputChange} name="cantdosis"/>
                   </div>
                   <div className="form-header" onChange={handleInputChange}>
                      <h4 className="form-label">Tipo de vacuna</h4>
                      <input type="radio" value="ARNm" name="type"/> ARNm
                      <br/>
                      <input type="radio" value="Vector viral" name="type"/> Vector viral
                      <br/>
                      <input type="radio" value="Subunidades proteicas" name="type"/> Subunidades proteicas
                      <br/>
                   </div>

                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="laboratory">Laboratorio</label>
                      <input className="form-input" type="text" id="laboratory"
                             spellCheck="false"
                             placeholder="Escriba Laboratorio"
                             onChange={handleInputChange} name="laboratory"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="codigopais">Codigo Pais</label>
                      <div><ComboBoxPais setData={setPais}/></div>
                   </div>


                   <input className="form-input" type="submit"
                          value="Registrar" id="create-account"
                          className="button"/>

                </form>
             </div>
          </div>
       </>
   );
};

export default VacunasF;