import React, {useState, useEffect} from 'react';

import {
   Card,
   CardContent,
   Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
import '../../css/Personas.css';
import '../../css/Tablas.css';
import paciente from '../../imagenes/paciente.jpg';
import paciente2 from '../../imagenes/paciente2.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormularioPersona from './../Formularios/Personas';
import * as funciones from '../General/Functions';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {Link} from 'react-router-dom';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 800,
   bgcolor: 'rgba(255,255,255,0)',
   p: 4,
};

function PersonalSalud() {
   const [modifi, setModifi] = useState({});
   const [modificable, setModificable] = useState(
       {

          email: '',
          type: '',
       });

   const [open, setOpen] = React.useState(false);
   const handleClose = () => setOpen(false);
   const [personas, setPersonas] = useState([]);
   const showData = async () => {
       await funciones.getDatos('personas/ps',setPersonas)

   };
   const [aux, setAux] = useState(false);

   useEffect(() => {
      showData();
      console.log(personas)
   }, [aux]);

   const eliminar = async (dat) => {

      let result = await funciones.eliminarFila('personas/ps/' + dat.id);
      return result;
   };

   const modificar = async (dat) => {
      let result = await funciones.modificarFila('personas/ps/' + dat.id,
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
                         Personal de Salud
                      </Typography>

                      <br/>

                   </CardContent>
                </Card>

                <div>
                   <div className="contenedorTabla">
                      <table>
                         <thead>
                            <tr className="tableHeader">
                               <th>Cedula</th>
                               <th>Nombre</th>
                               <th>Apellido</th>
                               <th>Sexo</th>
                               <th>Fecha de Nacimiento</th>
                               <th>Alto Riesgo</th>
                               <th>Correo</th>
                               <th>Tipo</th>
                               <th>Acciones</th>

                            </tr>
                         </thead>
                         <tbody>
                            {personas.map((persona) => {
                               return (
                                   <tr>
                                      <th>{persona['id']}</th>
                                      <th>{persona['name']}</th>
                                      <th>{persona['lastname']}</th>
                                      <th>{persona['sex']}</th>
                                      <th>{funciones.formatDate(
                                          persona['birthdate'])}
                                      </th>

                                      <th>
                                         {persona['highrisk'] ?
                                             'Si' :
                                             'No'}
                                      </th>

                                      <th>
                                         {modifi != null && modifi.id ==
                                         persona.id ?
                                             <input onChange={handleChangeModifi}
                                                    type="text" id="email"
                                                    spellCheck="false"
                                                    placeholder={persona['email']}
                                                    name="email"/> :
                                             persona['email']

                                         }
                                      </th>
                                      <th>
                                         {modifi != null && modifi.id ==
                                         persona.id ?
                                             <input onChange={handleChangeModifi}
                                                    type="text" id="type"
                                                    spellCheck="false"
                                                    placeholder={persona['type']}
                                                    name="type"/> : persona['type']

                                         }
                                      </th>

                                      <th className="acciones">
                                         {modifi != null && modifi.id ==
                                         persona.id ? <>
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

                                                   email: '',
                                                   type: '',

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

                                            <Link to={`/asignado/`+persona.id}>
                                               <Button
                                                   variant="contained"
                                                   color="success"
                                                   className="button"
                                                   startIcon={<LocalHospitalIcon/>}



                                               >
                                                  Centros de Salud


                                               </Button>
                                            </Link>

                                         </>}

                                      </th>
                                   </tr>

                               );

                            })
                            }
                         </tbody>


                      </table>
                   </div>
                </div>
             </div>
          </div>
       </>);
}

export default PersonalSalud;