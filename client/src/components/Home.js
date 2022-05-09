import React, {Component} from 'react';
import homebg from '../graphics/HomeBG.png';
import { styled } from '@mui/material/styles';
import { Typography, Button, CssBaseline, Box, Grid, Paper, Avatar, Stack } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import axios from 'axios';

const Input = styled('input')({
  display: 'none',
});

function Home() {

  //pdf upload
  const uploadHandler = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    
    axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
  
  return (
    <div className="home">
      <Grid container>
        <Grid component="top">
          <Box
            class="homebg"
            style={{
            backgroundImage: `url(${homebg})`,
            backgroundSize: "cover",
            height: '50vh',
            width:'100vw'
            }}>
              <Typography variant="h5" textAlign="center" color="white">Understanding your Degree</Typography>
              <Typography variant="h2" textAlign="center" color="white">Made easier</Typography>
              <Typography variant="h5" textAlign="center" color="white">
                DegreEZ is an online tool designed to empower students to take control of their academic career
              </Typography>
          </Box>
        </Grid>          
        <Stack component="middle" justifyContent="center" alignItems="center" height='25vh' width='100vw'>
            <Typography variant="h5" height='10vh'> 
              To get started, just upload a PDF of your degree audit
            </Typography>
            <label htmlFor="contained-button-file">
            <Input accept="application/pdf" id="contained-button-file" type="file" height='10vh' onChange={uploadHandler}/>
              <Button push variant="contained" component="span">
                Upload Degree Audit
              </Button>
            </label>
        </Stack>
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