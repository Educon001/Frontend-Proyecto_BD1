import React, {useEffect, useState} from 'react';
import swet from 'sweetalert';
import CB from '../ComboBox/CBVirus'


const ContagioF = () => {

  const [variante,setVariante]=useState(null)
  const [dato, setDatos] = useState({



    idpersona: window.location.href.split('/')[window.location.href.split('/').length-1],
    denom_oms:null,
    datecontagio:null,
    resttime:null,
    casahospitalizado:null,

  });

  const handleInputChange = (e) => {

    setDatos({
      ...dato,
      [e.target.name]: e.target.value,

    });
  };


  async function cargarDatos(e) {
    e.preventDefault();
    console.log(dato);
    let url = 'http://localhost:4000/contagio';
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
      if (response.status === 400) {
        swet({
          title: 'Warning',
          text: 'No se ha podido registrar el dato',
          icon: 'warning',
          dangerMode: true,
        });
      } else if (200) {
        swet({
          title: 'Registrado',
          text: 'El medicamento fue agregado exitosamente',
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
          denom_oms:variante,

        });
        console.log(dato)


      },[variante]
  )

  return (
      <>
        <div className="body">
          <div className="formulario">
            <form className="form" id="reg-form" onSubmit={cargarDatos}>
              <div className="form-header">
                <h1 className="form-tittle"
                    className="form-tittle">C<span>ontagio</span>
                </h1>
              </div>





              <div className="form-header">
                <label className="form-label" htmlFor="codeVariante">Variante</label>
                <div><CB setData={setVariante}/></div>
              </div>



              <div className="form-header">
                <h4 className="form-label">Fecha de Contagio</h4>
                <input className="form-input" type="date" id="datecontagio"
                       min="1900-01-01"
                       max="2022-08-31" onChange={handleInputChange}
                       name="datecontagio"/>
              </div>

              <div className="form-header">
                <label className="form-label" htmlFor="Name">Tiempo de Reposo:
                  ㅤ</label>
                <input input className="form-input" type="text" id="resttime"
                       spellCheck="false"
                       placeholder="Escriba Tiempo de Reposo"
                       onChange={handleInputChange} name="resttime"/>
              </div>
              <div className="form-header" onChange={handleInputChange}>
                <h4 className="form-label">Lugar de Reposo</h4>
                <p>
                  <input type="radio" value={true} name="casahospitalizado"/> Hospital
                  &emsp; &ensp;
                  <input type="radio" value={false} name="casahospitalizado"/> En Casa

                </p>
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

export default ContagioF;