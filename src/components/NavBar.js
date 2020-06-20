import React, { Component, Fragment } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

// import "bootstrap/js/src/collapse.js";
// import {MdPhone} from 'react-icons/md';


class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <div id="navbar">
                    <Navbar bg="dark" variant="dark" className="navbar fixed-top mb-2"  collapseOnSelect expand="lg">   
                        <Link to="/" className="nav-link" > <span className="text-uppercase header ">academia</span> </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className=" ml-auto" >
                                   
                                    <ul className="navbar-nav align-items-left ml-5 mr-5 ">
                                        <li className="nav-item  mr-3 text-light font-weight-bold ">
                                        <a className="nav-link" href="#slider">HOME</a>
                                        </li>
                                        <li className="nav-item  mr-3 text-light font-weight-bold ">
                                            <a className="nav-link" href="#getTutor">GET TUTOR</a>
                                        </li>
                                        <li className="nav-item  mr-4 text-light font-weight-bold ">
                                        
                                        <a className="nav-link" href="#expert">EXPERTS</a>
                                        </li>
                                        <li className="nav-item  mr-3 text-light font-weight-bold ">
                                        <a className="nav-link" href="#footer">ABOUT US</a>
                                        </li>
                                        <li className="nav-item ">
                                            <Link to="/registertutor" className="nav-link">BECOME A TUTOR</Link>
                                        </li>  
                                    </ul>  
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar> 
                    </div> 

                {/* <div id="">
                <Navbar bg="dark" variant="dark" className="navbar fixed-top nav-collapse" >   
                    <Link to="/" className="nav-link" > <span className="text-uppercase  ">academia</span> </Link>
                            <ul className="nav ml-auto  ml-5 mr-5 ">
                                <li className="  mr-3 text-light font-weight-bold" >
                                  <a className="nav-link"  data-toggle="collapse" data-target=".nav-collapse.show" href="#slider">HOME</a>
                                </li>
                                <li className="mr-3 text-light font-weight-bold ">
                                    <a className="nav-link" href="#getTutor"  data-toggle="collapse" data-target=".nav-collapse.show">GET TUTOR</a>
                                </li>
                                <li className="mr-4 text-light font-weight-bold ">  
                                   <a className="nav-link" href="#expert"  data-toggle="collapse" data-target=".nav-collapse.show">EXPERTS</a>
                                </li>
                                <li className=" mr-3 text-light font-weight-bold ">
                                  <a className="nav-link" href="#footer"  data-toggle="collapse" data-target=".nav-collapse.show">ABOUT US</a>
                                </li>
                                <li className="">
                                    <Link to="/registertutor" className="nav-link">BECOME A TUTOR</Link>
                                </li>  
                            </ul>  
                </Navbar> 
                </div>  */}



{/* <div className=" bg-dark navbar fixed-top nav-collapse">
<li className="active nav"><a href="#home" data-toggle="collapse" data-target=".nav-collapse">Home</a></li>
<ul className="nav ml-auto">
<li><a href="#about" data-toggle="collapse" data-target=".nav-collapse">About</a></li>
<li><a href="#portfolio" data-toggle="collapse" data-target=".nav-collapse">Portfolio</a></li>
<li><a href="#services" data-toggle="collapse" data-target=".nav-collapse">Services</a></li>
<li><a href="#contact" data-toggle="collapse" data-target=".nav-collapse">Contact</a></li>
</ul>
</div> */}

            </Fragment>
        )
    }
}

export default NavBar
