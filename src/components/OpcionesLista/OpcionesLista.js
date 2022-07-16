import React from 'react';
import Ciudad from "../Ciudad/Ciudad";
import { Grid } from '@material-ui/core';
import personas from '../../imagenes/personas.jpg'
import personalDeSalud from '../../imagenes/personalDeSalud.jpg'
import pacientes from '../../imagenes/personas.jpg'
import centroSalud from '../../imagenes/centroSalud.jpg'
function OpcionesLista() {


      return (

            <div style={{ display: 'flexbox', justifyContent: 'center' }}>
                  <Grid container justifyContent="center" spacing={1}>
                      <Ciudad Tipo="Tabla de Personas" aux="personas" imagen={personas}/>
                      <Ciudad Tipo="Centros De Salud" aux="cs" imagen={centroSalud} />
                      <Ciudad Tipo="Personal de Salud" imagen={personalDeSalud} aux="ps" />
                      {/*<Ciudad Tipo="Vacunas" aux= "vacunas"/>*/}
                      {/*<Ciudad Tipo="Vacunados" aux ="vacunados"  />*/}
                  </Grid>
            </div>

      )
}

export default OpcionesLista;