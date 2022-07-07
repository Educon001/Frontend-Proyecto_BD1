import React from 'react';

const FormularioPersona = () => {
    return (
        <>
            <div className="main">


                        <h3>REGISTER PERSON</h3>
                        <form id="reg-form">
                            <div>
                                <label htmlFor="Name">Nombre</label>
                                <input type="text" id="name" spellCheck="false" placeholder="Escriba su nombre"/>
                            </div>
                            <div>
                                <label htmlFor="Last Name">Apellido</label>
                                <input type="text" id="Last Name" spellCheck="false"
                                       placeholder="Escriba su Apellido"/>
                            </div>
                            <div >
                                <h4>Sexo</h4>
                                <input type="radio" name="gender" value="F" checked/>Femenino
                                <input type="radio" name="gender" value="M" checked/>Masculino
                                <input type="radio" name="gender" value="N/A" checked/>N/A

                            </div>
                            <div>
                                <h4>Fecha de Nacimiento</h4>
                                <input type="date" name="fechaNac" min="1900-01-01" max="2018-12-31"/>
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

export default FormularioPersona;