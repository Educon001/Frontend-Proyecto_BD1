import React, {useState} from 'react';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
const Personas = () => {

    const [personSalud,setPersonSalud]=useState(false)

    const [PS,setPS]=useState({
        id_persona:'',
        email:'',
        type:''


    })
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
    const handleInputChange2 = (e)=>{

        setPS({
            ...PS,
            [e.target.name]: e.target.value


        })
    }

    async function cargarDatos(e){
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
        then(res =>  res.json()).
        catch(error => console.error('Error', error)).
        then(response => console.log('Succes: ', response));

        if(personSalud==true){
            setPS({
                ...PS,
                id_persona:persona.id,
            })
            cargarDatos2()
        }


    }
    async function cargarDatos2(){

        console.log(PS)
        let url2 = 'http://localhost:4000/personas/ps';
         fetch(url2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(PS),

        }).
        then(res => res.json()).
        catch(error => console.error('Error', error)).
        then(response => console.log('Succes: ', response));

    }

    function datosPersonalSalud(){

        return(
            <>
                <br/>
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" spellCheck="false"
                       placeholder="Escriba su correo" onChange={handleInputChange2}  name='email'/>
                </div>
                <br/>
                <div onChange={handleInputChange2}>
                    <h4>Profesion</h4>
                    <input type="radio" value="Asistente medico" name="type" /> Asistente medico
                    <input type="radio" value="Enfermeria" name="type" /> Enfermeria
                    <input type="radio" value="Medico" name="type" /> Medico
                </div>
            </>
        )
    }

    return (
        <>


            <Typography id="modal-modal-title" variant="h6" component="h2" >
                <h3>Registro De Personas</h3>
                <form id="reg-form" onSubmit={cargarDatos}>
                    <div>
                        <label htmlFor="cedula">Cedula:     ㅤ</label>
                        <input type="text" id="cedula" spellCheck="false"
                               placeholder="Escriba su Cedula" onChange={handleInputChange} name='id'/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="Name">Nombre:      ㅤ</label>
                        <input type="text" id="name" spellCheck="false"
                               placeholder="Escriba su nombre" onChange={handleInputChange}  name='name'/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="Name">Apellido:      ㅤ</label>
                        <input type="text" id="LastName" spellCheck="false"
                               placeholder="Escriba su Apellido" onChange={handleInputChange} name='lastname'/>
                    </div>
                    <br/>
                    <div onChange={handleInputChange}>
                        <h4>Sexo  </h4>
                        <input type="radio" value="M" name="sex" /> Male
                        <br/>
                        <input type="radio" value="F" name="sex" /> Female
                        <br/>
                        <input type="radio" value="N/A" name="sex" /> Other
                    </div>
                    <br/>
                    <div onChange={handleInputChange} >
                        <h4>Alto riesgo</h4>

                        <input type="radio" value="true" name='highrisk' /> True
                        <input type="radio" value="false" name='highrisk'/> False

                    </div>
                    <br/>
                    <div>
                        <h4>Fecha de Nacimiento</h4>
                        <input type="date" id="fechaNac" min="1900-01-01"
                               max="2018-12-31" onChange={handleInputChange} name='birthdate'/>
                    </div>
                    <br/>
                    <Button
                        variant="contained"
                        color="default"
                        className='button'
                        startIcon={<DeleteIcon/>}
                        onClick={()=>setPersonSalud(!personSalud)}
                    >
                        Personal De Salud?
                    </Button>
                    <br/>

                    {personSalud? datosPersonalSalud() : console.log('Probando')}

                    <br/>
                    <input type="submit"
                           value="Registrar" id="create-account"
                           className="button"  />

                </form>
            </Typography>

        </>
    );
};

export default Personas;