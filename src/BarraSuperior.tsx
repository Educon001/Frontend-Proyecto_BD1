import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const BarraSuperior = () => {

    return (
        <>
            <Box  sx={{ flexGrow: 1 }}>
                <AppBar backgraund-color="black" position="static">

                    <Toolbar backgraund-c>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >


                        </IconButton>
                        <Typography variant="h6" component="div" backgraund-color="black" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>

                </AppBar>
            </Box>

        </>
    );
};

export default BarraSuperior;