import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as funciones from '../General/Functions';

/*Denom_OMS VARCHAR(20),
    Linaje VARCHAR(20),
    Origin_Year SMALLINT ,
    Origin_Month SMALLINT ,
    Clasification VARCHAR(3) NOT NULL ,
    Code_Pais SMALLINT,*/

export default function ComboBox(props) {
    const [datos, setDatos] = useState([]);
    const [value,setValue]=useState({
        code:'',
        name :'',
        concentration: null,
        component: null,


    })

    const showData = async () => {
        let result = await funciones.getDatos('medicamento',setDatos)
    };
    useEffect(()=>showData(),[])
    useEffect(()=> {
        if(value!=null){
            props.setData(value.code);
            console.log('PROBANDO :')
            console.log(value.code)
        }

    },[value])

    const lista=()=>{showData()}



    return (

        <Autocomplete

            sx={{background:'#fff'}}
            id="combo-box-demo"
            options={datos}
            getOptionLabel={(option) => option.code+' - '+option.name}

            renderInput={(params) => <TextField sx={{ borderBottom: 4,borderColor:'#29B696' }} id="filled-basic" label="Filled success" variant="filled" color="success" {...params} label="Medicamento que lo compone" />}
            value={value}
            onChange={(event,newValue)=>setValue(newValue)}
        />
    );
}