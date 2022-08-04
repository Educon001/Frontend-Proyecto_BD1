import React, {useEffect, useState} from 'react';
import swet from 'sweetalert';
import CB from './../ComboBox/ComboBoxE'


const ResideF = () => {

/*CodeProvincia SMALLINT,
    IdPersona VARCHAR(10),
    DateReside DATE_RANGE,*/

  const [provincia,setProvincia]=useState(null)
  const [dato, setDatos] = useState({
    idpersona: window.location.href.split('/')[window.location.href.split('/').length-1],
    codeprovincia:null,
    datereside:null,

  });



  async function cargarDatos(e) {
    e.preventDefault();
    console.log(dato);
    let url = 'http://localhost:4000/reside';
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
          text: 'La resdencia agregado exitosamente',
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
          codeprovincia:provincia,

        });
        console.log(dato)


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
                    className="form-tittle">A<span>signacion de residencia</span>
                </h1>
              </div>

              <br/>

              <div className="form-header">
                <label className="form-label" htmlFor="provincia">Provincia</label>
                <div><CB setData={setProvincia}/></div>
              </div>
              <br/>
              <br/>

              <div className="form-header">
                <h4 className="form-label">Fecha de residencia</h4>
                <input className="form-input" type="date" id="datereside"
                       min="1900-01-01"
                       max="2022-08-31" onChange={handleInputChange}
                       name="datereside"/>
              </div>
              <br/>
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

export default ResideF;