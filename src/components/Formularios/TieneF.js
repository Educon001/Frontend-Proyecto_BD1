import React, {useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import swet from 'sweetalert';
import CB from '../ComboBox/CBSintoma'

const TieneF = () => {

    const [sintoma,setSintoma]=useState(null)
    const [dato, setDatos] = useState({
        denom_oms: window.location.href.split('/')[window.location.href.split('/').length-1],
        codesintoma: null,
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
        let url = 'http://localhost:4000/tiene';
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
                    text: 'El sintoma fue agregado exitosamente',
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
                codesintoma:sintoma,

            });
            console.log(dato)


        },[sintoma]
    )

    return (
        <>
            <div className="body">
                <div className="formulario">
                    <form className="form" id="reg-form" onSubmit={cargarDatos}>
                        <div className="form-header">
                            <h1 className="form-tittle"
                                className="form-tittle">A<span>signacion de sintoma</span>
                            </h1>
                        </div>

                        <div className="form-header">
                            <label className="form-label" htmlFor="codigodato">Codigo Sintoma</label>
                            <div><CB setData={setSintoma}/></div>
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

export default TieneF;