import React, { Component } from 'react'
import Sliding from './Sliding'
import Products from './Products'
import Info from './Info'
import Experts from './TestFolder/Experts'
// import FormBin from './FormBin' 
   
export class HomePage extends Component {
    render() {
        return (
            <>
            <Sliding />
            <Products />
            <Info />
{/* FormBin for API Calls */}
            {/* <FormBin />  */}
{/* api calls */}
            <Experts />
            </>
        )
    }
}

export default HomePage
