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
import * as funciones from '../General/Functions';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Formulario from './../Formularios/Pais';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'rgba(255,255,255,0)',
    p: 4,
};

function Pais() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const imagenes = [paciente, paciente2];
    const [datos, setDatos] = useState([]);
    const showData = async () => {
        let result = await funciones.getDates('pais',setDatos)

    };
    const [aux, setAux] = useState(false);

    useEffect(() => {
        showData();
        console.log(datos)
    }, [aux]);

    const eliminar = async (dat) => {

        let result = await funciones.eliminarFila('pais/' + dat.code);
        return result;
    };

    const [modifi, setModifi] = useState({});
    const [modificable, setModificable] = useState(
        {
            name: null,
            codepais: null,
            code: null,

        });

    const modificar = async (dat) => {
        let result = await funciones.modificarFila('pais/' + dat.code,
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

                        <Formulario/>

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
                                Paises
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
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th>Acciones</th>

                                </tr>
                                {datos.map((dato) => {
                                    return (
                                        <tr>
                                            <th>{dato['code']}</th>
                                            <th>
                                                {modifi != null && modifi.code ==
                                                dato.code ?
                                                    <input onChange={handleChangeModifi}
                                                           type="text" id="name"
                                                           spellCheck="false"
                                                           placeholder={dato['name']}
                                                           name="name"/> :
                                                    dato['name']}
                                            </th>


                                            <th className="acciones">
                                                {modifi != null && modifi.code ==
                                                dato.code ? <>
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
                                                            name: '',
                                                            lote: '',
                                                            cantdosis: '',
                                                            type: '',
                                                            laboratory: '',
                                                            code_pais: '',
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
                                                            setModifi(dato);
                                                            setModificable(dato);
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
            </div>
        </>)
        ;
}

export default Pais;