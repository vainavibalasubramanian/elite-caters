// import React,{useState} from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { Outlet, useNavigate } from 'react-router-dom';
// import logo from './logo.png';

// // This is the toolbar component for the application
// const ToolbarComponent = () => {

//   const navigate = useNavigate(); // useNavigate hook to programmatically navigate to different routes

//   // Function to navigate to the Custom Order page
//   const handleCustomOrder = () => {
//     navigate('/Customorder');
//   };

//   // Function to navigate to the Home page
//   const handleHome = () => {
//     navigate('/home');
//   };

//   // Function to navigate to the Login page
//   const handleLogin = () => {
//     navigate('/Login');
//   };

//   // Function to navigate to the Signup page
//   const handleSignup = () => {
//     navigate('/Signup');
//   };

//   // Function to navigate to the Package List page
//   const handlePackage = () => {
//     navigate('/PackageList');
//   };

//   // Function to navigate to the About Us page
//   const handleAbout = () => {
//     navigate('/AboutUs');
//   };

//   return (
//     <AppBar
//       position="static" // Make the AppBar static positioned
//       color="transparent" // Make the AppBar transparent
//       elevation={0} // Remove the default elevation
//       sx={{
//         borderBottom: '1px solid #ddd', // Add a bottom border
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Add a custom shadow
//         height:'10vh', // Set the height of the AppBar
//       }}
//     >
//       <Toolbar>
//         <img src={logo} style={{width:'145px',height:'60px',cursor:'pointer'}} onClick={handleHome} ></img>
//         {/* Application title */}
        

//         {/* Navigation links */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '43%' }}>
//           <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleHome}>
//             Home
//           </Typography>
//           <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handlePackage}>
//             Packages
//           </Typography>
//           <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleCustomOrder}>
//             Custom Order
//           </Typography>
//           <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleAbout}>
//             About us
//           </Typography>
//         </Box>

//         {/* Login and Sign Up buttons */}
//         <Button sx={{ mx: 2,color:'black' , fontSize:'16px'}} variant="h6" onClick={handleLogin}>
//           Login
//         </Button>
//         <Button sx={{ color:'black', fontSize:'16px' }} onClick={handleSignup}>
//           Sign Up
//         </Button>
//       </Toolbar>
//       <Outlet /> {/* Outlet to render nested routes */}
//     </AppBar>
//   );
// };

// export default ToolbarComponent;

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from './logo.png';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const ToolbarComponent = () => {
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
    navigate('/home'); // Redirect to home page after logout
  };

  const handleCustomOrder = () => {
    navigate('/Customorder');
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
    navigate('/PackageList');
  };

  const handleAbout = () => {
    navigate('/AboutUs');
  };

  const handleProfile = () => {
    navigate('/Profile');
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = localStorage.getItem('user') !== null;
  const userName = isLoggedIn ? user.userName : '';

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
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleHome}>
            Home
          </Typography>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handlePackage}>
            Packages
          </Typography>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleCustomOrder}>
            Custom Order
          </Typography>
          <Typography variant="h6" sx={{ mx: 2, cursor: 'pointer' }} onClick={handleAbout}>
            About us
          </Typography>
        </Box>

        {isLoggedIn ? (
          <div>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <Typography variant="h6" sx={{ mx: 2, color: 'black' }}>
              {userName}
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
            <Button sx={{ color: 'black', fontSize: '16px' }} onClick={handleSignup}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
      <Outlet />
    </AppBar>
  );
};

export default ToolbarComponent;
