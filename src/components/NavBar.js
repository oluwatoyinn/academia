import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" className="navbar">
                    <Navbar.Brand href="#home" className="mr-5">Academia</Navbar.Brand>
                        <Nav className="ml-auto">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item ml-5">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item ml-5">
                                    <Link to="/">About</Link>
                                </li>
                                <li className="nav-item ml-5 mr-5">
                                    <Link to="/">Subject</Link>
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
