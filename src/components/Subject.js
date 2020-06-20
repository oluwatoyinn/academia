import React from 'react'
import { Link } from 'react-router-dom'

const Subject = () => {
    return (
        <div>
            <header id="navbar">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

                    <Link to="/" className="nav-link" > <span className="text-capitalize header ">academia</span> </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            {/* eslint-disable-next-line */}
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutus">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#getTutor">GET TUTOR</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#expert">EXPERT</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registertutor">BECOME A TUTOR</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Subject
