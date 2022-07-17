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

function Vacuna() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const imagenes = [paciente, paciente2]
    const [datos, setDatos] = useState([])
    let url = 'http://localhost:4000/vacuna'
    const showData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setDatos(data)
    }
    const [aux, setAux] = useState(false)

    useEffect(() => {
        showData()
    }, [aux])


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
                    <CardMedia>
                        <Carousel variant="dark">
                            {/*<Carousel.Item><img src={paciente} className="d-block w-80 mx-auto" alt='Fotos mostrando la ciudad'></img></Carousel.Item>*/}
                            {imagenes.map(imagen => <Carousel.Item><img src={imagen}
                                                                        className="d-block w-80 h-100% mx-auto"
                                                                        alt='Fotos mostrando la ciudad'></img></Carousel.Item>)}
                        </Carousel>
                    </ CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            Vacunas
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
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Lote</th>
                                <th>CantDosis</th>
                                <th>Tipo</th>
                                <th>Laboratorio</th>
                                <th>Codigo Pais</th>
                                <th>Acciones</th>

                            </tr>
                            {datos.map((dato) => {
                                return (
                                    <tr>
                                        <th>{dato['code']}</th>
                                        <th>{dato['name']}</th>
                                        <th>{dato['lote']}</th>
                                        <th>{dato['cantdosis']}</th>
                                        <th>{dato['type']}</th>
                                        <th>{dato['laboratory']}</th>
                                        <th>{dato['code_pais']}</th>
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

export default Vacuna;