import React, {useEffect, useState} from 'react';
import "../../css/Tablas/Tablas.css"

const TablaVacunada = () => {
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

    const [datos,setDatos]=useState([])

    let url ='http://localhost:4000/vacunada'
    const showData = async () => {
        const response = await fetch(url)
        const data     = await response.json()
        console.log(data)
        setDatos(data)
    }

    useEffect( ()=>{
        showData()
    }, [])


    return (
        <div className="contenedorTabla">
            <table>
                <tr>
                    <th>CI Persona </th>
                    <th>Codigo Vacuna</th>
                    <th>Codigo centro de Vacunacion</th>
                    <th>CI del personal de Salud</th>
                    <th>Fecha de vacunacion</th>
                    <th>Dosis</th>

                </tr>
                {datos.map((dato:any)=>{
                    return (
                        <tr>
                            <th>{ dato['idpersona'] }</th>
                            <th>{ dato['codevacuna'] }</th>
                            <th>{ dato['codecv'] }</th>
                            <th>{ dato['idpersonal'] }</th>
                            <th>{ dato['datevacuna'] }</th>
                            <th>{ dato['dosis'] }</th>

                        </tr>

                    )

                })
                }


            </table>

        </div>
    );
};

export default TablaVacunada;