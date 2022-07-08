import React, {useEffect, useState} from 'react';
import "../../css/Tablas/Tablas.css"

const TablaVacunada = () => {


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
                            <th>{ dato['codecentrov'] }</th>
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