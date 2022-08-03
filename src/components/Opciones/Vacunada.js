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
import Formulario from './../Formularios/Vacunada';
import * as funciones from '../General/Functions';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 650,
   bgcolor: 'rgba(255,255,255,0)',
   p: 4,
};

function Vacunada() {

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const imagenes = [paciente, paciente2];
   const [personas, setPersonas] = useState([]);
   const showData = async () => {
      let result = await funciones.getDatos('vacunada',setPersonas)

   };
   const [aux, setAux] = useState(false);

   useEffect(() => {
      showData();
   }, [aux]);

   const eliminar = async (dat) => {

      let result = await funciones.eliminarFila(
          'vacunada/' + dat.idpersona + '/' + dat.codevacuna + '/' +
          dat.codecentrov + '/' + dat.idpersonal + '/' + dat.datevacuna);
      return result;
   };

   const [modifi, setModifi] = useState({});
   const [modificable, setModificable] = useState(
       {
          dosis: '',
       });

   const modificar = async (dat) => {
      let result = await funciones.modificarFila(
          'vacunada/' + dat.idpersona + '/' + dat.codevacuna + '/' +
          dat.codecentrov + '/' + dat.idpersonal + '/' + dat.datevacuna,
          modificable);
      return result;
   };

   const handleChangeModifi = (e) => {
      e.preventDefault();

      if (e.target.value != null && e.target.value != '') {
         setModificable({
                ...modificable,
                [e.target.name]: e.target.value,
             },
         );
      }
   };

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

                   <Formulario cerrarAbrir={() => setAux(!aux)}/>

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
                         Vacunados
                      </Typography>
                      <Typography gutterBottom variant="h4"
                                  component="div">
                         <Button
                             variant="contained"
                             color="primary"
                             className="button"
                             startIcon={<AddIcon/>}
                             onClick={handleOpen}

                         >
                            Agregar
                         </Button>
                      </Typography>


                      <br/>

                   </CardContent>
                </Card>

                <div>
                   <div className="contenedorTabla">
                      <table>
                         <tr className="tableHeader">
                            <th>Cedula de Vacunado</th>
                            <th>Codigo Vacuna</th>
                            <th>Codigo Centro De Vacunacion</th>
                            <th>Cedula Personal De Salud</th>
                            <th>Fecha de Vacunacion</th>
                            <th>Dosis</th>
                            <th>Acciones</th>

                         </tr>
                         {personas.map((persona) => {
                            return (

                                <tr>
                                   <th>{persona['idpersona']}</th>
                                   <th>{persona['codevacuna']}</th>
                                   <th>{persona['codecentrov']}</th>
                                   <th>{persona['idpersonal']}</th>
                                   <th>{funciones.formatDate(
                                       persona['datevacuna'])}</th>
                                   <th>{modifi != null && modifi.idpersona ==
                                   persona.idpersona
                                   && modifi.codevacuna == persona.codevacuna &&
                                   modifi.codecentrov == persona.codecentrov
                                   && modifi.idpersonal == persona.idpersonal &&
                                   modifi.datevacuna == persona.datevacuna ?
                                       <input onChange={handleChangeModifi}
                                              type="text" id="dosis"
                                              spellCheck="false"
                                              placeholder={persona['dosis']}
                                              name="dosis"/> :
                                       persona['dosis']}</th>
                                   <th className="acciones">
                                      {modifi != null && modifi.idpersona ==
                                      persona.idpersona
                                      && modifi.codevacuna ==
                                      persona.codevacuna &&
                                      modifi.codecentrov == persona.codecentrov
                                      && modifi.idpersonal ==
                                      persona.idpersonal && modifi.datevacuna ==
                                      persona.datevacuna ? <>
                                         <Button
                                             variant="contained"
                                             color="primary"
                                             className="button"
                                             startIcon={<CheckIcon/>}
                                             onClick={() => modificar(
                                                 modificable)}
                                         >
                                            Aceptar
                                         </Button>

                                         <Button
                                             variant="contained"
                                             color="secondary"
                                             className="button"
                                             startIcon={<CloseIcon/>}
                                             onClick={() => setModifi({
                                                dosis: '',
                                             })}
                                         >
                                            Cancelar
                                         </Button>
                                      </> : <>
                                         <Button
                                             variant="contained"
                                             color="primary"
                                             className="button"
                                             startIcon={
                                                <BorderColorSharpIcon/>}
                                             onClick={() => {
                                                setModifi(persona);
                                                setModificable(persona);
                                             }}
                                         >
                                            Update
                                         </Button>

                                         <Button
                                             variant="contained"
                                             color="secondary"
                                             className="button"
                                             startIcon={<DeleteIcon/>}
                                             onClick={() => eliminar(persona)}
                                         >
                                            Delete
                                         </Button></>}
                                   </th>
                                </tr>

                            )
                                ;

                         })
                         }


                      </table>
                   </div>
                </div>
             </div>
          </div>
       </>);
}

export default Vacunada;