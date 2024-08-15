import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../Toolbar/logo.png';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Admintoolbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    console.log("logout!");
    handleClose();
    navigate('/Login'); // Redirect to home page after logout
  };

  const handleCustomOrder = () => {
    navigate('/AdminCustom');
  };

  const handleHome = () => {
    navigate('/home');
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleSignup = () => {
    navigate('/Signup');
  };

  const handlePackage = () => {
    navigate('/AdminHome');
  };

  const handleAbout = () => {
    navigate('/AboutUs');
  };

  const handleProfile = () => {
    navigate('/Profile');
  };

  const admin = JSON.parse(localStorage.getItem('admin'));
  const isAdminLoggedIn = localStorage.getItem('admin') !== null;
  const adminName = isAdminLoggedIn ? admin.userName : '';

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: '1px solid #ddd',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        height: '10vh',
      }}
    >
      <Toolbar>
        <img
          src={logo}
          style={{ width: '145px', height: '60px', cursor: 'pointer' }}
          onClick={handleHome}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '43%' }}>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handlePackage}>
            Packages
          </Typography>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleCustomOrder}>
            Custom Order
          </Typography>
        </Box>

        {isAdminLoggedIn ? (
          <div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <Typography variant="h6" sx={{ mx: 2, color: 'black' }}>
              {adminName}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
             {/*} <MenuItem onClick={handleProfile}>Profile</MenuItem>*/}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            </Box>
          </div>
        ) : (
          <>
            <Button sx={{ mx: 2, color: 'black', fontSize: '16px' }} onClick={handleLogin}>
              Login
            </Button>
            
          </>
        )}
      </Toolbar>
      <Outlet />
    </AppBar>
  );
};

export default Admintoolbar;
