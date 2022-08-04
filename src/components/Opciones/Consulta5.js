import React, {useState, useEffect} from 'react';

import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import '../../css/Personas.css';
import '../../css/Tablas.css';
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

function Consulta5() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [datos, setDatos] = useState([]);
  const showData = async () => {
     await funciones.getDatos('reportes/5', setDatos);
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
                  Imprima los países donde vivan más personas contagiadas por
                  cada una de las
                  distintas variantes existentes
                </Typography>

                <br/>

              </CardContent>
            </Card>

            <div>
              <div className="contenedorTabla">
                <table>
                  <tr className="tableHeader">
                    <th>Variante</th>
                    <th>País</th>
                    <th>Numero de contagios</th>

                  </tr>
                  {datos.map((dato) => {
                    return (
                        <tr>
                          <th>{dato['variante']}</th>
                          <th>{dato['pais']}</th>
                          <th>{dato['ncontagios']}</th>

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

export default Consulta5;