import React from 'react';
import "../../css/Tablas/Tablas.css"
const TablaCentroSalud = () => {
    var centrosDeSalud:any=[
        {
            "code": "1",
            "name": "Juan",
            "adress": "Caracas",
            "code_municipio": 123456,
            "id_medico": "Libertador",
            "manager_date": 'null',
        },
        {
            "code": "1",
            "name": "Juan",
            "adress": "Valencia",
            "code_municipio": 'Libertador',
            "id_medico": "M",
            "manager_date": 'null',
        },
    ]


    return (
        <div className="contenedorTabla">
            <table>
                <tr>
                    <th>Codigo </th>
                    <th>Nombre</th>
                    <th>Adress</th>
                    <th>Municipio </th>
                    <th>Cedula Encargado</th>
                    <th>Fecha de Nacimiento</th>


                </tr>
                {centrosDeSalud.map((centroSalud:any)=>{
                    return (
                        <tr>
                            <th>{ centroSalud['code'] }</th>
                            <th>{ centroSalud['name'] }</th>
                            <th>{ centroSalud['adress'] }</th>
                            <th>{ centroSalud['code_municipio'] }</th>
                            <th>{ centroSalud['id_medico'] }</th>
                            <th>{ centroSalud['manager_date'] }</th>

                        </tr>

                    )

                })
                }


            </table>
            {/*CREATE TABLE Centro_Salud(*/}
            {/*Code SERIAL,*/}
            {/*Name VARCHAR(50) NOT NULL ,*/}
            {/*Adress TEXT,*/}
            {/*ID_Medico VARCHAR(10),*/}
            {/*Code_Municipio INT ,*/}
            {/*Manager_Date DATE,*/}
            {/*CONSTRAINT CentroSalud_PK PRIMARY KEY (Code),*/}
            {/*CONSTRAINT CentroSalud_MedicoID_FK FOREIGN KEY (ID_Medico) REFERENCES Medico(ID_Medico),*/}
            {/*CONSTRAINT CentroSalud_Municipio_FK FOREIGN KEY (Code_Municipio) REFERENCES Municipio(Code)*/}
            {/*);*/}
        </div>
    );
};

export default TablaCentroSalud;