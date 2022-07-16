import React, { useState, useEffect } from "react"
import OpcionesLista from "../components/OpcionesLista/OpcionesLista";
import { useSearchParams } from "react-router-dom";
import "../css/OpcionesPage.css"

function OpcionesPage() {
    const [ciudades, setCiudades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [consulta, setConsulta] = useSearchParams();
    const search = consulta.get("search")





    return (<div className="contenedorCiudades">

            <div className="contenedorInterno">
                 <div >
                        <div className="titulo">
                            <h1>OPCIONES</h1>
                        </div>
                        <OpcionesLista  />
                    </div>}

            </div>

    </div >);
}

export default OpcionesPage;

