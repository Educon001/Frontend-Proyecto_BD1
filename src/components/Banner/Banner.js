import React from 'react'
import "../../css/Banner.css"
import Logo from '../../imagenes/Logo.jpeg'
import PrincipalImg from '../../imagenes/pexels-gustavo-fring-3983399.jpg'
import imagen1 from '../../imagenes/pexels-anna-shvets-3902881.jpg'
import imagen2 from '../../imagenes/Personal de salud.jpg'
import imagen3 from '../../imagenes/pexels-pixabay-263402.jpg'
import imagen4 from '../../imagenes/pexels-lukas-590016.jpg'
import imagenfacebook from '../../imagenes/facebook.png'
import imagenInstagram from '../../imagenes/instagram.png'
import imagenTwiter from '../../imagenes/twitter (1).png'


import SearchRounded from '@material-ui/icons/SearchRounded';
import { makeStyles, Typography, Button, Card, CardContent, Grid, Box } from "@material-ui/core"
import { Stack } from '@mui/material'
import { Link } from "react-router-dom"
import { useState, useContext } from 'react'

const Banner = () => {
  return (
      //font awesome

      <div className="body">
       <div className="container">

         <div style={{ borderTop: "2px solid #5ce7d4 ", marginLeft: 20, marginRight: 20 }} className="hr"></div>
         <header className="showcase">
           <h2>Covi Shield</h2>
           <p>Es la mejor organizacion de todo el mundo</p>
           <a href="#" className="btn">
             Leer más>> <i className="fas fa-chevron-right"></i>
           </a>
         </header>
         <div className="news-cards">
           <div>
             <img src={imagen1} alt="imagen 1"/>
             <h3>Personas</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore fugit esse corporis nesciunt minima
               doloremque modi mollitia rerum</p>
             <a href="#">Leer más>><i className="fas fa-angle-double-right"></i></a>
           </div>
           <div>
             <img src={imagen2} alt="imagen 1"/>
             <h3>Personal de Salud</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore fugit esse corporis nesciunt minima
               doloremque modi mollitia rerum</p>
             <a href="#">Leer más>><i className="fas fa-angle-double-right"></i></a>
           </div>
           <div>
             <img src={imagen3} alt="imagen 2"/>
             <h3>Centros de salud</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore fugit esse corporis nesciunt minima
               doloremque modi mollitia rerum</p>
             <a href="#">Leer más>><i className="fas fa-angle-double-right"></i></a>
           </div>
           <div>
             <img src={imagen4} alt="imagen 3"/>
             <h3>Reportes</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore fugit esse corporis nesciunt minima
               doloremque modi mollitia rerum</p>
             <a href="#">Leer más>><i className="fas fa-angle-double-right"></i></a>
           </div>
         </div>
         <section class="cards-banner">
           <div class="content">
             <h2>¿Ya mencioné que tu mamá fue mia?</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore fugit esse corporis nesciunt minima
               doloremque modi mollitia rerum</p>
             <a href="#" class="btn">Leer mas>></a>
           </div>

         </section>
         <section className="social">
           <p>Follow CovidShield</p>
           <div className="links">
             <a href="#"><img src={imagenfacebook} alt="logoF" className="facebook-icon"/>
             </a>
             <a href="#"><img src={imagenInstagram} alt="logoI" className="instagram-icon"/>
             </a>
             <a href="#"><img src={imagenTwiter} alt="logoT" className="twiter-icon"/>
             </a>



           </div>
         </section>

        </div>
        <div className="footer-links">
          <div className="footer-container">
            <ul>
              <li>
                <a href="#">
                  <h3>
                    Covid Shield
                  </h3>
                </a>
              </li>
              <li>
                <a href="#">Salud</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Vaccines</a>
              </li>
              <li>
                <a href="#">Centro de salud</a>
              </li>
              <li>
                <a href="#">Personal de salud</a>
              </li>
              <li>
                <a href="#">OMS</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <h3>
                    Covid Shield
                  </h3>
                </a>
              </li>
              <li>
                <a href="#">Salud</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Vaccines</a>
              </li>
              <li>
                <a href="#">Centro de salud</a>
              </li>
              <li>
                <a href="#">Personal de salud</a>
              </li>
              <li>
                <a href="#">OMS</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <h3>
                    Covid Shield
                  </h3>
                </a>
              </li>
              <li>
                <a href="#">Salud</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Vaccines</a>
              </li>
              <li>
                <a href="#">Centro de salud</a>
              </li>
              <li>
                <a href="#">Personal de salud</a>
              </li>
              <li>
                <a href="#">OMS</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <h3>
                    Covid Shield
                  </h3>
                </a>
              </li>
              <li>
                <a href="#">Salud</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Vaccines</a>
              </li>
              <li>
                <a href="#">Centro de salud</a>
              </li>
              <li>
                <a href="#">Personal de salud</a>
              </li>
              <li>
                <a href="#">OMS</a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="footer">
          <h3>Covid Shield© 2022</h3>

        </footer>

      </div>
  )

}
export default Banner



