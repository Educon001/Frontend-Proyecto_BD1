import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { palette } from '@mui/system';
import * as funciones from '../General/Functions';

export default function ComboBoxPS(props) {
    const [datos, setDatos] = useState([]);
    const [value,setValue]=useState({
        birthdate: "",
        email: "",
        highrisk: "",
        id: "",
        lastname: "",
        name: "",
        sex: "",
        type: "",
    })

    const showData = async () => {
        let result = await funciones.getDates('personas/ps',setDatos)
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

            renderInput={(params) => <TextField sx={{ borderBottom: 4,borderColor:'#29B696' }} id="filled-basic" label="Filled success"  color="success" {...params} label="Cedula del personal de salud" />}
            value={value}
            onChange={(event,newValue)=>setValue(newValue)}
        />
    );
}

