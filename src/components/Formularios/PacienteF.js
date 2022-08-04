import React, {useState,useEffect} from 'react';
import {Typography} from '@material-ui/core';
import '../../css/Formulario.css';
import swet from 'sweetalert';
import ComboBoxPersonas from './../ComboBox/ComboBoxP'

const PacienteF = () => {
   const [cedulaP,setCedulaP]=useState(null)
   const [paciente, setpaciente] = useState({
      id_persona: '',
   });

   const handleInputChange = (e) => {

      setpaciente({
         ...paciente,
         [e.target.name]: e.target.value,

      });
   };

   async function cargarDatos(e) {
      e.preventDefault();
      console.log(paciente);
      let url = 'http://localhost:4000/personas/paciente';
      try {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(paciente),

         });
         const data = await response.json();
         console.log('Success: ', data);
         console.log('Success: ', response.status);
         if (response.status == 400) {
            swet({
               title: 'Warning',
               text: 'No se ha podido registrar Paciente',
               icon: 'warning',
               dangerMode: true,
            });
         } else if (200) {
            swet({
               title: 'Registrado',
               text: 'El paciente fue registrado exitosamente',
               icon: 'success',
               dangerMode: true,
            }).then(()=>window.location.reload())
         }
         return data;
      } catch (e) {
         console.error(e);
      }
   }
   useEffect(
       ()=>{
          setpaciente({
             ...paciente,
             id_persona:cedulaP,

          });
          console.log(paciente)

       },[cedulaP]
   )

   return (
       <>
          <div className="body">
             <div className="formulario">
                <form className="form" id="reg-form" onSubmit={cargarDatos}>
                   <div className="form-header">
                      <h1 className="form-tittle">R<span>egistro de pacientes</span>
                      </h1>
                   </div>
                    <div className="form-header">
                        <label className="form-label" htmlFor="cedulavacunado">Cedula Paciente</label>
                        <div><ComboBoxPersonas aux='personas' setData={setCedulaP}/></div>
                    </div>

                    <br/>
                    <br/>


                   <input type="submit"
                          value="Registrar paciente" id="create-account"
                          className="button"/>
                </form>
             </div>
          </div>
       </>
   );
};

export default PacienteF;