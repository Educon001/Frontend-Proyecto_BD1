import React, {useState, useEffect} from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core';
import '../../css/Personas.css';
import '../../css/Tablas.css';
import paciente from '../../imagenes/paciente.jpg';
import paciente2 from '../../imagenes/paciente2.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormularioPersona from './../Formularios/Personas';
import * as funciones from './../General/Functions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Consulta4() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [datos, setDatos] = useState([]);
  const showData = async () => {
    let result = await funciones.getDatos('reportes/4', setDatos);
  };
  const [aux, setAux] = useState(false);

  useEffect(() => {
    showData();
  }, [aux]);

  return (
      <>
        <div className="diseno">
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"

          >
            <Box sx={style}>

              <FormularioPersona cerrarAbrir={() => setAux(!aux)}/>

            </Box>
          </Modal>
          <br/>
          <div style={{
            display: 'block',
            paddingInline: '100px',
          }/*paddingInline: '15px'*/}>
            <Card sx={{width: '100% '}}>

              <CardContent>
                <Typography gutterBottom variant="h3"
                            component="div">
                  Los tratamientos que se han aplicado a los pacientes que han
                  sido contagiados.
                  Además se necesita cuál es el virus y las características del
                  mismo
                </Typography>

                <br/>

              </CardContent>
            </Card>

            <div>
              <div className="contenedorTabla">
                <table>
                  <tr className="tableHeader">
                    <th>ID Persona</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Código tratamiento</th>
                    <th>Descripción</th>
                    <th>Fecha de aplicación</th>
                    <th>Denominación virus</th>
                    <th>Clasificación virus</th>
                    <th>Linaje virus</th>

                  </tr>
                  {datos.map((dato) => {
                    return (
                        <tr>
                          <th>{dato['id']}</th>
                          <th>{dato['name']}</th>
                          <th>{dato['lastname']}</th>
                          <th>{dato['code']}</th>
                          <th>{dato['description']}</th>
                          <th>{funciones.formatDate(dato['date'])}</th>
                          <th>{dato['denom_oms']}</th>
                          <th>{dato['clasification']}</th>
                          <th>{dato['linaje']}</th>

                        </tr>

                    );

                  })
                  }


                </table>
              </div>
            </div>
          </div>
        </div>
      </>);
}

export default Consulta4;