import React, {useEffect, useState, useContext} from 'react';
import {
   AppBar,
   InputBase,
   makeStyles,
   Toolbar,
   Typography,
   Avatar,
   IconButton,
   Drawer,
   List,
   ListItem,
} from '@material-ui/core';
import logo from '../../imagenes/Logo.jpeg';
import Search from '../Search/Search';
import MenuIcon from '@material-ui/icons/Menu';
import {amber} from '@mui/material/colors';
import {Link} from 'react-router-dom';
import Logo from '../../imagenes/Logo.jpeg';
import SearchRounded from '@material-ui/icons/SearchRounded';
import '../../css/Banner.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Navbar = () => {

   const classes = useStyle();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const displayDesktop = () => (
       <Toolbar className={classes.toolbar}>
          <nav className="nav-main">
             <Link to="/">
                <img src={logo} className={classes.logo} alt="logo"/>
             </Link>
             <ul className="nav-menu">
                <li>
                   <a href="/personas">Persona</a>
                </li>
                <li>
                   <a href="/personalSalud">Personal de Salud</a>
                </li>
                <li>
                   <a href="/cs">Centros de salud</a>
                </li>
                <li>
                   <a href="/vacunas">Vacunas</a>
                </li>
                <li>
                   <a href="/vacunados">Vacunacion</a>
                </li>

                <Menu
                    id="fade-menu"
                    MenuListProps={{
                       'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta2">Consulta
                      2</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta6">Consulta
                      6</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta7">Consulta
                      7</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta8">Consulta
                      8</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta9">Consulta
                      9</a></MenuItem></li>

                </Menu>
                <li onClick={handleClick}>
                   <a href="#">Reporte</a>
                </li>
             </ul>
             <ul className="nav-menu-right">
                <li>
                   <a href="#">
                      <SearchRounded/>
                   </a>
                </li>
             </ul>
          </nav>

       </Toolbar>
   );
   return (

       <AppBar className={classes.root}>
          {
             displayDesktop()
          }
       </AppBar>

   );
};

const useStyle = makeStyles((theme) => ({
   root: {
      position: 'sticky',
      top: '0',
      backgroundColor: '#ffffff',
      zIndex: 99,
      width: '100vw',

   },

   toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   logo: {
      height: '50px',
      margin: theme.spacing(1, 0, 0, 2),
      objectFit: 'contain',

   },
   center: {

      display: 'flex',
      alignItems: 'center',
      border: '1px solid lightgray',
      borderRadius: '999px',
      minWidth: '300px',
      padding: theme.spacing(1),
      margin: theme.spacing(1),

   },
   input: {
      fontSize: '1,2rem',
      padding: theme.spacing(1, 5, 1, 5),

   },
   right: {
      color: '#cccccc',
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(2),

   },
   avatar: {
      marginLeft: theme.spacing(2),

   },

}));

export default Navbar;