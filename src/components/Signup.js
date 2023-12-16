// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import Validation from './signupValidation';
// import axios from 'axios';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {

//     const [values, setValues] = React.useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     })
//     const navigate = useNavigate();
//     const [errors, setErrors] = React.useState();

//     // const inputHandler = (event) => {
//     //     setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
//     // }

//     const inputHandler = (event) => {
//       console.log("Event:", event);
//       setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // setErrors(Validation(values));
//         const currentErrors = Validation(values);
//         // const currentErrors = errors || {};
//         setErrors(currentErrors);

//         if(currentErrors.name === "" && currentErrors.email === "" && currentErrors.password === ""){
//             axios.post('http://localhost:4000/signup', values)
//             .then((res) => {
//                 navigate('/');
//             })
//             .catch((err) => console.log(err));
//         }

//         // const data = new FormData(event.currentTarget);
//         // console.log({
//         //   email: data.get('email'),
//         //   password: data.get('password'),
//         // });
//     };




//     React.useEffect(() => {
//         if (errors && errors.name) {
//           console.log(errors.name);
//         }
//       }, [errors]);

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="name"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Name"
//                   onChange={inputHandler}
//                   autoFocus
//                 />
//                 {errors && errors.name && <span className='text-danger'>{errors.name}</span>}
//               </Grid>
//               {/* <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid> */}
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   onChange={inputHandler}
//                 />
//                 {errors.email && <span className='text-danger'>{errors.email}</span>}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   onChange={inputHandler}
//                 />
//                 {errors.password && <span className='text-danger'>{errors.password}</span>}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="confirmPassword"
//                   label="ConfirmPassword"
//                   type="password"
//                   id="confirmPassword"
//                   autoComplete="new-password"
//                   onChange={inputHandler}
//                 />
//                 {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}
//               </Grid>
//               {/* <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid> */}
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }











// ======================================================================================

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Validation from './signupValidation';
import axios from 'axios';

function SignUp() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({});

  const inputHandler = (event) => {
    const { name, value } = event.target || {};
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentErrors = Validation(values);
    setErrors(currentErrors);

    if (
      currentErrors.name === '' &&
      currentErrors.email === '' &&
      currentErrors.password === ''
    ) {
      axios
        .post('http://localhost:4000/signup', values)
        .then((res) => {
          if(res.data === "User registered successfully"){
            navigate('/');
          }else if(res.data === "Email already exists"){
            alert("Email already exists");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    if (errors && errors.name) {
      console.log(errors.name);
    }
  }, [errors]);

  const defaultTheme = createTheme();

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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={inputHandler}
                  autoFocus
                />
                {errors.name && <span className="text-danger">{errors.name}</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={inputHandler}
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={inputHandler}
                />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="ConfirmPassword"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={inputHandler}
                />
                {errors.confirmPassword && (
                  <span className="text-danger">{errors.confirmPassword}</span>
                )}
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
