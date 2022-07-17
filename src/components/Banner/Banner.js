import React from 'react'
import "../../css/Banner.css"
import Logo from '../../imagenes/Logo.jpeg'
import SearchRounded from '@material-ui/icons/SearchRounded';
import { makeStyles, Typography, Button, Card, CardContent, Grid, Box } from "@material-ui/core"
import { Stack } from '@mui/material'
import background_image from "../../imagenes/Banner.jpg"
import { Link } from "react-router-dom"
import { useState, useContext } from 'react'

const Banner = () => {
  return (
      //font awesome

      <div className="Body">
       <div className="All-Banner">
        <nav>
          <img src={Logo} alt="logo" className="barra-navegacion"/>
          <ul className="menu-nav">
            <li>
              <a href="#">Persona</a>
            </li>
            <li>
              <a href="#">Centros de salud</a>
            </li>
            <li>
              <a href="#">Vacunas</a>
            </li>
            <li>
              <a href="#">Vacunacion</a>
            </li>
            <li>
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
        <div className="titulo">


        </div>
        </div>
      </div>

  )

}
export default Banner



