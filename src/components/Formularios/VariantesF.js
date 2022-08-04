import React, {useEffect, useState} from 'react';
import swet from 'sweetalert';
import ComboBoxPais from './../ComboBox/ComboBoxPais'

const VarianteF = () => {

   const [pais,setPais]=useState(null)
   const [variante, setVariante] = useState({
      clasification: null,
      code_pais: null,
      denom_oms: null,
      linaje: null,
      origin_month: null,
      origin_year: null,
   });

   const handleInputChange = (e) => {

      setVariante({
         ...variante,
         [e.target.name]: e.target.value,

      });
   };

   async function cargarDatos(e) {
      e.preventDefault();
      console.log(variante);
      let url = 'http://localhost:4000/variante';
      try {
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(variante),

         });
         const data = await response.json();
         console.log('Success: ', data);
         console.log('Success: ', response.status);
         if (response.status == 400) {
            swet({
               title: 'Warning',
               text: 'No se ha podido registrar el estado',
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

   useEffect(
       ()=>{
          setVariante({
             ...variante,
             code_pais:pais,

          });
          console.log(variante)


       },[pais]
   )
   const separarFecha=(e)=>{
      e.preventDefault();
      if (e.target.value != null && e.target.value != '') {
         let anio=e.target.value.substring(0,5)
         let mes=e.target.value.substring(5,8)
         setVariante({
                ...variante,
                origin_year:anio,
                origin_month: mes,
             },
         );
      }

   }

   return (
       <>
          <div className="body">
             <div className="formulario">
                <form className="form" id="reg-form" onSubmit={cargarDatos}>
                   <div className="form-header">
                      <h1 className="form-tittle"
                          className="form-tittle">R<span>egistro de Variante</span>
                      </h1>
                   </div>


                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="Name">Denominacion OMS</label>
                      <input className="form-input" type="text" id="denom_oms"
                             spellCheck="false"
                             placeholder="Escriba Denominacion OMS"
                             onChange={handleInputChange} name="denom_oms"/>
                   </div>

                   <div className="form-header" onChange={handleInputChange}>
                      <h4 className="form-label">Clasificacion </h4>
                      <p>
                         <input type="radio" value="VOI" name="clasification"/> VOI
                         &emsp; &ensp;
                         <input type="radio" value="VUM" name="clasification"/> VUM
                         &emsp; &ensp;
                         <input type="radio" value="VOC" name="clasification"/> VOC
                      </p>
                   </div>


                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="linaje">Linaje</label>
                      <input className="form-input" type="text" id="linaje"
                             spellCheck="false"
                             placeholder="Escriba linaje"
                             onChange={handleInputChange} name="linaje"/>
                   </div>


                   <div className="form-header">
                      <label className="form-label"
                             htmlFor="linaje">Fecha Origen</label>
                      <input onChange={separarFecha}
                             type='month' id="fechaOrigen"
                             spellCheck="false"
                             name="origin_date"/>
                   </div>


                   <div className="form-header">
                      <label className="form-label" htmlFor="codigoestado">Codigo Pais</label>
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

export default VarianteF;