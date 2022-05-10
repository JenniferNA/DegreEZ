import React, {Component} from 'react';
import homebg from '../graphics/HomeBG.png';
import { styled } from '@mui/material/styles';
import { Typography, Button, CssBaseline, Box, Grid, Paper, Avatar, Stack, Divider } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import processAudit from '../proccessAudit';
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
    formData.append('pdfFile', file);
    /*
    axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    fetch('/extract-text', {
      method: "post",
      body: formData
    }).then(response => {
      return response.text();
    }).then(extractedText => {
      console.log(extractedText.trim());
    });
    */

    let pdfText;
    axios.post('/extract-text', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }}).then(response => {
      pdfText = response.data;
      processAudit(pdfText);
    });
    
    
  }
  
  
  return (
    <div className="home">
      <Grid container>
        <Grid component="top">
          <Stack 
            class="homebg"
            justifyContent="center"
            style={{
            backgroundImage: `url(${homebg})`,
            backgroundSize: "cover",
            height: '50vh',
            width:'100vw'
            }}>
              <Typography 
                variant="h5" 
                color="white" 
                height='20%' 
                display= "flex" 
                justifyContent="center" 
                alignItems="flex-end"
                >
                Understanding your Degree
              </Typography>
              <Typography 
                variant="h2" 
                textAlign="center" 
                color="white" 
                height='30%' 
                display= "flex" 
                justifyContent="center" 
                alignItems="center"
                >
                  Made easier
              </Typography>
              <Typography 
                variant="h5" 
                textAlign="center" 
                color="white" 
                height='30%' 
                display= "flex" 
                justifyContent="center" 
                alignItems="flex-start">
                DegreEZ is an online tool designed to empower students to take control of their academic career
              </Typography>
          </Stack>
        </Grid>          
        <Stack 
          component="middle" 
          justifyContent="center" 
          alignItems="center" 
          height='25vh' 
          width='100vw'
          >
            <Typography variant="h5" height='10vh'> 
              To get started, just upload a PDF of your degree audit
            </Typography>
            <label htmlFor="contained-button-file">
            <Input 
              accept="application/pdf" 
              id="contained-button-file" 
              type="file" height='10vh' 
              onChange={uploadHandler}/>
              <Button push variant="contained" component="span">
                Upload Degree Audit
              </Button>
            </label>
        </Stack>
        <Grid container component="bottom" backgroundSize="cover" 
          sx={{ bgcolor: '#8db4ce', height: '25vh', width:'100vw'}}>
          <Stack 
            component="bottom" 
            justifyContent="center" 
            alignItems="center" 
            height='25vh' 
            width='100vw'>
              <Typography 
                variant="h5" 
                textAlign="center" 
                color="white" 
                display= "flex" 
                justifyContent="center" 
                alignItems="flex-start"
                >
                  Why you should use DegreEZ
                </Typography>
            <Stack 
              direction="row" 
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="space-between"
              alignItems="center"
              spacing={5}
              >
              <Stack alignItems="center">
                <Avatar  sx={{ m: 1, color: '#8db4ce', bgcolor: 'white' }}>
                  <SchoolOutlinedIcon />
                </Avatar>
                <Typography 
                  variant="body1" 
                  color="white" 
                  textAlign="center" 
                  display= "flex" 
                  justifyContent="center" 
                  alignItems="center" 
                  style={{ display: "inline-block", whiteSpace: "pre-line" }}
                  paragraph
                  >
                    Gives a clear path to students finishing their degree.
                  </Typography>
              </Stack>
              <Stack alignItems="center">
                <Avatar sx={{ m: 1, color: '#8db4ce', bgcolor: 'white' }}>
                  <TrendingUpIcon />
                </Avatar>
                <Typography 
                  variant="body1" 
                  color="white" 
                  textAlign="center" 
                  display= "flex" 
                  justifyContent="center" 
                  alignItems="center"
                  style={{ display: "inline-block", whiteSpace: "pre-line" }}
                  paragraph
                  >
                    Easy to read to lessen confusion.
                  </Typography>
              </Stack>
              <Stack alignItems="center">
                <Avatar  sx={{ m: 1, color: '#8db4ce', bgcolor: 'white' }}>
                  <EmojiEventsOutlinedIcon />
                </Avatar>
                <Typography 
                  variant="body1" 
                  color="white" 
                  textAlign="center" 
                  display= "flex" 
                  justifyContent="center" 
                  alignItems="center" 
                  paragraph
                  >
                    A helpful tool to reach students goals.
                  </Typography>
              </Stack>
            </Stack>
          </Stack>          
        </Grid>  
      </Grid>
    </div>
  );
}

export default Home;