import React from 'react';
import "../../css/Tablas/Tablas.css"

const TablaPaciente = () => {
var pacientes:any=[
    {
        "id": "1",
        "name": "Juan",
        "lastname": "Perez",
        "sex": "M",
        "birthdate": 'null',
        "highrisk": 'null'
    },
    {
        "id": '2',
        "name": 'Juana',
        "lastname": "Perez",
        "sex": "F",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "3",
        "name": "Jose",
        "lastname": "Perez",
        "sex": "M",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "4",
        "name": "Joselu",
        "lastname": "Perez",
        "sex": "M",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "5",
        "name": "Joselu",
        "lastname": "Martinez",
        "sex": "M",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "6",
        "name": "steiker",
        "lastname": "Martinez",
        "sex": "M",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "7",
        "name": "steiker",
        "lastname": "Mieles",
        "sex": "F",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "8",
        "name": "sleiker",
        "lastname": "Mieles",
        "sex": "N/A",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "9",
        "name": "sneiker",
        "lastname": "Mieles",
        "sex": "M",
        "birthdate": null,
        "highrisk": null
    },
    {
        "id": "10",
        "name": "Marco",
        "lastname": "Castro",
        "sex": "M",
        "birthdate": null,
        "highrisk": null
    }
]
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
                {pacientes.map((paciente:any)=>{
                    return (
                        <tr>
                            <th>{ paciente['id'] }</th>
                            <th>{ paciente['name'] }</th>
                            <th>{ paciente['lastname'] }</th>
                            <th>{ paciente['sex'] }</th>
                            <th>{ paciente['birthdate'] }</th>
                            <th>{ paciente['highrisk'] }</th>

                        </tr>

                    )

                })
                }


            </table>

        </div>
    );
};

export default TablaPaciente;