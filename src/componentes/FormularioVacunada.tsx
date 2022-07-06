import React from 'react';

const FormularioVacunada = () => {
    return (
        <>
            <div className="main">


                <h3>REGISTER VACUNACION</h3>
                <form id="reg-form">
                    <div>
                        <label htmlFor="CIPACIENTE">CI Paciente</label>
                        <input type="text" id="name" spellCheck="false" placeholder="Escriba la cedula de Identidad del que se vacunara"/>
                    </div>
                    <div>
                        <label htmlFor="CodVacuna">Codigo Vacuna</label>
                        <input type="text" id="CodVacuna" placeholder="Codigo de vacuna"/>
                    </div>
                    <div >
                        <label htmlFor="CodCentroDeVacunacion">Centro de Vacunacion</label>
                        <input type="text" id="CodCentroDeVacunacion" placeholder="Centro de vacunacion"/>

                    </div>
                    <div>
                        <label htmlFor="CIPersonal">Personal de Salud CI</label>
                        <input type="text" id="CIPersonal" placeholder="Escriba la cedula de Identidad Personal de Salud"/>
                    </div>
                    <div>
                        <label htmlFor="FechaVacunacion">Fecha de Vacunacion</label>
                        <input type="date" name="fechaNac" min="1900-01-01" max="2018-12-31"/>
                    </div>
                    <div>
                        <label htmlFor="Dosis"> Dosis</label>
                        <input type="text" id="Dosis" placeholder="Dosis"/>
                    </div>

                    <div>
                        <label></label>
                        <input type="submit" value="Create Account" id="create-account" className="button"/>
                    </div>
                </form>


            </div>

        </>
    );
};

export default FormularioVacunada;