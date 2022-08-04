import React, {useEffect, useState} from 'react';
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
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Formulario from './../Formularios/ConsisteF';
import * as funciones from '../General/Functions';
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


function Consiste() {
    let idTratamiento=window.location.href.split('/')[window.location.href.split('/').length-1]
    const [datos, setDatos] = useState([]);
    const showData = async () => {
       await funciones.getDatos('consiste/'+idTratamiento,setDatos)


    };

    useEffect(() => {
        showData();
        console.log(datos)
    }, []);
    const eliminar = async (dat) => {

        let result = await funciones.eliminarFila('consiste/'+idTratamiento+'/'+ dat.codemedicamento);
        return result;
    };

    const [modifi, setModifi] = useState({});
    const [modificable, setModificable] = useState(
        {

            cantdays: '',
            dosis: '',
            frecuency: '',
        });

    const modificar = async (dat) => {
        let result = await funciones.modificarFila('consiste/' +idTratamiento+'/'+dat.codemedicamento,
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
                                Medicamentos del tratamiento {idTratamiento}
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
                                <th>Nombre</th>
                                <th>Component</th>
                                <th>Cantidad de Dias</th>

                                <th>Dosis</th>
                                <th>frecuency</th>

                                <th>Acciones</th>

                            </tr>
                            {datos.map((dato) => {
                                
                                return (
                                    <tr>
                                        <th>{dato['codemedicamento']}</th>
                                        <th>{dato['name']}</th>
                                        <th>{dato['component']}</th>
                                        <th>
                                            {modifi != null && modifi.codemedicamento ===
                                            dato.codemedicamento ?
                                                <input onChange={handleChangeModifi}
                                                       type="text" id="cantdays"
                                                       spellCheck="false"
                                                       placeholder={dato['cantdays']}
                                                       name="cantdays"/> :
                                                dato['cantdays']}
                                        </th>
                                        <th>
                                            {modifi != null && modifi.codemedicamento ===
                                            dato.codemedicamento ?
                                                <input onChange={handleChangeModifi}
                                                       type="text" id="dosis"
                                                       spellCheck="false"
                                                       placeholder={dato['dosis']}
                                                       name="dosis"/> :
                                                dato['dosis']}
                                        </th>
                                        <th>
                                            {modifi != null && modifi.codemedicamento ===
                                            dato.codemedicamento ?
                                                <input onChange={handleChangeModifi}
                                                       type="text" id="frecuency"
                                                       spellCheck="false"
                                                       placeholder={dato['frecuency']}
                                                       name="frecuency"/> :
                                                dato['frecuency']}
                                        </th>

                                        <th className="acciones">
                                            {modifi != null && modifi.codemedicamento ===
                                            dato.codemedicamento ? <>
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
                                                        component: '',
                                                        concentration: '',
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

export default Consiste;