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
import * as funciones from '../General/Functions';
import '../../css/Formulario.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 550,
   overflow: 'auto',
   bgcolor: 'rgba(255,255,255,0)',
   p: 4,
};

function Personas() {
   const [modifi, setModifi] = useState({});
   const [modificable, setModificable] = useState(
       {
          name: '',
          lastname: '',
          sex: '',
          birthdate: '',
          highrisk: '',

       });
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const imagenes = [paciente, paciente2];
   const [personas, setPersonas] = useState([]);
   const showData = async () => {
      let result = await funciones.getDatos('personas/paciente',setPersonas)
   };
   const [aux, setAux] = useState(false);

   useEffect(() => {
      showData();
   }, [aux]);

   const eliminar = async (dat) => {

      let result = await funciones.eliminarFila('personas/' + dat.id);
      return result;
   };

   const modificar = async (dat) => {
      let result = await funciones.modificarFila('personas/' + dat.id,
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
          <div>
             <Modal
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description"

             >
                <Box sx={style}>

                   <FormularioPersona />

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
                         Pacientes
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
                            <th>Cedula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Sexo</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Alto Riesgo</th>
                            <th>Acciones</th>

                         </tr>
                         {personas.map((persona) => {
                            return (
                                <tr>
                                   
                                   <th>{persona['id']}</th>
                                   <th>
                                      {modifi != null && modifi.id ==
                                      persona.id ?
                                          <input onChange={handleChangeModifi}
                                                 type="text" id="name"
                                                 spellCheck="false"
                                                 placeholder={persona['name']}
                                                 name="name"/> :
                                          persona['name']}
                                   </th>
                                   <th>
                                      {modifi != null && modifi.id ==
                                      persona.id ?
                                          <input onChange={handleChangeModifi}
                                                 type="text" id="lastname"
                                                 spellCheck="false"
                                                 placeholder={persona['lastname']}
                                                 name="lastname"/> :
                                          persona['lastname']}
                                   </th>
                                   <th>
                                      {modifi != null && modifi.id ==
                                      persona.id ?
                                          <input onChange={handleChangeModifi}
                                                 type="text" id="sex"
                                                 spellCheck="false"
                                                 placeholder={persona['sex']}
                                                 name="sex"/> : persona['sex']}
                                   </th>

                                   <th>
                                      {modifi != null && modifi.id ==
                                      persona.id ?
                                          <input onChange={handleChangeModifi}
                                                 type="date" id="birthdate"
                                                 min="1900-01-01"
                                                 max="now"
                                                 placeholder="MM/DD/YYYY"
                                                 onFocus={persona['birthdate']}
                                                 name="birthdate"/> :
                                          funciones.formatDate(
                                              persona['birthdate'])}
                                   </th>


                                   <th>
                                      {modifi != null && modifi.id ==
                                      persona.id ?
                                          <input onChange={handleChangeModifi}
                                                 type="text" id="highrisk"
                                                 spellCheck="false"
                                                 placeholder={persona['highrisk'] ?
                                                     'Si' :
                                                     'No'}
                                                 name="highrisk"/> :
                                          persona['highrisk'] ?
                                              'Si' :
                                              'No'}
                                   </th>

                                   <th className="acciones">
                                      {modifi != null && modifi.id ==
                                      persona.id ? <>
                                         <Button
                                             variant="contained"
                                             color="primary"
                                             className="button"
                                             startIcon={<CheckIcon/>}
                                             onClick={() =>
                                                modificar(modificable)

                                             }
                                         >
                                            Aceptar
                                         </Button>

                                         <Button
                                             variant="contained"
                                             color="secondary"
                                             className="button"
                                             startIcon={<CloseIcon/>}
                                             onClick={() => setModifi({
                                                name: '',
                                                lastname: '',
                                                sex: '',
                                                birthdate: '',
                                                highrisk: '',

                                             })}
                                         >
                                            Cancelar
                                         </Button>
                                      </> : <>
                                         <Button
                                             variant="contained"
                                             color="primary"
                                             className="button"
                                             startIcon={<BorderColorSharpIcon/>}
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
                                         </Button>
                                         <Button variant="contained" color="success">
                                            Success
                                         </Button>

                                      </>

                                      }


                                   </th>
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

export default Personas;