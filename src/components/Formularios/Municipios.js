import React, {useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import swet from 'sweetalert';
import ComboBoxE from './../ComboBox/ComboBoxE'
const Municipios = () => {

    const [estado,setEstado]=useState(null)
    const [municio, setMunicipio] = useState({
        codeestado: null,
        name: null
    });

    const handleInputChange = (e) => {

        setMunicipio({
            ...municio,
            [e.target.name]: e.target.value,

        });
    };

    async function cargarDatos(e) {
        e.preventDefault();
        console.log(municio);
        let url = 'http://localhost:4000/municipio';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(municio),

            });
            const data = await response.json();
            console.log('Success: ', data);
            console.log('Success: ', response.status);
            if (response.status == 400) {
                swet({
                    title: 'Warning',
                    text: 'No se ha podido registrar el municipio',
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
            setMunicipio({
                ...municio,
                codeestado:estado,

            });
            console.log(municio)


        },[estado]
    )

    return (
        <>
            <div className="body">
                <div className="formulario">
                    <form className="form" id="reg-form" onSubmit={cargarDatos}>
                        <div className="form-header">
                            <h1 className="form-tittle"
                                className="form-tittle">R<span>egistro de Municipio</span>
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
                        <div className="form-header">
                            <label className="form-label" htmlFor="codigoestado">Codigo Estado</label>
                            <div><ComboBoxE setData={setEstado}/></div>
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

export default Municipios;