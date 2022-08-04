import React, {useEffect, useState} from 'react';
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
import Formulario from './../Formularios/TieneF';
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
/*CodeVacuna INT,
    CodeSintoma INT,,*/

function Presenta() {
    let idVacuna=window.location.href.split('/')[window.location.href.split('/').length-1]
    const [datos, setDatos] = useState([]);
    const showData = async () => {
        await funciones.getDatos('presenta/'+idVacuna,setDatos)

    };
    const [aux, setAux] = useState(false);

    useEffect(() => {
        showData();
        console.log(datos)
    }, [aux]);
    const eliminar = async (dat) => {

        let result = await funciones.eliminarFila('presenta/'+idVacuna+'/'+ dat.codesintoma);
        return result;
    };

    const [modifi, setModifi] = useState({});
    const [modificable, setModificable] = useState(
        {
            codesintoma:'',
        });

    const modificar = async (dat) => {
        let result = await funciones.modificarFila('presenta/' +idVacuna+'/'+dat.codemedicamento,
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
                console.log(modificable)
            );
        }
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function tabla(){

        return(
            <div>
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
                                    Síntomas de la Vacuna {idVacuna}
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

                        <div className="contenedorTabla">
                            <table>
                                <tr className="tableHeader">

                                    <th>Codigo</th>
                                    <th>Descripcion</th>

                                    <th>Acciones</th>

                                </tr>
                                {datos.map((dato) => {

                                    return (
                                        <tr>
                                            <th>
                                                {modifi != null && modifi.codesintoma ===
                                                dato.codesintoma ?
                                                    <input onChange={handleChangeModifi}
                                                           type="text" id="codesintoma"
                                                           spellCheck="false"
                                                           placeholder={dato['codesintoma']}
                                                           name="codesintoma"/> :
                                                    dato['codesintoma']}
                                            </th>
                                            <th>{dato['description']}</th>
                                            <th className="acciones">
                                                {modifi != null && modifi.codesintoma ===
                                                dato.codesintoma ?  <>
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
                                                            codesintoma:'',
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
        )
    }


    return (
        <div style={{
            display: 'block',
            paddingInline: '100px',
        }/*paddingInline: '15px'*/}>

            {tabla()}

        </div>
    );
}

export default Presenta;