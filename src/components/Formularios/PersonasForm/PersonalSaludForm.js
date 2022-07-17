import React, {useState} from 'react';
import {Typography} from "@material-ui/core";

const PersonasForm = () => {
    const [PS,setPS]=useState(false)
    const [persona, setPersona] = useState({
        id: '',
        name: '',
        lastname: '',
        sex: '',
        birthdate: '',
        highrisk:'',
    });

    const handleInputChange = (e)=>{

        setPersona({
            ...persona,
            [e.target.name]: e.target.value


        })
    }
    const cargarDatos=(e)=>{
        e.preventDefault()
        console.log(persona)
        let url = 'http://localhost:4000/personas';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),

        }).
        then(res => res.json()).
        catch(error => console.error('Error', error)).
        then(response => console.log('Succes: ', response));
    }
    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <h3>REGISTRY OF HEALTH PERSONNEL</h3>
                <form id="reg-form" onSubmit={cargarDatos}>
                    <div>
                        <label htmlFor="cedula">Cedula</label>
                        <input type="text" id="cedula" spellCheck="false"
                               placeholder="Escriba su Cedula" onChange={handleInputChange} name='id'/>
                    </div>
                    <div>
                        <label htmlFor="Name">Nombre</label>
                        <input type="text" id="name" spellCheck="false"
                               placeholder="Escriba su nombre" onChange={handleInputChange}  name='name'/>
                    </div>

                    <div>
                        <label htmlFor="Last Name">Apellido</label>
                        <input type="text" id="LastName" spellCheck="false"
                               placeholder="Escriba su Apellido" onChange={handleInputChange} name='lastname'/>
                    </div>

                    <div onChange={handleInputChange}>
                        <h4>Sexo</h4>
                        <input type="radio" value="M" name="sex" /> Male
                        <input type="radio" value="F" name="sex" /> Female
                        <input type="radio" value="N/A" name="sex" /> Other
                    </div>
                    <div onChange={handleInputChange} >
                        <h4>Alto riesgo</h4>

                        <input type="radio" value="true" name='highrisk' /> True
                        <input type="radio" value="false" name='highrisk'/> False

                    </div>
                    <div>
                        <h4>Fecha de Nacimiento</h4>
                        <input type="date" id="fechaNac" min="1900-01-01"
                               max="2018-12-31" onChange={handleInputChange} name='birthdate'/>
                    </div>

                    <div>
                        <label htmlFor="email">Nombre</label>
                        <input type="email" id="email" spellCheck="false"
                               placeholder="Escriba su correo" onChange={handleInputChange}  name='email'/>
                    </div>
                    <div onChange={handleInputChange}>
                        <h4>Profesion</h4>
                        <input type="radio" value="Asistente medico" name="type" /> Asistente medico
                        <input type="radio" value="Enfermeria" name="type" /> Enfermeria
                        <input type="radio" value="Medico" name="type" /> Medico
                    </div>


                    <input type="submit"
                           value="Create Account" id="create-account"
                           className="button"  />

                </form>
            </Typography>

        </>
    );
};

export default PersonasForm;