import React from 'react';
import './App.css';
// import NavBar from './components/NavBar'
// import Subject from './components/Subject'
import {Route,Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
// import Footer from './components/Footer';
// import Register from './components/Register'
import RegisterTutor from './components/RegisterTutor'
// import FormikTest from './components/FormikTest'

function App() {
  return (
    <>
   
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/registertutor" component={RegisterTutor} />
      </Switch>
     
    </>
  );
}

export default App;
