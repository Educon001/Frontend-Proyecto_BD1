import React from 'react';
import { Link } from "react-router-dom"
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material'

function Ciudad(props) {
    
    const { Tipo,aux,imagen } = props
     
    return (
        <Grid item><br />
            <Link to={"/opciones/" + aux} state={{ tipo: { props } }}>
                <Box
                    sx={{
                        width: 300,
                        height: 400,
                        maxWidth: 300,
                        maxHeight :400,

                    }}
                >
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={imagen}
                                alt={Tipo} />
                            <CardContent>
                                <Typography width={'100px'} fontSize={'30px'} gutterBottom variant="h4" component="div">
                                    {Tipo}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Link></Grid>
            
    )

}

export default Ciudad;