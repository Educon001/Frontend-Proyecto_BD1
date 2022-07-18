import React, {useState} from 'react';
import {Typography} from '@material-ui/core';

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
         return data;
      } catch (e) {
         console.error(e);
      }
   }

   return (
       <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
             <h3>REGISTRE VACUNACION</h3>
             <form id="reg-form" onSubmit={cargarDatos}>

                <div>
                   <label htmlFor="idpersona">Cedula Vacunado</label>
                   <input type="text" id="name" spellCheck="false"
                          placeholder="Escriba cEDULA DE LA PERSONA A vACUNAR"
                          onChange={handleInputChange} name="idpersona"/>
                </div>


                <div>
                   <label htmlFor="codevacuna">Codigo Vacuna</label>
                   <input type="text" id="codevacuna" spellCheck="false"
                          placeholder="Escriba Codigo de Vacuna"
                          onChange={handleInputChange}
                          name="codevacuna"/>
                </div>
                <div>
                   <label htmlFor="codecentrov">Codigo centro de vacunacion</label>
                   <input type="text" id="codecentrov" spellCheck="false"
                          placeholder="Escriba codigo del centro de vacunacion"
                          onChange={handleInputChange} name="codecv"/>
                </div>


                <div>
                   <label htmlFor="idpersonal">Cedula Personal Salud</label>
                   <input type="text" id="idpersonal" spellCheck="false"
                          placeholder="Escriba Escriba cedula del Personal"
                          onChange={handleInputChange} name="idpersonal"/>
                </div>
                <div>
                   <h4>Fecha de Vacunacion</h4>
                   <input type="date" id="datevacuna" min="1900-01-01"
                          max="now" onChange={handleInputChange}
                          name="datevacuna"/>
                </div>
                <div>
                   <label htmlFor="dosis">Dosis</label>
                   <input type="text" id="dosis" spellCheck="false"
                          placeholder="Dosis"
                          onChange={handleInputChange} name="dosis"/>
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