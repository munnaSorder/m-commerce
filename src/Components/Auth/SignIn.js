import React, { useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useFormik } from 'formik';
import { googleLoginWithPopup, initialLoginMethod, logInWithFacebook, signInWithEmailAndPassword } from './loginManagement';
import { UserContext } from '../../App';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://munnaislam.netlify.app/">
        Munna Islam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialValues = {
  email: '',
  password: ''
}

const validate = values => {

  let errors = {}

  if(!values.email) {
    errors.email = 'Required'
  }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(!values.password) {
    errors.password = 'Required'
  }else if(values.password.length < 8) {
    errors.password = 'Password to short'
  }

  return errors;
}
export default function SignIn() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(UserContext);
  initialLoginMethod();

  const handleGoogleSignIn = () => {
    googleLoginWithPopup()
    .then(res => {
      setUser(res)
      history.replace(from);
    })
  }

  const handleFbLogin = () => {
    logInWithFacebook()
    .then(res => {
      if (res) {
        setUser(res);
        history.replace(from);
      }else{alert('email already exists or some problem')}
    })
  }

  const onSubmit = values => {
    signInWithEmailAndPassword(values.email, values.password)
    .then(res => {
      if(res){
        setUser(res);
        history.replace(from);
      }else{alert("Invalid email or password")}
    })
  }

  const classes = useStyles();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null
          }
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.password && formik.errors.password ? <div style={{color : 'red'}}>{formik.errors.password}</div> : null
          }
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className="d-flex mt-2">
        <FacebookLoginButton onClick={ handleFbLogin }>
          <span>Facebook</span>
        </FacebookLoginButton>
        <GoogleLoginButton onClick={ handleGoogleSignIn } >
          <span>Google</span>
        </GoogleLoginButton>
      </div>
      <Box mt={5} mb={5}>
        <Copyright />
      </Box>
    </Container>
  );
}