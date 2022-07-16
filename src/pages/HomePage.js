import React from 'react'
import { Typography, Grid, Card, CardContent, Box, CardHeader } from '@material-ui/core'
import Banner from '../components/Banner/Banner'



const HomePage = () => {


  return (
    <>
      <>
        <div>
          <Banner />
        </div>
        <br />
        <Grid container justifyContent="center">
          <Box
            sx={{
              width: 400,
              height: 300,
            }}
          >
            <Card>
              <CardContent>
                <Typography variant="h4" align="center">
                  ¿Que es Covid Shield?
                </Typography>
                <br />
                <Typography variant="body1" align="justify">
                 ESCRIBE AQUI
                  <br />
                  <br /> TAMBIEN AQUI
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h3" align="center">
        Feedback
      </Typography>
      <br />

    </>
  );
}

export default HomePage
