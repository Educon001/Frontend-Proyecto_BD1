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

function Consulta8() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const imagenes = [paciente, paciente2]
    const [datos, setDatos] = useState([])
    let url = 'http://localhost:4000/reportes/8'
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

                <br/>
                <div style={{display: 'block', paddingInline: '100px',}/*paddingInline: '15px'*/}>
                    <Card sx={{width: '100% '}}>
                        
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                Síntomas asociados a cada uno de los
                                virus-variante y vacuna más eficaz para ese virus.
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
                                <tr className='tableHeader'>
                                    <th>Variante</th>
                                    <th>Sintoma</th>
                                    <th>Vacuna mas efectiva</th>

                                </tr>
                                {datos.map((dato) => {
                                    return (
                                        <tr>
                                            <th>{dato['variante']}</th>
                                            <th>{dato['sintoma']}</th>
                                            <th>{dato['vacuna_mas_efectiva']}</th>

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

export default Consulta8;