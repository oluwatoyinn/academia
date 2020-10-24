import React, { Component } from 'react'
import Header from '../Common/Header'
import image from "../assets/teach.jpg"


// Re-usable componets
import Services from "../Common/Services"
import Portfolio from "../Common/Portfolio"
import Team from '../Common/Team'
import Contact from '../Common/Contact'
import Footer from '../Common/Footer'


class Home extends Component {


    render() {
    
        return (
            <React.Fragment>
               
                    <Header 
                        title="Welcome to Ovacademia"
                        subtitle="HOW CAN WE HELP YOU TODAY"
                        buttonText="Tell me more"
                        // titleLink="/services"
                        showButton={true}
                        image={image}
                    />
                    <Services /> 
                    <Portfolio />
                    <Team />
                    <Contact />
                    <Footer/>
                
            </React.Fragment>
        )
    }
}

export default Home
