import React, { useState} from 'react';
import {Typography} from '@material-ui/core';
import swet from 'sweetalert';
import ComboBoxPais from './../ComboBox/ComboBoxPais'

const Estados = () => {

    const [estado, setEstado] = useState({
        name: null
    });

    const handleInputChange = (e) => {

        setEstado({
            ...estado,
            [e.target.name]: e.target.value,

        });
    };

    async function cargarDatos(e) {
        e.preventDefault();
        console.log(estado);
        let url = 'http://localhost:4000/pais';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(estado),

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




    return (
        <>
            <div className="body">
                <div className="formulario">
                    <form className="form" id="reg-form" onSubmit={cargarDatos}>
                        <div className="form-header">
                            <h1 className="form-tittle"
                                className="form-tittle">R<span>egistro de Pais</span>
                            </h1>
                        </div>

                        <div className="form-header">
                            <label className="form-label"
                                   htmlFor="Name">Nombre</label>
                            <input className="form-input" type="text" id="name"
                                   spellCheck="false"
                                   placeholder="Escriba nombre"
                                   onChange={handleInputChange} name="name"/>
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

export default Estados;