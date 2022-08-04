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
import * as funciones from './../General/Functions'

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

function Consulta7() {

   const [open, setOpen] = React.useState(false);
   const handleClose = () => setOpen(false);
   const [datos, setDatos] = useState([]);
   const showData = async () => {
       await funciones.getDatos('reportes/7',setDatos)

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
                         Por centros de salud, su tipo, y dependiendo del tipo,
                         la cantidad de personas vacunadas o la cantidad de
                         pacientes
                      </Typography>
                      <br/>

                   </CardContent>
                </Card>

                <div>
                   <div className="contenedorTabla">
                      <table>
                         <tr className="tableHeader">
                            <th>Centro de Salud</th>
                            <th>Tipo</th>
                            <th>Cantidad de Pacientes/Vacunados</th>

                         </tr>
                         {datos.map((dato) => {
                            return (
                                <tr>
                                   <th>{dato['name']}</th>
                                   <th>{dato['tipo']}</th>
                                   <th>{dato['cant_pacientes_vacunados']}</th>

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

export default Consulta7;