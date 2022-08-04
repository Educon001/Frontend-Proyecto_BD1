import React, {useEffect, useState} from 'react';
import swet from 'sweetalert';
import CB from '../ComboBox/CBCS'


const AsignadoF = () => {

    const [centroS,setCentroS]=useState(null)
    const [dato, setDatos] = useState({


        idpersonalsalud:window.location.href.split('/')[window.location.href.split('/').length-1],
        codecentrosalud:null,
        dateasignado:null,

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
        let url = 'http://localhost:4000/asignado';
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
                codecentrosalud:centroS,

            });
            console.log(dato)


        },[centroS]
    )

    return (
        <>
            <div className="body">
                <div className="formulario">
                    <form className="form" id="reg-form" onSubmit={cargarDatos}>
                        <div className="form-header">
                            <h1 className="form-tittle"
                                className="form-tittle">A<span>signacion Personal de salud</span>
                            </h1>
                        </div>





                        <div className="form-header">
                            <label className="form-label" htmlFor="codeCentroSalud">Codigo Centro de Salud</label>
                            <div><CB setData={setCentroS}/></div>
                        </div>



                        <div className="form-header">
                            <h4 className="form-label">Fecha de asignación</h4>
                            <input className="form-input" type="date" id="dateasignado"
                                   min="1900-01-01"
                                   max="2022-08-31" onChange={handleInputChange}
                                   name="dateasignado"/>
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

export default AsignadoF;