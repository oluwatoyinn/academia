import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Sliding from './components/Sliding'
import Products from './components/Products';
import Info from './components/Info';
import Program from './components/Program'
import Experts from './components/Experts'

function App() {
  return (
    <>
      <NavBar />
      <Sliding />
      <Products />
      <Info />
      {/* <Program /> */}
      <Experts />
    </>
  );
}

export default App;
