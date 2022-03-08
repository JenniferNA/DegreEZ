import React,{Component} from 'react';
import Grid from '@mui/material/Grid';
import homebg from '../graphics/HomeBG.png';
import axios from 'axios';


function Home() {

   
  return (
    <div className="home">
      <Grid component="div" backgroundImage={homebg} backgroundSize="cover" sx={{ bgcolor: '#cfe8fc', height: '50vh', width:'100vw', flexGrow: 1 }}>
      </Grid>
      <Grid component="div" backgroundImage={homebg} backgroundSize="cover" sx={{ bgcolor: '#ffffff', height: '30vh', width:'100vw', flexGrow: 1 }}>
      </Grid>
      <Grid component="div" backgroundImage={homebg} backgroundSize="cover" sx={{ bgcolor: '#cfe8fc', height: '100vh', width:'100vw', flexGrow: 1 }}>
      </Grid>
    </div>
  );
}

export default Home;