import React from 'react';
import Layout from '@theme/Layout';
import Avatar from '../images/alittlefaun.png'
import { Alert, Box, Grid, Typography } from '@mui/material';

export default function About() {
  return (
    <Layout title="About">
      <Grid container spacing={1}>
        <Grid item  xs={6} md={8}>
          <Typography variant="h3">About me</Typography>
          <Typography variant="b1">
            I'm alittlefaun - you can call me faun (〃ω〃).  I edit text files during the week for a living and make plushies during the weekends.  I really enjoy the process of creating things and having that final product bring joy to their owners. 
            <br/><br/>
            Please don't hesitate to message me if you have a character that you would like me to bring to life!
          </Typography>
        </Grid>
        <Grid item  xs={6} md={4}>
          <Box component="img"
            src={Avatar}>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}