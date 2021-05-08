import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import{ Link, useHistory }from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import { createAccount } from './loginManagement';
import { CircularProgress } from '@material-ui/core';

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
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false)
  const classes = useStyles();
  let history = useHistory()

  const initialValues = {
    firstName:'',
    lastName:'',
    email: '',
    password: ''
  }

  const onSubmit = values => {
    setLoading(true)
    const fullName = values.firstName + ' ' + values.lastName;
    createAccount(fullName, values.email, values.password)
    .then((res) => {
      if(res === undefined) {
        setLoading(false)
        setSuccess('');
        alert('Account Created Success');
        history.push('/SignIn');

      }else{
        setLoading(false)
        setSuccess(res)
      }
    })
  }

  const validate = values => {
    let errors = {}

    if(!values.firstName) {
      errors.firstName = 'Required'
    }
    
    if(!values.lastName) {
      errors.lastName = 'Required'
    }else if(values.lastName.length < 2) {
      errors.lastName = 'Name must be at least 2 characters'
    }

    if(!values.email) {
      errors.email = 'Required'
    }else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if(!values.password) {
      errors.password = 'Required'
    }else if(values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters'
    }

    return errors;
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div>
          { 
            loading ? <CircularProgress /> : null
          }
        </div>
        {
          success.length > 0 && <h6 style={{color: 'red'}}>{success}</h6>
        }
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.touched.firstName && formik.errors.firstName ? <div style={{color : 'red'}}>{formik.errors.firstName}</div> : null
              }
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.touched.lastName && formik.errors.lastName ? <div style={{color : 'red'}}>{formik.errors.lastName}</div> : null
              }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {
                formik.touched.email && formik.errors.email ? <div style={{color : 'red'}}>{formik.errors.email}</div> : null
              }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5} mb={5}>
        <Copyright />
      </Box>
    </Container>
  );
}