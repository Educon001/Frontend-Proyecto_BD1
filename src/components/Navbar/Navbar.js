import React, {useEffect, useState, useContext} from 'react';
import {
   AppBar,
   makeStyles,
   Toolbar,

} from '@material-ui/core';
import logo from '../../imagenes/Logo.jpeg';
import {Link} from 'react-router-dom';
import SearchRounded from '@material-ui/icons/SearchRounded';
import '../../css/Banner.css';
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

   const [anchorEl2, setAnchorEl2] = React.useState(null);
   const open2= Boolean(anchorEl2);
   const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
   };
   const handleClose2 = () => {
      setAnchorEl2(null);
   };
   const [anchorEl3, setAnchorEl3] = React.useState(null);
   const open3= Boolean(anchorEl3);
   const handleClick3 = (event) => {
      setAnchorEl3(event.currentTarget);
   };
   const handleClose3 = () => {
      setAnchorEl3(null);
   };

   const displayDesktop = () => (
       <Toolbar className={classes.toolbar}>
          <nav className="nav-main">
             <Link to="/">
                <img src={logo} className={classes.logo} alt="logo"/>
             </Link>
             <ul className="nav-menu">


                <li>
                   <a href="/cs">Centros de salud</a>
                </li>
                <li>
                   <a href="/vacunas">Vacunas</a>
                </li>
                <li>
                   <a href="/sintoma">Sintomas</a>
                </li>
                <li>
                   <a href="/variante">Variantes</a>
                </li>
                <li>
                   <a href="/vacunados">Vacunacion</a>
                </li>
                <li>
                   <a href="/tratamientos">Tratamiento</a>
                </li>
                <li>
                   <a href="/medicamentos">Medicamento</a>
                </li>


                
                
                {/*--------------------Personas-----------------------------------------------------------*/}

                <Menu
                    id="fade-menu"
                    MenuListProps={{
                       'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl3}
                    open={open3}
                    onClose={handleClose3}
                    TransitionComponent={Fade}
                >
                   <li><MenuItem onClick={handleClose3}><a
                       href="/personas">Personas en general</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose3}><a
                       href="/personalSalud">Personal de Salud</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose3}><a
                       href="/pacientes">Pacientes</a></MenuItem></li>


                </Menu>
                <li onClick={handleClick3}>
                   <a href="#">Personas</a>
                </li>

                {/*--------------------Localizacion-----------------------------------------------------------*/}
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                       'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    TransitionComponent={Fade}
                >
                   <li><MenuItem onClick={handleClose2}><a
                       href="/pais">Pais</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose2}><a
                       href="/estado">Estado</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose2}><a
                       href="/municipios">Municipio</a></MenuItem></li>


                </Menu>
                <li onClick={handleClick2}>
                   <a href="#">Localizacion</a>
                </li>

                {/*-------------------------Reportes------------------------------------------------------*/}

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
                       href="/consulta1">Pacientes con mas de 1 contagio por estado</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta2">Contagios post-vacunacion</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta3">Eficacia de vacunas</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta4">Tratamientos por paciente</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta5">Paises con mas contagios por variante</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta6">Top 3 variantes</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta7">Cantidad de atendidos por CS</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta8">Sintomas y vacuna por variante</a></MenuItem></li>
                   <li><MenuItem onClick={handleClose}><a
                       href="/consulta9">Vacunaciones de poblacion especifica</a></MenuItem></li>


                </Menu>
                <li onClick={handleClick}>
                   <a href="#">Reporte</a>
                </li>
                {/*-------------------------------------------------------------------------------*/}

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