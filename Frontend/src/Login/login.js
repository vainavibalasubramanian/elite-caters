// import React, { useState, useEffect } from 'react';
// //import './login.css';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate, Link } from 'react-router-dom';
// import img from './loginimg.jpg';
// import axios from 'axios';
// const defaultTheme = createTheme();


// function Login() {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success,setSuccess]=useState(false);
  
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     try {
//       const response = await axios.get('http://localhost:8080/users');
//       const user = response.data.find((user) => user.userName === userName);
//       if (user) {
//         if (user.password === password) {
//           navigate('/home'); // Redirect to dashboard on successful login
//           setError(false)
//         } 
//         else {
//           setError('Invalid username or password');
//           setSuccess(false);
//         }
//       } else {
//         setSuccess(false);
//         setError('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
     
//     }

    
//   };

//   const handleAdmin = () =>{
//     navigate('/Admin');
//   }

  

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main">
//         <CssBaseline />
        
//         <Grid item  sm={1} md={5}  component={Paper} elevation={3} square sx={{marginLeft :'30%' , marginTop:'5%'}} >
//         <Box
//         sx={{ boxShadow : '0px 2px 5px 0px rgba(0, 0, 0, 0.4)', alignItems:'center' ,  display: 'flex',
//           flexDirection: 'column',padding:'20px'
// }}  
//       >
//           <Typography component="h1" variant="h5" sx={{ mt: 1, fontSize: '30px', color: 'black' }}>
//               Sign in
//             </Typography>
//           {/*<Link style={{paddingLeft:'45%' , fontSize:'20px' , color:'black'}} to='/Admin'>Admin?</Link> */}
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, flexDirection: 'column' }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}  
//                 autoComplete="username"
                
//                 sx={{ backgroundColor: "white", borderRadius: '5px' }}
//                 error={error.username}
//                 helperText={error.username ? 'Username is required' : ''}
//               />
//               <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Password"
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}

//               autoComplete="current-password"
//               sx={{ backgroundColor: "white", borderRadius: '5px' }}
//               error={error.password}
//               helperText={error.password ? 'Password is required' : ''}
//               style={{fontSize :'10px'}}
//             />
//             {error && <p className="error">{error}</p>}

//             <div style={{ paddingTop: '20px' }}>
//               <Link href="#" variant="body2" style={{ color: "black" }}>
//                 Forgot password?
//               </Link>
//             </div>
//             <Button
//               type="submit"
//               fullWidth
//               sx={{
//                 mt: 3, mb: 2, backgroundColor: 'black', color: 'white', '&:hover': {
//                   backgroundColor: 'black',
//                 },
//               }}
//             >
//             Sign In
//             </Button>
//             <Grid container sx={{paddingBottom:'30px'}}>
//               <Grid item>
//                 <Link to='/Signup' variant="body2" style={{ color: "black"}}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   </ThemeProvider>



//   );
// }

// export default Login;

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const defaultTheme = createTheme();

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/users');
      const user = response.data.find((user) => user.userName === userName);
      if (user) {
        if (user.password === password) {
          // Store the user in localStorage
          localStorage.setItem('user', JSON.stringify(user));
          console.log("success!")
         
          navigate('/home'); // Redirect to home page on successful login
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          sm={1}
          md={5}
          component={Paper}
          elevation={3}
          square
          sx={{ marginLeft: '30%', marginTop: '5%' }}
        >
          <Box
            sx={{
              boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.4)',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mt: 1, fontSize: '30px', color: 'black' }}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, flexDirection: 'column' }}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="username"
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
            />
            <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            sx={{ backgroundColor: 'white', borderRadius: '5px' }}
            />
            {error && <p className="error">{error}</p>}
            
            <div style={{ paddingTop: '20px' }}>
            <Link href="#" variant="body2" style={{ color: 'black' }}>
            Forgot password?
            </Link>
            </div>
            <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'black',
                  },
                }}
                >
                Sign In
                </Button>
                <Grid container sx={{ paddingBottom: '30px' }}>
                <Grid item>
                <Link to='/Signup' variant="body2" style={{ color: 'black' }}>
                {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
                </Grid>
                <Link style={{ fontSize:'17px' , color:'black'}} to='/Admin'>Are you Admin?</Link>
                </Box>
                </Box>
                </Grid>
                </Grid>
                </ThemeProvider>
              );
}

export default Login;
