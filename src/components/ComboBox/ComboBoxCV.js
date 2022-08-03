import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { palette } from '@mui/system';
import * as funciones from '../General/Functions';

export default function ComboBox(props) {
    const [datos, setDatos] = useState([]);
    const [value,setValue]=useState({
        address: null,
        code: '',
        code_municipio: null,
        id_medico: null,
        manager_date: null,
        name: '',
    })

    const showData = async () => {
        let result = await funciones.getDatos('cv',setDatos)
    };
    useEffect(()=>showData(),[])
    useEffect(()=> {
        if(value!=null){
            props.setData(value.code);
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

            renderInput={(params) => <TextField sx={{ borderBottom: 4,borderColor:'#29B696' }} id="filled-basic" label="Filled success" variant="filled" color="success" {...params} label="Centro de Vacunacion" />}
            value={value}
            onChange={(event,newValue)=>setValue(newValue)}
        />
    );
}


