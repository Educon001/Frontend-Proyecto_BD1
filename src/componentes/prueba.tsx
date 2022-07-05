import React, {useState} from 'react';
import './../css/lateralBar.css'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


const prueba = () => {
    const [prueba,setPrueba]=useState("")
    const funcionPrueba =  function (x:string){
        setPrueba(x)
        console.log(prueba)

    }
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    onClick={(event) => funcionPrueba("PRIMERO")}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItemButton>
                <ListItemButton

                    onClick={(event) => funcionPrueba("SEGUNDO")}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton

                    onClick={(event) => funcionPrueba("TERCERO")}
                >
                    <ListItemText primary="Trash" />
                </ListItemButton>
                <ListItemButton

                    onClick={(event) => funcionPrueba("CUARTO")}
                >
                    <ListItemText primary="Spam" />
                </ListItemButton>
            </List>
        </Box>
    );
};

export default prueba;