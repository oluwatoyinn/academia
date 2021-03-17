import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Pagewrapper extends Component { 

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#home">Ovacademia</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ml-1" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                            {/* <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li> */}
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger become-a-tutor" to="/login">Become a Tutor</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>  
                  {this.props.children}
            </React.Fragment>
        )
    }
}
