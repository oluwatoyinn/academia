import React from 'react'
// import {Link} from 'react-router-dom'

function Footer(props) {
    return (
        <React.Fragment>
           <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Ovacademia 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2"  href="https://github.com/oluwatoyinn"><i className="fab fa-github" /></a>
                        <a className="btn btn-dark btn-social mx-2"  href="https://www.linkedin.com/in/ajayioluwatoyin/"><i className="fab fa-linkedin-in" /></a>
                        <a className="btn btn-dark btn-social mx-2"  href="https://ova.netlify.app/"><i className="fab fa-globe" /></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms and Conditions</a>
                    </div>
                    </div>
                </div>
            </footer>
            
        </React.Fragment>
    )
}

export default Footer