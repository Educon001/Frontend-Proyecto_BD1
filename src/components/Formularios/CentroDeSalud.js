import React, {useState} from 'react';
import {Typography} from "@material-ui/core";

const Personas = () => {
    const [aux,setAux]=useState()
    const [centroSalud, setCentroSalud] = useState({
        name: '',
        address: '',
        id_medico: '',
        code_municipio: '',
        manager_date:'',

    });

    const handleInputChange = (e)=>{

        setCentroSalud({
            ...centroSalud,
            [e.target.name]: e.target.value


        })
    }
    const handleTipo =(e)=>{
        setAux(e.target.value)
        console.log('auxiliar: '+aux)
    }


    const cargarDatos=(e)=>{
        e.preventDefault()
        console.log(centroSalud)


        let url = 'http://localhost:4000/'+aux
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(centroSalud),

        }).
        then(res => res.json()).
        catch(error => console.error('Error', error)).
        then(response => console.log('Succes: ', response));
    }


    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <h3>REGISTER CENTRO DE SALUD</h3>
                <form id="reg-form" onSubmit={cargarDatos}>

                    <div>
                        <label htmlFor="Name">Nombre</label>
                        <input type="text" id="name" spellCheck="false"
                               placeholder="Escriba su nombre" onChange={handleInputChange}  name='name'/>
                    </div>


                    <div onChange={handleTipo}>
                        <h4>Tipo</h4>
                        <input type="radio" value="ch" name="tipo" /> Hospitalizacion
                        <input type="radio" value="cv" name="tipo" /> Vacunacion
                    </div>

                    <div>
                        <label htmlFor="Address">Addres</label>
                        <input type="text" id="address" spellCheck="false"
                               placeholder="Escriba Direccion" onChange={handleInputChange}  name='address'/>
                    </div>
                    <div>
                        <label htmlFor="id_medico">Cedula del Medico Encargado</label>
                        <input type="text" id="id_medico" spellCheck="false"
                               placeholder="Escriba la cedula del Medico" onChange={handleInputChange}  name='id_medico'/>
                    </div>
                    <div>
                        <label htmlFor="code_municipio">Codigo del municipio</label>
                        <input type="text" id="code_municipio" spellCheck="false"
                               placeholder="Codigo Municipio" onChange={handleInputChange}  name='code_municipio'/>
                    </div>
                    <div>
                        <h4>Fecha de Asignacion</h4>
                        <input type="date" id="manager_date" min="1900-01-01"
                               max="2018-12-31" onChange={handleInputChange} name='manager_date'/>
                    </div>
                    <input type="submit"
                           value="Create Account" id="create-account"
                           className="button"  />

                </form>
            </Typography>
        </>
    );
};

export default Personas;