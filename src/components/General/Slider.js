import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PercentIcon from '@mui/icons-material/Percent';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider(props) {
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.setEficacia(value)
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <Box sx={{ width:'100%', height:'20%' }}>
            <Typography sx={{color:'#5ce7d4'}}id="input-slider" gutterBottom>
                Eficacia
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <PercentIcon />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        step={0.01}
                        aria-labelledby="input-slider"
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        sx={{ height:'100%', background:'#152540', borderRadius: '8px'}}
                    />
                </Grid>
                <Grid  item>
                    <Input
                        sx={{ height:'100%', width:'100%' , color:'#ffffff'}}
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 0.01,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}