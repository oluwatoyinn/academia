import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {MdPhone} from 'react-icons/md';


class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" className="navbar">
                    {/* <Navbar.Brand href="#home" className="mr-5">Academia</Navbar.Brand> */}
                    <Link to="/" className="nav-link" > <span className="text-capitalize header ">academia</span> </Link>
                        <Nav className="ml-auto">
                            <ul className="navbar-nav align-items-center ml-5 mr-5 ">
                                
                                 <li className="nav-item ml-5 mr-3 text-light font-weight-bold ">
                                    <MdPhone /> 08136784410
                                </li>
                                <li className="nav-item ml-5 mr-5 text-light font-weight-bold ">
                                   <MdPhone /> 09876545678
                                </li>
                                <li className="nav-item ">
                                    <Link to="/registertutor" className="nav-link">Become a tutor</Link>
                                </li>
                              
                            </ul>
                        </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form> */}
                </Navbar> 
            </>
        )
    }
}

export default NavBar
