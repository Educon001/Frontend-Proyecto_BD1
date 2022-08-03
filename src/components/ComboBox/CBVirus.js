import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { palette } from '@mui/system';
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
        denom_oms:'',
        linaje: null,
        origin_year: null,
        origin_month:null,
        clasification:'',
        Code_pais:null,

    })

    const showData = async () => {
        let result = await funciones.getDates('variante',setDatos)
    };
    useEffect(()=>showData(),[])
    useEffect(()=> {
        if(value!=null){
            props.setData(value.denom_oms);
            console.log(value.denom_oms)
        }

    },[value])

    const lista=()=>{showData()}
    
    return (

        <Autocomplete

            sx={{background:'#fff'}}
            id="combo-box-demo"
            options={datos}
            getOptionLabel={(option) => option.denom_oms+' - '+option.clasification}

            renderInput={(params) => <TextField sx={{ borderBottom: 4,borderColor:'#29B696' }} id="filled-basic" label="Filled success" variant="filled" color="success" {...params} label="Estado al que pertenece" />}
            value={value}
            onChange={(event,newValue)=>setValue(newValue)}
        />
    );
}