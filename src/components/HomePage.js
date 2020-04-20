import React, { Component } from 'react'
import Sliding from './Sliding'
import Products from './Products'
import Info from './Info'
import Experts from './Experts'
   
export class HomePage extends Component {
    render() {
        return (
            <>
            <Sliding />
            <Products />
            <Info />
            <Experts />
            </>
        )
    }
}

export default HomePage
