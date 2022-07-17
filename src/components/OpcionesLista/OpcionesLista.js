import React from 'react';
import Carta from "../Carta/Carta";
import { Grid } from '@material-ui/core';
import personas from '../../imagenes/personas.jpg'
import personalDeSalud from '../../imagenes/personalDeSalud.jpg'
import pacientes from '../../imagenes/personas.jpg'
import centroSalud from '../../imagenes/centroSalud.jpg'
import vacuna from '../../imagenes/vacuna.webp'
import vacunados from '../../imagenes/vacunados.jpg'
import "./../../css/OpcionesPage.css"


function OpcionesLista() {


      return (

            <div style={{ display: 'flexbox', justifyContent: 'center' }}>
                <Grid container justifyContent="center" spacing={1}>
                    <Carta Tipo="Tabla de Personas" aux="personas" imagen={personas}/>
                    <Carta Tipo="Centros De Salud" aux="cs" imagen={centroSalud} />
                    <Carta Tipo="Personal de Salud" imagen={personalDeSalud} aux="ps" />
                    <Carta Tipo="Vacunasㅤㅤㅤㅤㅤㅤ" aux= "vacuna"  imagen={vacuna} />
                    <Carta Tipo="Vacunadosㅤㅤㅤㅤㅤ" aux ="vacunada"  imagen={vacunados}  />

                </Grid>
                <br/>
                <br/>
                <br/>
                <h1 className='titulo' >CONSULTAS</h1>
                <br/>
                <Grid container justifyContent="center" spacing={1}>



                    <Carta Tipo="Primera Consulta" aux ="consulta9"  imagen={vacunados}  />
                    <Carta Tipo="Segunda Consulta" aux ="consulta2"  imagen={vacunados}  />
                    <Carta Tipo="Tercera Consulta" aux ="consulta3"  imagen={vacunados}  />
                    <Carta Tipo="Cuarta Consulta" aux ="consulta4"  imagen={vacunados}  />
                </Grid>
            </div>

      )
}

export default OpcionesLista;