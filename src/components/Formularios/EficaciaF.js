import React, {useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import swet from 'sweetalert';
import CB from './../ComboBox/CBVirus'
import Slider from './../General/Slider'
const EficaciaF = () => {

    const [variante,setVariante]=useState(null)
    const [eficacia,setEficacia]=useState(null)
    const [dato, setDatos] = useState({
        codevacuna: window.location.href.split('/')[window.location.href.split('/').length-1],
        denom_oms:null,
        percentage:null,

    });



    async function cargarDatos(e) {
        e.preventDefault();
        console.log(dato);
        let url = 'http://localhost:4000/eficacia';
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
                    text: 'El variante fue agregado exitosamente',
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

    useEffect(
        ()=>{
            setDatos({
                ...dato,
                percentage:eficacia,

            });
            console.log(dato)


        },[eficacia]
    )

    return (
        <>
            <div className="body">
                <div className="formulario">
                    <form className="form" id="reg-form" onSubmit={cargarDatos}>
                        <div className="form-header">
                            <h1 className="form-tittle"
                                className="form-tittle">A<span>signacion Eficacia</span>
                            </h1>
                        </div>

                        <br/>

                        <div className="form-header">
                            <label className="form-label" htmlFor="denom_oms">Denominacion OMS</label>
                            <div><CB setData={setVariante}/></div>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-header">
                            <Slider setEficacia={setEficacia}/>
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

export default EficaciaF;