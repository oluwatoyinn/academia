import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';

import {Formik,Form,Field} from 'formik';
import {TextField} from 'formik-material-ui';
import {RegisterSchema} from '../../../../utils/ValidationSchema'

// import bgImage from '../../assets/about.jpg'
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
    //   padding:theme.spacing(2),
      width: theme.spacing(3),
        width:'100%',
        height:'70ch',
        padding:theme.spacing(1)
    },
  },
  register: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '90%',
        marginLeft:'40px'
    },
  },
  paper:{
      width:'50xh',
      marginTop:'3px'
  },
  profile:{
    //   alignContent:'center',
      width:'auto',
      justify:'center',
      marginLeft:'40px'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
      <React.Fragment>
          <Formik initialValues={{
              name:'',
              lastName:'',
              email:'',
              password:''
          }}

          onSubmit={(data, setSubmitting)=>{
                setSubmitting(true);
                alert(JSON.stringify(data, null, 2));
          }}
          validationSchema={RegisterSchema}
          >
              {({isSubmitting, submitForm})=>(
                <div className={classes.root}>
                    <Paper container elevation={4}>
                    <h1></h1>
                        <Container maxWidth="md">
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <h1 className="profile_top">Earn additionally </h1>
                                    <h1 className="profile"> money per month with Ovacademia.</h1>
                                    <h1 className="profile">Create your tutor profile!</h1>
                                    <div className="form_input">
                                        <Form className={classes.register} >
                                            <Field
                                            name="name"
                                            variant="outlined"
                                            type="text"
                                            label="Enter your name"
                                            component={TextField}
                                            />

                                            <Field
                                            name="lastName"
                                            variant="outlined"
                                            type="text"
                                            label="Enter your last name"
                                            component={TextField}
                                            />

                                            <Field
                                            name="email"
                                            variant="outlined"
                                            type="email"
                                            label="Enter your valid email"
                                            component={TextField}
                                            />

                                            <Field
                                            name="password"
                                            variant="outlined"
                                            type="password"
                                            label="Enter your password"
                                            component={TextField}
                                            />

                                            <div className={classes.profile}>
                                                <Button 
                                                startIcon={isSubmitting ? <CircularProgress size="1rem" /> :null}
                                                type="submit" 
                                                variant="contained" 
                                                color="primary" 
                                                className=" m-2" 
                                                disabled={isSubmitting}  
                                                onClick={submitForm}
                                            >
                                            Create a profile
                                            </Button>
                                            </div>
                                            

                                        </Form>
                                    </div>
                                </Paper>

                            </Grid>
                        </Container>
                    </Paper>
                </div>
              )}
          </Formik>         
      </React.Fragment>
   
  );
}
