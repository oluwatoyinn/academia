import React, { Component } from 'react'
import Sliding from './Sliding'
import AboutUS from './AboutUs'
import GetTutor from './GetTutor'
import Experts from './TestFolder/Experts'
import NavBar from '../components/NavBar'
import Footer from './Footer'
// import Subject from '../components/Subject'
// import FormBin from './FormBin' 
   
export class HomePage extends Component {
    render() {
        return (
            <>
            <NavBar />
            {/* <Subject /> */}
               <Sliding /> 
                {/* <AboutUS />            */}
                <GetTutor />       
                <Experts />        
                <Footer />          
            </>
        )
    }
}

export default HomePage


