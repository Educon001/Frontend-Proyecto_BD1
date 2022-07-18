import React, {useState, useEffect} from 'react';

import {
   Card,
   CardContent,
   CardMedia,
   Typography,
   Grid,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
import '../../css/Personas.css';
import {Carousel} from 'react-bootstrap';
import '../../css/Tablas.css';
import paciente from '../../imagenes/paciente.jpg';
import paciente2 from '../../imagenes/paciente2.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormularioPersona from './../Formularios/Personas';

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
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const imagenes = [paciente, paciente2];
   const [datos, setDatos] = useState([]);
   let url = 'http://localhost:4000/reportes/7';
   const showData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setDatos(data);
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