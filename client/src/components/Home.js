import React, {Component} from 'react';
import homebg from '../graphics/HomeBG.png';
import axios from 'axios';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Typography, Button, CssBaseline, Box, Grid, Paper, Avatar } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Input = styled('input')({
  display: 'none',
});

function Home() {
  return (
    <div className="home">
      <Grid container component="top">
        <Grid>
          <Box
            class="homebg"
            style={{
            backgroundImage: `url(${homebg})`,
            backgroundSize: "cover",
            height: '50vh',
            width:'100vw'
            }}>
              <Typography variant="h5" align="center" color="white">Understanding your Degree</Typography>
              <Typography variant="h2" align="center" color="white">Made easier</Typography>
              <Typography variant="h5" align="center" color="white">
                DegreEZ is an online tool designed to empower students to take control of their academic career
              </Typography>
          </Box>
        </Grid>          
        <Grid container component="middle" justify="center" alignItems="center" height='25vh'>
          <Grid item>
            <Typography variant="h5" align='center'> 
              To get started, just upload a PDF of your degree audit
            </Typography>
          </Grid>           
                   
          <Grid item component="upload" justify="center"  alignItems="center">           
            <label htmlFor="contained-button-file">
            <Input accept=".pdf/*" id="contained-button-file" multiple type="file" />
              <Button variant="contained" component="span">
                Upload Degree Audit
              </Button>
            </label>            
          </Grid>
                   
        </Grid>
        <Grid container component="bottom" backgroundSize="cover" sx={{ bgcolor: '#8db4ce', height: '25vh', width:'100vw'}}>
          <Typography variant="h5" align="center" color="white">Why use DegreEZ</Typography>
          <Avatar sx={{ m: 1, color: '#8db4ce', bgcolor: 'white' }}>
            <SchoolOutlinedIcon />
          </Avatar>
          <Avatar sx={{ m: 1, color: '#8db4ce', bgcolor: 'white' }}>
            <EmojiEventsOutlinedIcon />
          </Avatar> 
        </Grid>  
      </Grid>
    </div>
  );
}

export default Home;