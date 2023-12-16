import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const [values, setValues] = React.useState({
        email: '',
        password: '' 
    })
    const navigate = useNavigate();
    const [errors, setErrors] = React.useState({});

    const inputHandler = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:4000/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }else if(res.data === "password is incorrect"){
                    alert("password is incorrect");
                }else if(res.data === "Email Not Registered"){
                  alert("Email Not Registered")
                }else{
                  alert("Something went wrong!");
                }
            })
        }

        // const data = new FormData(event.currentTarget);
        // console.log({
        // email: data.get('email'),
        // password: data.get('password'),
        // });
    };

    React.useEffect(() => {
        // Check if there are errors and update the UI accordingly
        if (errors && errors.name) {
          // Render the error message for the "name" field
          console.log(errors.name);
        }
      }, [errors]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={inputHandler}
              autoFocus
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={inputHandler}
              autoComplete="current-password"
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}