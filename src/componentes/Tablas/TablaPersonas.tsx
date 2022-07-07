import React, {useEffect, useState} from 'react';
import "../../css/Tablas/Tablas.css"

const TablaPersonas = () => {
//     var pacientes:any=[
//     {
//         "id": "1",
//         "name": "Juan",
//         "lastname": "Perez",
//         "sex": "M",
//         "birthdate": 'null',
//         "highrisk": 'null'
//     },
//     {
//         "id": '2',
//         "name": 'Juana',
//         "lastname": "Perez",
//         "sex": "F",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "3",
//         "name": "Jose",
//         "lastname": "Perez",
//         "sex": "M",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "4",
//         "name": "Joselu",
//         "lastname": "Perez",
//         "sex": "M",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "5",
//         "name": "Joselu",
//         "lastname": "Martinez",
//         "sex": "M",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "6",
//         "name": "steiker",
//         "lastname": "Martinez",
//         "sex": "M",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "7",
//         "name": "steiker",
//         "lastname": "Mieles",
//         "sex": "F",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "8",
//         "name": "sleiker",
//         "lastname": "Mieles",
//         "sex": "N/A",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "9",
//         "name": "sneiker",
//         "lastname": "Mieles",
//         "sex": "M",
//         "birthdate": null,
//         "highrisk": null
//     },
//     {
//         "id": "10",
//         "name": "Marco",
//         "lastname": "Castro",
//         "sex": "M",
//         "birthdate": null,
//         "highrisk": null
//     }
// ]

    const [personas,setPersonas]=useState([])

    let url ='http://localhost:4000/personas'
    const showData = async () => {
        const response = await fetch(url)
        const data     = await response.json()
        console.log(data)
        setPersonas(data)
    }

    useEffect( ()=>{
        showData()
    }, [])


    return (
        <div className="contenedorTabla">
            <table>
                <tr>
                    <th>Cedula </th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Sexo</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Alto Riesgo</th>

                </tr>
                {personas.map((persona:any)=>{
                    return (
                        <tr>
                            <th>{ persona['id'] }</th>
                            <th>{ persona['name'] }</th>
                            <th>{ persona['lastname'] }</th>
                            <th>{ persona['sex'] }</th>
                            <th>{ persona['birthdate'] }</th>
                            <th>{ persona['highrisk'] }</th>

                        </tr>

                    )

                })
                }


            </table>

        </div>
    );
};

export default TablaPersonas;