import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import RegisterTutor from './components/RegisterTutor'
import Pagewrapper from './components/website/PageWrapper';
import Home from './components/website/Pages/Home';
import About from './components/website/Pages/About';


function App() {
  return (
    <React.Fragment>
   
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/registertutor" component={RegisterTutor} />
      </Switch> */}
      <Pagewrapper>
        <Route exact path="/" component={Home} />
      </Pagewrapper>
      <Route path="/about" component={About} />
      
     
    </React.Fragment>
  );
}

export default App;
