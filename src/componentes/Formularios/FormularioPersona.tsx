import React, {useEffect, useState} from 'react';

const FormularioPersona = () => {
  const [persona, setPersona] = useState({
    id: '',
    name: '',
    lastname: '',
    sex: '',
    birthdate: '',
    highrisk:'',
  });

  const handleInputChange = (event:any)=>{

    setPersona({
      ...persona,
      [event.target.name]: event.target.value


    })


  }

  // const data = {
  //       id: document.getElementById('cedula'),
  //       name: document.getElementById('name'),
  //       lastname: document.getElementById('LastName'),
  //       sex: document.getElementById('gender'),
  //       birthdate: document.getElementById('fechaNac'),
  //       highrisk: document.getElementById('altoR'),
  //     }
  // ;

  const cargarDatos=(event:any)=>{
    event.preventDefault()
    let url = 'http://localhost:4000/personas';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(persona),

    }).
        then(res => res.json()).
        catch(error => console.error('Error', error)).
        then(response => console.log('Succes: ', response));

  }

  return (
      <>
        <div className="main">


          <h3>REGISTER PERSON</h3>
          <form id="reg-form" onSubmit={cargarDatos}>
            <div>
              <label htmlFor="cedula">Cedula</label>
              <input type="text" id="cedula" spellCheck="false"
                     placeholder="Escriba su Cedula" onChange={handleInputChange} name='id'/>
            </div>
            <div>
              <label htmlFor="Name">Nombre</label>
              <input type="text" id="name" spellCheck="false"
                     placeholder="Escriba su nombre" onChange={handleInputChange}  name='name'/>
            </div>
            <div>
              <label htmlFor="Last Name">Apellido</label>
              <input type="text" id="LastName" spellCheck="false"
                     placeholder="Escriba su Apellido" onChange={handleInputChange} name='lastname'/>
            </div>
            <div>
              <h4>Sexo</h4>
              <input type="text" id="gender"  onChange={handleInputChange}  name='sex' />

            </div>
            <div>
              <h4>Alto riesgo</h4>
              <input type="text" id="altoR" onChange={handleInputChange} name='highrisk' />

            </div>
            <div>
              <h4>Fecha de Nacimiento</h4>
              <input type="date" id="fechaNac" min="1900-01-01"
                     max="2018-12-31" onChange={handleInputChange} name='birthdate'/>
            </div>


              <input type="submit"
                     value="Create Account" id="create-account"
                     className="button"/>

          </form>


        </div>

      </>
  );
};

export default FormularioPersona;