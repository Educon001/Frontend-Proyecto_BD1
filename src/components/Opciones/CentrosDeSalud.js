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
   width: 650,
   bgcolor: 'rgba(255,255,255,0)',
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
            dato.tipo = 'cv';
        });
        let url2 = 'http://localhost:4000/ch';
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        data2.map((dato) => {
            dato.tipo = 'ch';
        });
        const dataCompleta = data2.concat(data);

        setDatos(dataCompleta);
        console.log(dataCompleta);

    };


    useEffect(() => {
        showData();
    }, [aux]);

    const eliminar = async (dat) => {

        let result = await funciones.eliminarFila(dat.tipo + '/' + dat.code)
        return result
    }

    const [modifi, setModifi] = useState({});
    const [modificable, setModificable]=useState(
        {
            name: '',
            address: '',
            id_medico: '',
            code_municipio: '',
            manager_date: '',


        })
    const modificar = async (dat) => {
        let result = await funciones.modificarFila(dat.tipo+'/'+dat.code,modificable)
        return result


    }

    const handleChangeModifi=(e)=>{
        e.preventDefault()

        if (e.target.value!=null && e.target.value!='') {
            setModificable({
                    ...modificable,
                    [e.target.name]: e.target.value,
                }
            )
        }
    }
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
                                        <th>
                                            {modifi!=null && modifi.code==dato.code  ?
                                                <input onChange={handleChangeModifi}  type="text" id="name" spellCheck="false"
                                                             placeholder={dato['name']}
                                                             name="name"/> : dato['name']}
                                        </th>

                                        <th>{dato['tipo'] == 'cv' ? 'Vacunacion' : 'Hospitalizacion'}</th>

                                        <th>
                                            {modifi!=null && modifi.code==dato.code  ?
                                                <input onChange={handleChangeModifi}  type="text" id="address" spellCheck="false"
                                                       placeholder={dato['address']}
                                                       name="address"/> : dato['address']}
                                        </th>
                                        <th>
                                            {modifi!=null && modifi.code==dato.code  ?
                                                <input onChange={handleChangeModifi}  type="text" id="id_medico" spellCheck="false"
                                                       placeholder={dato['id_medico']}
                                                       name="id_medico"/> : dato['id_medico']}
                                        </th>
                                        <th>
                                            {modifi!=null && modifi.code==dato.code  ?
                                                <input onChange={handleChangeModifi}  type="text" id="code_municipio" spellCheck="false"
                                                       placeholder={dato['code_municipio']}
                                                       name="code_municipio"/> : dato['code_municipio']}
                                        </th>
                                        <th>
                                            {modifi!=null && modifi.code==dato.code  ?
                                                <input onChange={handleChangeModifi} type="date" id="manager_date" min="1900-01-01"
                                                       max="now"placeholder="MM/DD/YYYY" onFocus={dato['manager_date']}
                                                       name="manager_date"/> : funciones.formatDate(
                                                    dato['manager_date'])}
                                        </th>



                                        <th className="acciones">
                                            {modifi!=null && modifi.code==dato.code ? <>
                                                <Button
                                                variant="contained"
                                                color="primary"
                                                className="button"
                                                startIcon={<CloudUploadIcon/>}
                                                onClick={() => modificar(modificable)}
                                                >
                                                    Aceptar
                                                </Button>

                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    className="button"
                                                    startIcon={<DeleteIcon/>}
                                                    onClick={() => setModifi({
                                                        name: '',
                                                        address: '',
                                                        id_medico: '',
                                                        code_municipio: '',
                                                        manager_date: '',


                                                    })}
                                                >
                                                    Cancelar
                                                </Button>
                                            </> : <>
                                                <Button
                                                variant="contained"
                                                color="primary"
                                                className="button"
                                                startIcon={<CloudUploadIcon/>}
                                                onClick={() => {
                                                    setModifi(dato);
                                                    setModificable(dato)
                                                }}
                                            >
                                                Update
                                            </Button>

                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    className="button"
                                                    startIcon={<DeleteIcon/>}
                                                    onClick={() => eliminar(dato)}
                                                >
                                                    Delete
                                                </Button></>}

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