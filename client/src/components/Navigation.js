import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../graphics/DegreEZLogo.png';




function Navigation() {
  return (
    <div className="navigation">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky"color="transparent">
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <a href="/Home">
              <img src={logo} alt="Logo" height="50" />
            </a>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>


    </div>
  );
}

export default Navigation;