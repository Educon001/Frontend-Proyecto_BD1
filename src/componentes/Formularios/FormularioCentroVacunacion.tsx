import React from 'react';

function FormularioCentroVacunacion() {
    return (
        <>
            <div className="main">


                <h3>REGISTER CENTRO DE SALUD</h3>
                <form id="reg-form">
                    <div>
                        <label htmlFor="Codigo">Codigo de Centro de Salud</label>
                        <input type="text" id="name" spellCheck="false" placeholder="Codigo del Centro de Salud"/>
                    </div>
                    <div>
                        <label htmlFor="Nombre">Nombre : </label>
                        <input type="text" id="Nombre" placeholder="Nombre"/>
                    </div>
                    <div >
                        <label htmlFor="Direccion">Direccion</label>
                        <input type="text" id="Direccion" placeholder="Direccion"/>

                    </div>
                    <div>
                        <label htmlFor="CIMedico">Medico Encargado</label>
                        <input type="text" id="CIPersonal" placeholder="Escriba la cedula de Identidad Personal de Salud"/>
                        <label htmlFor="FechaGerente"> Fecha Gerente</label>
                        <input type="date" name="FechaGerente" min="1900-01-01" max="2018-12-31"/>
                    </div>
                    <div>
                        <label htmlFor="CodigoMunicipio">Municipio</label>
                        <input type="text" id="CodigoMunicipio" placeholder="Codigo Municipio"/>
                    </div>
                    <div>
                        <label htmlFor="Dosis"> Dosis</label>
                        <input type="date" name="fechaNac" min="1900-01-01" max="2018-12-31"/>
                    </div>
                    <div>
                        <input type="radio" name="HospVacu" value="Hospitalizacion" checked/>Hospitalizacion
                         <input type="radio" name="HospVacu" value="Vacunacion" checked/>Vacunacion
                    </div>
                    <div>
                        <label></label>
                        <input type="submit" value="Create Account" id="create-account" className="button"/>
                    </div>

                </form>


            </div>

        </>
    );
}

export default FormularioCentroVacunacion;