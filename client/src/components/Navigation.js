import React from "react";
import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../graphics/DegreEZLogo.png';
import { MenuList, Menu, MenuItem, Button, Box, Typography, AppBar, Toolbar } from "@mui/material";
import { useState } from "react";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navigation">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="transparent">
          <Toolbar>
            <Box component="div" sx={{ flexGrow: 1 }}>
              <a href="/">
                <img src={logo} alt="Logo" height="50" />
              </a>
            </Box>
            <IconButton
              onClick={handleClick}
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
      <Menu  
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        > 
        
          <MenuItem 
            href="/StudentPlan"
            target="_blank"
            component="a" 
            onClick={handleClose}>
            Student Plan
          </MenuItem>
        
          <MenuItem 
            href="/About"          
            target="_blank"
            component="a" 
            onClick={handleClose} 
            >
            About
          </MenuItem>      
      </Menu>
              

    </div>
  );
}

export default Navigation;