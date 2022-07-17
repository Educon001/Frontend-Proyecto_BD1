import React, {useState, useEffect} from "react"

import {Card, CardContent, CardMedia, Typography, Grid} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
import '../../css/Personas.css'
import {Carousel} from "react-bootstrap";
import "../../css/Tablas.css"
import paciente from '../../imagenes/paciente.jpg'
import paciente2 from '../../imagenes/paciente2.jpg'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormularioPersona from './../Formularios/Personas'

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

function Vacunada() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const imagenes = [paciente, paciente2]
    const [personas, setPersonas] = useState([])
    let url = 'http://localhost:4000/vacunada'
    const showData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setPersonas(data)
    }
    const [aux, setAux] = useState(false)

    useEffect(() => {
        showData()
    }, [aux])

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    return (
        <>
        <div className='diseno'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>

                    <FormularioPersona cerrarAbrir={() =>setAux(!aux)}/>

                </Box>
            </Modal>
            <br/>
            <div style={{display: 'block', paddingInline: '100px',}/*paddingInline: '15px'*/}>
                <Card sx={{width: '100% '}}>

                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            Vacunados
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            <Button
                                variant="contained"
                                color="primary"
                                className='button'
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
                                        <th>{formatDate(persona['datevacuna'])}</th>
                                        <th>{persona['dosis']}</th>

                                        <th className='acciones'>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className='button'
                                                startIcon={<BorderColorSharpIcon/>}
                                            >
                                                Update
                                            </Button>

                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className='button'
                                                startIcon={<DeleteIcon/>}

                                            >
                                                Delete
                                            </Button>
                                        </th>
                                    </tr>

                                )

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