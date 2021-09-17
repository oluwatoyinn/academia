import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
// import HomePage from './components/HomePage'
// import RegisterTutor from './components/RegisterTutor'
import Pagewrapper from './components/website/PageWrapper';
import Home from './components/website/Pages/Home';
// import About from './components/website/Pages/About';
// import AdminWrapper from './components/website/AdminWrapper';
// import Login from './components/website/Registration/Login';
import Login from './components/website/Pages/admin/Login'
import Register from './components/website/Pages/admin/Register'
import AppBar from './components/website/Pages/admin/AppBar'
import TestingReg from './components/website/Pages/admin/TestingReg'





function App() {
  return (
    <React.Fragment>
   
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/registertutor" component={RegisterTutor} />
      </Switch> */}

      {/* <Route path="/admin" render={props=>(<Login/>)}/> */}

      <Route 
        exact={true} 
        path="/" 
        render={props=>(
        <Pagewrapper>
          <Home {...props} />
        </Pagewrapper>)} 
      />

      <Route 
        exact={true} 
        path="/login" 
        render={props=>(
        <AppBar>
          <Login {...props} />
        </AppBar>)} 
      />

      <Route 
        exact={true} 
        path="/register" 
        render={props=>(
        <AppBar>
          <Register {...props} />
        </AppBar>)} 
      />

      <Route 
        exact={true} 
        path="/reg" 
        render={props=>(
        <AppBar>
          <TestingReg {...props} />
        </AppBar>)} 
      />
     
    </React.Fragment>
  );
}

export default App;
