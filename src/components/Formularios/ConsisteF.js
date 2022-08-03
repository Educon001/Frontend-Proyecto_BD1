import React, {useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import swet from 'sweetalert';
import CB from '../ComboBox/CBMedicamento'

const ConsisteF = () => {

    const [medicamento,setMedicamento]=useState(null)
    const [dato, setDatos] = useState({
        codetratamiento: window.location.href.split('/')[window.location.href.split('/').length-1],
        cantdays: null,
        codemedicamento: null,
        dosis: null,
        frecuency: null,

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
        let url = 'http://localhost:4000/consiste';
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
                codemedicamento:medicamento,

            });
            console.log(dato)


        },[medicamento]
    )

    return (
        <>
            <div className="body">
                <div className="formulario">
                    <form className="form" id="reg-form" onSubmit={cargarDatos}>
                        <div className="form-header">
                            <h1 className="form-tittle"
                                className="form-tittle">A<span>signacion Medicamento</span>
                            </h1>
                        </div>





                        <div className="form-header">
                            <label className="form-label" htmlFor="codigodato">Codigo Medicamento</label>
                            <div><CB setData={setMedicamento}/></div>
                        </div>





                        <div className="form-header">
                            <label className="form-label"
                                   htmlFor="cantdays">Cantidad de Dias</label>
                            <input className="form-input" type="text" id="cantdays"
                                   spellCheck="false"
                                   placeholder="Escriba Cantidad de Dias"
                                   onChange={handleInputChange} name="cantdays"/>
                        </div>
                        <div className="form-header">
                            <label className="form-label"
                                   htmlFor="frecuency">Frecuencia</label>
                            <input className="form-input" type="text" id="frecuency"
                                   spellCheck="false"
                                   placeholder="Escriba la frecuencia"
                                   onChange={handleInputChange} name="frecuency"/>
                        </div>
                        <div className="form-header">
                            <label className="form-label"
                                   htmlFor="dosis">Dosis</label>
                            <input className="form-input" type="text" id="dosis"
                                   spellCheck="false"
                                   placeholder="Escriba la dosis"
                                   onChange={handleInputChange} name="dosis"/>
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

export default ConsisteF;