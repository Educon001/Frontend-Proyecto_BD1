import React from 'react';
import '../../css/Banner.css';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../imagenes/Logo.jpeg';
import PrincipalImg from '../../imagenes/pexels-gustavo-fring-3983399.jpg';
import imagen1 from '../../imagenes/pexels-anna-shvets-3902881.jpg';
import imagen2 from '../../imagenes/Personal de salud.jpg';
import imagen3 from '../../imagenes/pexels-pixabay-263402.jpg';
import imagen4 from '../../imagenes/pexels-lukas-590016.jpg';
import imagenfacebook from '../../imagenes/facebook.png';
import imagenInstagram from '../../imagenes/instagram.png';
import imagenTwiter from '../../imagenes/twitter (1).png';
import imagenMedicamento from '../../imagenes/Medicamentos.jpg';
import imagenVirus from '../../imagenes/Virus.jpg';
import imagenVacuna from '../../imagenes/Vacuna1.jpg';
import imagenContagio from '../../imagenes/Contagio11.jpg';

import SearchRounded from '@material-ui/icons/SearchRounded';
import {
   makeStyles,
   Typography,
   Button,
   Card,
   CardContent,
   Grid,
   Box,
} from '@material-ui/core';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';

const Banner = () => {
   return (
       //font awesome

       <div className="body">
          <div className="container">
             <header className="showcase">
                <h2>Covid Shield</h2>
                <p>Estamos para protegerte</p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn">
                   Leer más>> <i className="fas fa-chevron-right"></i>
                </a>
             </header>
             <div className="news-cards">
                <div className="cards">
                   <img src={imagen1} alt="imagen 1"/>
                   <h3>Personas</h3>
                   <p>Lista de todas las personas registradas</p>
                   <a href="/personas">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
                <div className="cards">
                   <img src={imagen3} alt="imagen 1"/>
                   <h3>Centros de salud</h3>
                   <p>Lista de todos los centros de salud registrados</p>
                   <a href="/cs">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
                <div className="cards">
                   <img src={imagen2} alt="imagen 2"/>
                   <h3>Personal de Salud</h3>
                   <p>Lista de todos el personal de salud registrado</p>
                   <a href="/personalSalud">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
                <div className="cards">
                   <img src={imagen4} alt="imagen 3"/>
                   <h3>Reportes</h3>
                   <p>Reportes, cifras, porcentajes y eficacia</p>
                   <a href="/consulta2">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
             </div>
             <section class="cards-banner">
                <div class="content">
                   <h2>Tu salud es la de todos</h2>
                   <p>Vacunate en el centro de salud mas cercano </p>
                   <a href="/vacunados" class="btn">Leer mas>></a>
                </div>
             </section>
             <div className="news-cards">
                <div className="cards">
                   <img src={imagenMedicamento} alt="imagen medicamento"/>
                   <h3>Medicamentos</h3>
                   <p>Lista de todas los medicamentos registrados</p>
                   <a href="/medicamentos">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
                <div className="cards">
                   <img src={imagenVacuna} alt="imagen vacuna"/>
                   <h3>Vacunas</h3>
                   <p>Lista de todas las vacunas registradas</p>
                   <a href="/vacunas">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
                <div className="cards">
                   <img src={imagenVirus} alt="imagen Virus"/>
                   <h3>Virus/Variante</h3>
                   <p>Lista de todos los virus registrados</p>
                   <a href="#">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
                <div className="cards">
                   <img src={imagenContagio} alt="imagen Contagio"/>
                   <h3>Contagios</h3>
                   <p>Lista de todos los contagiados registrados</p>
                   <a href="#">Leer más>><i
                       className="fas fa-angle-double-right"></i></a>
                </div>
             </div>
             <section className="cards-banner2">
                <div className="content">
                   <h2> </h2>
                   <p>Que estas esperando? Vacunate coño e tu madre </p>
                   <a href="#/tratamientos" className="btn">Leer mas>></a>
                </div>
             </section>
             <section className="social">
                <p>Follow CovidShield</p>
                <div className="links">
                   <a href="https://www.facebook.com/camisasstyker1/"><img src={imagenfacebook} alt="logoF"
                                    className="facebook-icon"/>
                   </a>
                   <a href="https://www.instagram.com/camisas_styker/"><img src={imagenInstagram} alt="logoI"
                                    className="instagram-icon"/>
                   </a>
                   <a href="https://bit.ly/2XSTtid"><img src={imagenTwiter} alt="logoT"
                                    className="twiter-icon"/>
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
   );

};
export default Banner;



