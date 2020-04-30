import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <React.Fragment>

                <footer className="page-footer apply_tutor font-small bg-primary my-5 py-2">
                    <div className="container apply_text">
                        <div className="list-unstyled list-inline my-3 text-center ">
                            <div className="my-4">
                                <h5 className="text-capitalize teaching">experienced in teaching?</h5>
                            </div>
                            <div className="my-4">
                            <Link to="/registertutor" className="btn tutor btn-rounded text-capitalize">apply to tutor</Link>
                            </div>
                        </div>                       
                    </div>               
                </footer>

                <footer className="page-footer footer_details font-small mdb-color lighten-3 pt-4">
                <div className="container-fluid text-center text-md-left">
                {/* Grid row */}
                    <div className="row">
                    {/* Grid column */}

                    <div className="col-md-3 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 className="font-weight-bold text-uppercase mb-4">get to know us</h5>
                        <ul className="list-unstyled text-capitalize">
                            <li>
                                <p> <Link to="">about academia</Link> </p>
                            </li>
                            <li>
                                <p> <Link href="#!">trust and safety</Link> </p>
                            </li>
                            <li>
                                <p><Link href="#!">blog</Link></p>
                            </li>
                            <li>
                                <p><Link href="#!">awards</Link></p>
                            </li>
                        </ul>
                    </div>

                    {/* Grid column */}
                    <hr className="clearfix w-100 d-md-none" />
                    {/* Grid column */}

                    <div className="col-md-3 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 className="font-weight-bold text-uppercase mb-4">learn with us</h5>
                        <ul className="list-unstyled text-capitalize">
                            <li>
                                <p> <Link to="">home tutoring</Link> </p>
                            </li>
                            <li>
                                <p> <Link href="#!">find subject</Link> </p>
                            </li>
                            <li>
                                <p><Link href="#!">find tutor</Link></p>
                            </li>
                           
                        </ul>
                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-3 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 className="font-weight-bold text-uppercase mb-4">work with us</h5>
                        <ul className="list-unstyled text-capitalize">
                            <li>
                                <p> <Link to="/registertutor">become a tutor</Link> </p>
                            </li>          
                        </ul>
                    </div>
                
                    <hr className="clearfix w-100 d-md-none" />
                    
                
                    {/* Grid column */}
                    <hr className="clearfix w-100 d-md-none" />
                    {/* Grid column */}

                        <div className="col-md-3 col-lg-2 text-center mx-auto my-4">
                            <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>  
                            <ul className="list-unstyled py-2">
                                <li>
                                    <Link type="button" className="btn-floating btn-fb">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link type="button" className="btn-floating btn-tw">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                </li>
                                <li>             
                                    <Link type="button" className="btn-floating btn-gplus">
                                        <i className="fab fa-google-plus-g" />
                                    </Link>
                                </li>
                                <li>                
                                <Link type="button" className="btn-floating btn-dribbble">
                                    <i className="fab fa-dribbble" />
                                </Link>
                                </li> 
                            </ul> 
                        </div>
                    </div>
                </div>
              
                </footer>
                {/* Footer */}


            </React.Fragment>
        )
    }
}

export default Footer
