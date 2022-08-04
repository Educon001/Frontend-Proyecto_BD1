import React, {useEffect, useState} from 'react';
import swet from 'sweetalert';
import CBTratamiento from './../ComboBox/CBTratamiento'

const RequiereF = () => {

/*CodeTratamiento INT,
  IdPaciente VARCHAR(10),
  Date COVID_DATE,
  Estado VARCHAR(10),*/

  const [tratamiento,setTratamiento]=useState(null)
  const [provincia,setProvincia]=useState(null)

  const [dato, setDatos] = useState({
    idpaciente: window.location.href.split('/')[window.location.href.split('/').length-1],
    codetratamiento:null,
    date:null,
    estado:null

  });



  async function cargarDatos(e) {
    e.preventDefault();
    console.log(dato);
    let url = 'http://localhost:4000/requiere';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dato),

      });
      const data = await response.json();
      console.log('Success: ', data);
      console.log('Success: ', response.status);
      if (response.status == 400) {
        swet({
          title: 'Warning',
          text: 'No se ha podido registrar el dato',
          icon: 'warning',
          dangerMode: true,
        });
      } else if (200) {
        swet({
          title: 'Registrado',
          text: 'El tratamiento fue asignado exitosamente',
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
        setDatos({
          ...dato,
          codetratamiento:tratamiento,

        });
        console.log(dato)


      },[tratamiento]
  )

  useEffect(
      ()=>{
        setDatos({
          ...dato,
          estado:provincia,

        });
        console.log(provincia)


      },[provincia]
  )
  const handleInputChange = (e) => {

    setDatos({
      ...dato,
      [e.target.name]: e.target.value,

    });
  };

  return (
      <>
        <div className="body">
          <div className="formulario">
            <form className="form" id="reg-form" onSubmit={cargarDatos}>
              <div className="form-header">
                <h1 className="form-tittle"
                    className="form-tittle">A<span>signacion de tratamiento</span>
                </h1>
              </div>

              <br/>
              <div className="form-header">
                <label className="form-label" htmlFor="tratamiento">Tratamiento</label>
                <div><CBTratamiento setData={setTratamiento}/></div>
              </div>

              <br/>
              <br/>

              <div className="form-header">
                <h4 className="form-label">Fecha de tratamiento</h4>
                <input className="form-input" type="date" id="date"
                       min="1900-01-01"
                       max="2022-08-31" onChange={handleInputChange}
                       name="date"/>
              </div>
              <br/>
              <br/>

              <div className="form-header" onChange={handleInputChange}>
              <h4 className="form-label">Estado</h4>
              <p>
                <input type="radio" value="En curso" name="estado"/>En curso
                &emsp; &ensp;
                <input type="radio" value="Finalizado" name="estado"/> Finalizado

              </p>
          </div>
              <br/>
              <input className="form-input" type="submit"
                     value="Registrar" id="create-account"
                     className="button"/>

            </form>
          </div>
        </div>
      </>
  );
};

export default RequiereF;