import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import {TextField} from 'formik-material-ui'
import {Field,Form,Formik} from 'formik'
import {LoginSchema} from '../../../../utils/ValidationSchema'
// import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  login: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '80%',
    },
    },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    // marginLeft:'10%'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <React.Fragment>
            <Formik initialValues={{
                email:'',
                password:''
            }}
            onSubmit={async(data,{setSubmitting})=>{
                setSubmitting(false);
                alert(JSON.stringify(data, null, 2));
            }}
            validationSchema={LoginSchema}
            >
                {({isSubmitting, submitForm})=>(
                    <div className={classes.root}>
                    <h1 className="login_header">Login | Registration - Ovacademia</h1>
                    <Container maxWidth="m">
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <h1 className="login_h1" >Login to your account</h1>
                                    <p className="login_p">If you are registered, enter your login and password and click «Login»</p>
                                    <Form className={classes.login}>
    
                                        <Field
                                            name="email"
                                            type="email"
                                            label="Email or username"
                                            variant="outlined" 
                                            id="outlined-error" 
                                            component={TextField}
                                        />
    
                                        <Field
                                            name="password"
                                            type="password"
                                            label="Enter Password"
                                            variant="outlined" 
                                            id="outlined-error" 
                                            component={TextField}
                                        />
                                        <div>
                                            <Button 
                                                startIcon={isSubmitting ? <CircularProgress size="1rem" /> :null}
                                                type="submit" 
                                                variant="contained" 
                                                color="primary" 
                                                className=" m-2" 
                                                disabled={isSubmitting}  
                                                onClick={submitForm}
                                            >
                                            Login
                                            </Button>
                                        </div>
                                    </Form>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                            <Paper className={classes.paper}>Not registered? 
                                <div>
                                    <Link to="/register">
                                    <Button 
                                        // startIcon={isSubmitting ? <CircularProgress size="1rem" /> :null}
                                        type="submit" 
                                        variant="contained" 
                                        color="primary" 
                                        className=" m-2" 
                                        disabled={isSubmitting}
                                    >
                                    Register
                                    </Button>
                                    </Link>
                                </div>
                            </Paper>
                            </Grid>
                        </Grid>
                </Container>
                </div>
                )}
            </Formik>
    </React.Fragment>
  );
}
