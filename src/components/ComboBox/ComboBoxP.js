import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { palette } from '@mui/system';
import * as funciones from '../General/Functions';

export default function ComboBox(props) {
    const [datos, setDatos] = useState([]);
    const [value,setValue]=useState({
        birthdate: "",
        highrisk: '',
        id: "",
        lastname: "",
        name: "",
        sex: "",
    })

    const showData = async () => {
        let result = await funciones.getDates('personas',setDatos)
    };
    useEffect(()=>showData(),[])
    useEffect(()=> {
        if(value!=null){
            props.setData(value.id);
            console.log(value.id)
        }

    },[value])
    
    const lista=()=>{showData()}
    return (

        <Autocomplete

            sx={{background:'#fff'}}
            id="combo-box-demo"
            options={datos}
            getOptionLabel={(option) => option.id+' - '+option.name+' '+option.lastname}

            renderInput={(params) => <TextField sx={{ borderBottom: 4,borderColor:'#29B696'  }} id="filled-basic" label="Filled success" variant="filled" color="success" {...params} label="Cedula" />}
            value={value}
            onChange={(event,newValue)=>setValue(newValue)}
        />
    );
}

