import {useEffect, useState} from "react"
import BarraSuperior from "./BarraSuperior";
import './App.css';
import BarraLateral from "./BarraLateral";
import FormularioPersona from "./componentes/Formularios/FormularioPersona";
import FormularioVacunada from "./componentes/Formularios/FormularioVacunada"
import FormularioCentroVacunacion from "./componentes/Formularios/FormularioCentroVacunacion";
import TablaPersonas from "./componentes/Tablas/TablaPersonas";
import TablaCentroSalud from "./componentes/Tablas/TablaCentro_Salud";
import TablaVacunada from "./componentes/Tablas/TablaVacunada";
import TablaVacuna from './componentes/Tablas/TablaVacunas';

function App() {

    const [barraLateral,setBarraLateral]=useState(false)
    const handleLateralBar =  function (){
        setBarraLateral(!barraLateral)

    }
    const [formularioPer,setFormularioPer]=useState(false)
    const handleFormularioPer = function (){
        if(formularioPer==false){
            setFormularioPer(true)
            setFormularioHosp(false)

        }

    }

    const [formularioHosp,setFormularioHosp]=useState(false)
    const handleFormularioHosp =  function (){
        if(formularioHosp==false){
            setFormularioHosp(true)
            setFormularioPer(false)
        }

    }

    //
    // useEffect(()=>{
    //     if((formularioPer==false) ){
    //         console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    //
    //     }
    //
    //
    // },[formularioPer])


    const [actiHosp,setActiHosp]=useState(false)

    useEffect(()=>{
        if(formularioHosp==false){
        //     setFormularioHosp(true)
        //     setFormularioPer(false)
            setActiHosp(false)
            console.log('ESTA EN EL FORMULARIO DE HOSPITAL')
        }


    },[actiHosp]);


    const [actiPer,setActiPer]=useState(false)
    useEffect(()=>{
        if(formularioPer==false){
            setFormularioPer(true)
            setFormularioHosp(false)
            setActiPer(false)
            console.log('ESTA EN EL FORMULARIO DE PERSONA')

        }



    },[actiPer]);

    return (
    <>
        <div className="App">
            <BarraSuperior />
            <BarraLateral actiDesacPer={()=>setActiPer(true)} actiDesacHosp={()=>setActiHosp(true)}/>
            <FormularioPersona/>
            {/*<TablaVacunada/>*/}
            {/*<FormularioVacunada/>*/}
            {/*<FormularioCentroVacunacion/>*/}
            {/*<div className='contenedor'>*/}
            {/*<TablaPersonas/>*/}
            {/*<TablaCentroSalud/>*/}
            {/*<TablaVacuna/>*/}
            {/*</div>*/}
            {/*<form action="../../post" method="post"*/}
            {/*      className="form">*/}
            {/*    <button type="submit">Connected?</button>*/}
            {/*</form>*/}


        </div>

    </>
  );
}

export default App;
