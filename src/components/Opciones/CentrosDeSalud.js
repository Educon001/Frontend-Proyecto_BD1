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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import '../../css/Personas.css';
import {Carousel} from 'react-bootstrap';
import '../../css/Tablas.css';
import paciente from '../../imagenes/paciente.jpg';
import paciente2 from '../../imagenes/paciente2.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormularioCentroSalud from '../Formularios/CentroDeSalud';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
import * as funciones from '../General/Functions';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

function CentroDeSalud() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [aux, setAux] = useState(false);
   const imagenes = [paciente, paciente2];
   const [datos, setDatos] = useState([]);
   const showData = async () => {
      let url = 'http://localhost:4000/cv';
      const response = await fetch(url);
      const data = await response.json();
      data.map((dato) => {
         dato.tipo = 'Vacunacion';
      });
      let url2 = 'http://localhost:4000/ch';
      const response2 = await fetch(url2);
      const data2 = await response2.json();
      data2.map((dato) => {
         dato.tipo = 'Hospitalizacion';
      });
      const dataCompleta = data2.concat(data);

      setDatos(dataCompleta);
      console.log(dataCompleta);

   };

   useEffect(() => {
      showData();
   }, [aux]);

   return (
       <>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
             <Box sx={style}>

                <FormularioCentroSalud cerrarAbrir={() => setAux(!aux)}/>

             </Box>
          </Modal>
          <br/>
          <div style={{
             display: 'block',
             paddingInline: '100px',
          }/*paddingInline: '15px'*/}>
             <Card sx={{width: '100% '}}>

                <CardContent>
                   <Typography gutterBottom variant="h3" component="div">
                      Centros de Salud
                   </Typography>
                   <Typography gutterBottom variant="h4" component="div">
                      <Button
                          variant="contained"
                          color="primary"
                          className="button"
                          startIcon={<BorderColorSharpIcon/>}
                          onClick={handleOpen}

                      >
                         Agregar
                      </Button>
                   </Typography>

                   <Typography gutterBottom variant="h4" component="div">
                      Filtros
                   </Typography>


                   <br/>

                </CardContent>
             </Card>

             <div>
                <div className="contenedorTabla">
                   <table>
                      <tr className="tableHeader">

                         <th>Codigo</th>
                         <th>Nombre</th>
                         <th>Tipo</th>
                         <th>Direccion</th>
                         <th>Cedula Encargado</th>
                         <th>codigo Municipio</th>
                         <th>Fecha de asignacion</th>


                         <th>Accion</th>

                      </tr>
                      {datos.map((dato) => {
                         return (
                             <tr>
                                <th>{dato['code']}</th>
                                <th>{dato['name']}</th>
                                <th>{dato['tipo']}</th>
                                <th>{dato['address']}</th>
                                <th>{dato['id_medico']}</th>
                                <th>{dato['code_municipio']}</th>
                                <th>{funciones.formatDate(
                                    dato['manager_date'])}</th>

                                <th className="acciones">
                                   <Button
                                       variant="contained"
                                       color="primary"
                                       className="button"
                                       startIcon={<CloudUploadIcon/>}
                                   >
                                      Update
                                   </Button>

                                   <Button
                                       variant="contained"
                                       color="secondary"
                                       className="button"
                                       startIcon={<DeleteIcon/>}

                                   >
                                      Delete
                                   </Button>
                                </th>
                             </tr>

                         );

                      })
                      }


                   </table>
                </div>
             </div>
          </div>
       </>);
}

export default CentroDeSalud;