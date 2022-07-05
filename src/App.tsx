import {useEffect, useState} from "react"
import BarraSuperior from "./BarraSuperior";
import './App.css';
import BarraLateral from "./BarraLateral";
import FormularioPersona from "./componentes/FormularioPersona";
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


    useEffect(()=>{
        if((formularioPer==false) ){
            console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        }


    },[formularioPer])

  return (
    <>
        <div className="App">
            <BarraSuperior />
            <BarraLateral actiDesacHosp={handleFormularioHosp} actiDesacPer={handleFormularioPer}/>
            {formularioPer ? <FormularioPersona/>:null}
        </div>

    </>
  );
}

export default App;
