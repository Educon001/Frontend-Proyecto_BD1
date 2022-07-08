import React, {useEffect, useState} from 'react';
import "../../css/Tablas/Tablas.css"

const TablaVacuna = () => {


  const [datos,setDatos]=useState([])

  let url ='http://localhost:4000/vacuna'
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
            <th>Codigo Vacuna </th>
            <th>Nombre</th>
            <th>Lote</th>
            <th>Cantidad Dosis</th>
            <th>Typo de Vacuna</th>
            <th>Laboratorio</th>

          </tr>
          {datos.map((dato:any)=>{
            return (
                <tr>
                  <th>{ dato['code'] }</th>
                  <th>{ dato['name'] }</th>
                  <th>{ dato['lote'] }</th>
                  <th>{ dato['cantdosis'] }</th>
                  <th>{ dato['type'] }</th>
                  <th>{ dato['laboratory'] }</th>

                </tr>

            )

          })
          }


        </table>

      </div>
  );
};

export default TablaVacuna;