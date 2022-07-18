import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../css/Formularios.css';
import '../../css/Formulario.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Personas = () => {
   const [personSalud, setPersonSalud] = useState(false);

   const [PS, setPS] = useState({
      id_persona: '',
      email: '',
      type: '',

   });
   const [persona, setPersona] = useState({
      id: '',
      name: '',
      lastname: '',
      sex: '',
      birthdate: '',
      highrisk: '',
   });

   const handleInputChange = (e) => {

      setPersona({
         ...persona,
         [e.target.name]: e.target.value,

      });

   };
   const handleInputChange2 = (e) => {

      setPS({
         ...PS,
         [e.target.name]: e.target.value,
         id_persona: persona.id,

      });
   };

   async function cargarDatos(e) {
      e.preventDefault();
      console.log(persona);
      let url = 'http://localhost:4000/personas';
      try {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),

         });
         const data = await response.json();
         const newPS = {id_persona: persona.id};
         console.log(newPS);
         if (personSalud == true) {
            setPS(newPS);
            console.log(PS);
            await cargarDatos2();
         }
         console.log('Success: ', data);
         return data;
      } catch (e) {
         console.error(e);
      }
   }

   async function cargarDatos2() {
      console.log(PS);
      let url2 = 'http://localhost:4000/personas/ps';
      try {
         const response = await fetch(url2, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(PS),

         });
         const data = await response.json();
         console.log('Success: ', data);
         return data;
      } catch (e) {
         console.error(e);
      }

   }

   function datosPersonalSalud() {

      return (
          <>
             <div className="form-header">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="email" id="email" spellCheck="false"
                       placeholder="Escriba su correo"
                       onChange={handleInputChange2}
                       name="email"/>
             </div>
             <div className="form-header" onChange={handleInputChange2}>
                <h4 className="form-label">Profesion</h4>
                <p>
                <input type="radio" value="Asistente medico" name="type"/> Asistente medico
                &emsp; &ensp;
                <input type="radio" value="Enfermeria" name="type"/> Enfermeria
                &emsp; &ensp;
                <input type="radio" value="Medico" name="type"/> Medico
                </p>
             </div>
          </>
      );
   }

   return (
       <>
          <div className="body">
             <meta name="viewport"
                   content=" width=device-width, initial-scale=0.1, maximum-scale=1, user-scalable=1"/>

             <div className="formulario">
                <form className="form" id="reg-form" onSubmit={cargarDatos}>
                   <div className="form-header">
                      <h1 className="form-tittle">R<span>egistro de persona</span>
                      </h1>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="cedula">Cedula:
                         ㅤ</label>
                      <input input className="form-input" type="text"
                             id="cedula" spellCheck="false"
                             placeholder="Escriba su Cedula"
                             onChange={handleInputChange} name="id"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="Name">Nombre:
                         ㅤ</label>
                      <input input className="form-input" type="text" id="name"
                             spellCheck="false"
                             placeholder="Escriba su nombre"
                             onChange={handleInputChange} name="name"/>
                   </div>
                   <div className="form-header">
                      <label className="form-label" htmlFor="Name">Apellido:
                         ㅤ</label>
                      <input input className="form-input" type="text"
                             id="LastName" spellCheck="false"
                             placeholder="Escriba su Apellido"
                             onChange={handleInputChange} name="lastname"/>
                   </div>
                   <div className="form-header" onChange={handleInputChange}>
                      <h4 className="form-label">Sexo </h4>
                      <p>
                         <input type="radio" value="M" name="sex"/> Male
                         &emsp; &ensp;
                         <input type="radio" value="F" name="sex"/> Female
                         &emsp; &ensp;
                         <input type="radio" value="N/A" name="sex"/> Other
                      </p>
                   </div>
                   <div className="form-header" onChange={handleInputChange}>
                      <h4 className="form-label">Alto riesgo</h4>
                      <p>
                         <input type="radio" value="true" name="highrisk"/> True
                         &emsp; &ensp;
                         <input type="radio" value="false" name="highrisk"/> False
                      </p>
                   </div>
                   <div className="form-header">
                      <h4 className="form-label">Fecha de Nacimiento</h4>
                      <input className="form-input" type="date" id="fechaNac"
                             min="1900-01-01"
                             max="2022-08-31" onChange={handleInputChange}
                             name="birthdate"/>
                   </div>
                   <br/>
                   <Button
                       variant="contained"
                       color="default"
                       startIcon={<LocalHospitalIcon/>}
                       onClick={() => setPersonSalud(!personSalud)}
                   >
                      Personal De Salud?
                   </Button>
                   <br/>
                   <br/>
                   {personSalud ?
                       datosPersonalSalud() :
                       console.log('Probando')}
                   <input className="form-button" type="submit"
                          value="Registrar" id="create-account"
                   />

                </form>
             </div>

          </div>
       </>
   );
};

export default Personas;