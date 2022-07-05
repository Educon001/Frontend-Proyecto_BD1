import React from 'react';
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import Paciente from '@mui/icons-material/PersonAddAlt1';
import LocalHospitalSharp from '@mui/icons-material/LocalHospitalSharp';

import './css/barraLateral.css'

type Props={
    actiDesacPer:any;
    actiDesacHosp:any;

}
const BarraLateral = ({actiDesacPer,actiDesacHosp}:Props) => {
    return (
        <>
            <div className="contenedorBarra">


                    <List
                        sx={{ width: '100%', height: "100%"}}


                    >
                        <ListItemButton >
                            <ListItemIcon onClick={actiDesacPer}>
                                <Paciente />
                            </ListItemIcon>
                            <ListItemText  primary="Datos Paciente" />
                        </ListItemButton>

                        <ListItemButton onClick={actiDesacHosp} >
                            <ListItemIcon>
                                <LocalHospitalSharp/>
                            </ListItemIcon>
                            <ListItemText primary="Hospitales" />
                        </ListItemButton>



                    </List>

            </div>
        </>
    );
};

export default BarraLateral;